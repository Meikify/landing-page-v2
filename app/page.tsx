"use client"

// React imports
import { useState, useEffect, useRef } from "react"
import type React from "react"

// Hooks
import { useAnalytics } from "@/hooks/use-analytics"

// Section components
import { Header } from "@/components/sections/Header"
import { HeroSection } from "@/components/sections/HeroSection"
import { SolutionsSection } from "@/components/sections/SolutionsSection"
import { MethodologySection } from "@/components/sections/MethodologySection"
import { CasosSection } from "@/components/sections/CasosSection"
import { AntesDepuesSection } from "@/components/sections/AntesDepuesSection"
import { TestimonialsSection } from "@/components/sections/TestimonialsSection"
import { FundadorSection } from "@/components/sections/FundadorSection"
import { ContactFormSection } from "@/components/sections/ContactFormSection"
import { CTASection } from "@/components/sections/CTASection"
import { Footer } from "@/components/sections/Footer"

// UI components
import { Notification, type NotificationProps } from "@/components/ui/Notification"
import { ScrollTracker } from "@/components/scroll-tracker"

// Config
import { CONFIG } from "@/lib/config"

export default function MeikifyWebsite() {
  // Hooks
  const analytics = useAnalytics()
  
  // State
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [visibleSections, setVisibleSections] = useState(new Set<string>())
  const [visibleMethodologyCards, setVisibleMethodologyCards] = useState(new Set<string>())
  const [notification, setNotification] = useState<NotificationProps | null>(null)
  
  // Refs
  const videoRef = useRef<HTMLVideoElement | null>(null)

  // Notification handlers
  const showNotification = (type: string, title: string, message: string) => {
    console.log("Notification:", type, title, message)
    setNotification({ type, title, message, onClose: () => setNotification(null) })
    setTimeout(() => {
      setNotification(null)
    }, 6000)
  }

  const closeNotification = () => {
    setNotification(null)
  }

  // Event handlers
  const handleWhatsAppClick = (source = "general") => {
    analytics.trackWhatsAppClick(source)
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${CONFIG.PHONE_NUMBER}&text=${encodeURIComponent(CONFIG.WHATSAPP_MESSAGE)}`
    window.open(whatsappUrl, "_blank", "noopener,noreferrer")
  }

  const handleDemoRequest = () => {
    analytics.trackDemoRequest("demo_vip")
    window.open("https://calendar.notion.so/meet/joanmeikify/diary", "_blank", "noopener,noreferrer")
  }

  // Effects
  useEffect(() => {
    analytics.trackPageView("Meikify Homepage", window.location.href)
  }, [analytics])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    const video = videoRef.current
    const handleEnded = () => {
      setTimeout(() => {
        if (video) {
          video.currentTime = 0
          video.play()
        }
      }, 5000)
    }
    if (video) {
      video.addEventListener("ended", handleEnded)
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSections((prev) => new Set([...prev, entry.target.id]))
        }
      })
    }, observerOptions)

    const methodologyObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const cardId = entry.target.getAttribute("data-card-id")
          if (cardId) {
            if (entry.isIntersecting) {
              setVisibleMethodologyCards((prev) => new Set([...prev, cardId]))
            } else {
              setVisibleMethodologyCards((prev) => {
                const newSet = new Set(prev)
                newSet.delete(cardId)
                return newSet
              })
            }
          }
        })
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    const timer = setTimeout(() => {
      const sections = document.querySelectorAll("section[id]")
      sections.forEach((section) => observer.observe(section))

      const methodologyCards = document.querySelectorAll("[data-card-id]")
      methodologyCards.forEach((card) => methodologyObserver.observe(card))
    }, 100)

    return () => {
      clearTimeout(timer)
      observer.disconnect()
      methodologyObserver.disconnect()
    }
  }, [])

  useEffect(() => {
    const script = document.createElement("script")
    script.src = `https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`
    script.async = true
    script.defer = true
    document.head.appendChild(script)

    return () => {
      const existingScript = document.querySelector(`script[src*="recaptcha/api.js"]`)
      if (existingScript) {
        document.head.removeChild(existingScript)
      }
    }
  }, [])


  return (
    <div className="min-h-screen bg-white overflow-x-hidden pt-20">
      {/* Notification */}
      {notification && (
        <Notification
          type={notification.type}
          title={notification.title}
          message={notification.message}
          onClose={closeNotification}
        />
      )}
      {/* Floating Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-yellow-400/20 to-cyan-400/20 rounded-full blur-3xl transition-all duration-1000"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
      </div>

      <Header analytics={analytics} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      <HeroSection analytics={analytics} setIsMenuOpen={setIsMenuOpen} />

      <SolutionsSection visibleSections={visibleSections} />

      <MethodologySection visibleMethodologyCards={visibleMethodologyCards} />
      <CasosSection visibleSections={visibleSections} />

      <AntesDepuesSection visibleSections={visibleSections} />

      <TestimonialsSection />

      <FundadorSection visibleSections={visibleSections} />

      <ContactFormSection 
        analytics={analytics}
        onShowNotification={showNotification}
      />

      <CTASection 
        visibleSections={visibleSections}
        handleDemoRequest={handleDemoRequest}
      />

      <Footer analytics={analytics} onWhatsAppClick={handleWhatsAppClick} />

      {/* Scroll Tracking Component */}
      <ScrollTracker
        sections={[
          "hero",
          "soluciones",
          "metodologia",
          "casos",
          "antes-despues",
          "testimonios",
          "fundador",
          "diagnostico",
          "contacto",
        ]}
      />

    </div>
  )
}

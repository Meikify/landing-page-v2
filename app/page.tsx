"use client"

import { useState, useEffect, useRef } from "react"
import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight,
  Sparkles,
  Shield,
  MessageSquare,
  Star,
  X,
  Users,
} from "lucide-react"

import { useAnalytics } from "@/hooks/use-analytics"
import { ScrollTracker } from "@/components/scroll-tracker"
import { SolutionsSection } from "@/components/sections/SolutionsSection"
import { MethodologySection } from "@/components/sections/MethodologySection"
import { ContactFormSection } from "@/components/sections/ContactFormSection"
import { CasosSection } from "@/components/sections/CasosSection"
import { AntesDepuesSection } from "@/components/sections/AntesDepuesSection"
import { FundadorSection } from "@/components/sections/FundadorSection"
import { Header } from "@/components/sections/Header"
import { Footer } from "@/components/sections/Footer"
import { HeroSection } from "@/components/sections/HeroSection"
import { TestimonialsSection } from "@/components/sections/TestimonialsSection"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLinkedin,
  faInstagram,
  faYoutube,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons"
import { CONFIG } from "@/lib/config"
import Image from 'next/image'
// Tipos globales ya están definidos en types/globals.d.ts

// Agregar después de los imports
const animationStyles = `
  @keyframes fadeInLeft {
    from {
      opacity: 0;
      transform: translateX(-50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes fadeInRight {
    from {
      opacity: 0;
      transform: translateX(50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeInScale {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  @keyframes slideInFromTop {
    from {
      opacity: 0;
      transform: translateY(-50px) scale(0.95);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
  }

  @keyframes fadeInOut {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    20%, 80% {
      opacity: 1;
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      transform: translateY(-20px);
    }
  }

  .animate-fade-in-left {
    animation: fadeInLeft 0.8s ease-out forwards;
  }

  .animate-fade-in-right {
    animation: fadeInRight 0.8s ease-out forwards;
  }

  .animate-fade-in-up {
    animation: fadeInUp 0.8s ease-out forwards;
  }

  .animate-fade-in-scale {
    animation: fadeInScale 0.8s ease-out forwards;
  }

  .animate-float {
    animation: float 3s ease-in-out infinite;
  }

  .animate-slide-in-top {
    animation: slideInFromTop 0.5s ease-out forwards;
  }

  .animate-pulse-gentle {
    animation: pulse 2s ease-in-out infinite;
  }

  .animate-stagger-1 {
    animation-delay: 0.1s;
  }

  .animate-stagger-2 {
    animation-delay: 0.2s;
  }

  .animate-stagger-3 {
    animation-delay: 0.3s;
  }

  .animate-stagger-4 {
    animation-delay: 0.4s;
  }

  /* Elementos inicialmente ocultos */
  [class*="animate-fade-in"]:not(.animate-fade-in-scale) {
    opacity: 0;
  }

  .animate-fade-in-scale {
    opacity: 0;
    transform: scale(0.9);
  }

  @keyframes scroll-infinite {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  .animate-scroll-infinite {
    animation: scroll-infinite 30s linear infinite;
  }

  .animate-scroll-infinite:hover {
    animation-play-state: paused;
  }

  @keyframes twinkle {
    0%, 100% {
      opacity: 0.2;
      transform: scale(1);
    }
    50% {
      opacity: 1;
      transform: scale(1.2);
    }
  }
`

// Componente de notificación con el diseño exacto de la imagen
interface NotificationProps {
  type: string;
  title: string;
  message: string;
  onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({ type, title, message, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl border-4 border-green-500 shadow-2xl max-w-md mx-4 animate-slide-in-top">
        <div className="p-8 text-center">
          {/* Emoji y título */}
          <div className="mb-6">
            <div className="text-4xl mb-3">🎉</div>
            <h3 className="text-2xl font-bold text-green-600">¡Solicitud enviada!</h3>
          </div>

          {/* Mensaje */}
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Gracias por confiar en Meikify. Hemos recibido tu información y te enviaremos el diagnóstico automatizado
            muy pronto.
          </p>

          {/* Botón de cerrar (opcional, se puede cerrar automáticamente) */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  )
}



export default function MeikifyWebsite() {
  const analytics = useAnalytics()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [visibleSections, setVisibleSections] = useState(new Set<string>())
  const [visibleMethodologyCards, setVisibleMethodologyCards] = useState(new Set<string>())
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [notification, setNotification] = useState<NotificationProps | null>(null)


  // Función para mostrar notificaciones
  const showNotification = (type: string, title: string, message: string) => {
    console.log("Notification:", type, title, message)
    setNotification({ type, title, message, onClose: () => setNotification(null) })
    // Auto-cerrar después de 6 segundos
    setTimeout(() => {
      setNotification(null)
    }, 6000)
  }

  const closeNotification = () => {
    setNotification(null)
  }

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
      }, 5000) // espera 5 segundos después de terminar
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

    // Observer específico para las cards de metodología
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

    // Pequeño delay para asegurar que el DOM esté listo
    const timer = setTimeout(() => {
      const sections = document.querySelectorAll("section[id]")
      sections.forEach((section) => observer.observe(section))

      // Observar cards de metodología individualmente
      const methodologyCards = document.querySelectorAll("[data-card-id]")
      methodologyCards.forEach((card) => methodologyObserver.observe(card))
    }, 100)

    return () => {
      clearTimeout(timer)
      observer.disconnect()
      methodologyObserver.disconnect()
    }
  }, [])

  // Load reCAPTCHA v3 script
  useEffect(() => {
    const script = document.createElement("script")
    script.src = `https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`
    script.async = true
    script.defer = true
    document.head.appendChild(script)

    // Cleanup function
    return () => {
      const existingScript = document.querySelector(`script[src*="recaptcha/api.js"]`)
      if (existingScript) {
        document.head.removeChild(existingScript)
      }
    }
  }, [])



  // Track page view on mount
  useEffect(() => {
    analytics.trackPageView("Meikify Homepage", window.location.href)
  }, [analytics])


  const handleWhatsAppClick = (source = "general") => {
    // Track WhatsApp click
    analytics.trackWhatsAppClick(source)

    // Crear la URL de WhatsApp
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${CONFIG.PHONE_NUMBER}&text=${encodeURIComponent(CONFIG.WHATSAPP_MESSAGE)}`
    // Abrir en nueva ventana
    window.open(whatsappUrl, "_blank", "noopener,noreferrer")
  }

  const handleDemoRequest = () => {
    // Track demo request
    analytics.trackDemoRequest("demo_vip")

    // Abrir calendario de citas
    window.open("https://calendar.notion.so/meet/joanmeikify/diary", "_blank", "noopener,noreferrer")
  }

  const handleCTAClick = (buttonText: string, section: string) => {
    analytics.trackCTAClick(buttonText, section)
  }

  return (
    <div className="min-h-screen bg-white overflow-x-hidden pt-20">
      <style dangerouslySetInnerHTML={{ __html: animationStyles }} />
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

      {/* Futuristic CTA */}
      <section
        id="contacto"
        className="py-24 bg-gradient-to-r from-slate-900 via-blue-900 to-cyan-900 text-white relative overflow-hidden overflow-visible"
      >
        <div className="container mx-auto px-6 relative z-20">
          <div className={`${visibleSections.has("contacto") ? "animate-fade-in-scale" : ""}`}>
            {/* Título centrado */}
            <div className="text-center mb-16">
              <h2 className="text-6xl font-black leading-tight mb-6">
                ¿Listo para el{" "}
                <span className="text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text">
                  salto cuántico
                </span>
                ?
              </h2>
              <p className="text-2xl text-blue-100 leading-relaxed">
                Tu competencia ya está automatizando. No te quedes atrás en la revolución de la IA.
              </p>
            </div>
            {/* Features alineados al centro */}
            <div className="text-center mb-16">
              <div className="grid grid-cols-1 md:grid-cols-1 gap-8 justify-items-center">
                <h3 className="text-3xl font-bold text-cyan-300">Comienza tu transformación</h3>
                <div className="space-y-4">
                  {[
                    { icon: <Star className="w-6 h-6" />, text: "Diagnóstico express" },
                    { icon: <Shield className="w-6 h-6" />, text: "Garantía de resultados" },
                    { icon: <Users className="w-6 h-6" />, text: "Soporte 24/7 especializado" },
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-4 text-cyan-300">
                      {feature.icon}
                      <span className="font-medium text-lg">{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-8">
                <Button
                  onClick={handleDemoRequest}
                  size="lg"
                  variant="outline"
                  className="border-2 text-lg font-bold rounded-full transition-all duration-300 transform hover:scale-105 bg-transparent w-full sm:w-auto px-8 py-4"
                  style={{
                    borderColor: "#00bce7",
                    color: "#00bce7",
                  }}
                  onMouseEnter={(e) => {
                    ;(e.target as HTMLElement).style.backgroundColor = "#00bce7"
                    ;(e.target as HTMLElement).style.color = "#1e293b"
                  }}
                  onMouseLeave={(e) => {
                    ;(e.target as HTMLElement).style.backgroundColor = "transparent"
                    ;(e.target as HTMLElement).style.color = "#00bce7"
                  }}
                >
                  Diagnóstico Gratis
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

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

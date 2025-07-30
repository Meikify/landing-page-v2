"use client"

import { useState } from 'react'
import Image from 'next/image'
import { GradientButton } from '@/components/ui/gradient-button'
import { useScrollToSection } from '@/hooks/use-scroll-to-section'
import { NAVIGATION_ITEMS } from '@/lib/constants'
import type { AnalyticsTracker } from '@/types'

interface HeaderProps {
  analytics: AnalyticsTracker
  isMenuOpen: boolean
  setIsMenuOpen: (open: boolean) => void
}

export const Header: React.FC<HeaderProps> = ({ analytics, isMenuOpen, setIsMenuOpen }) => {
  const { createScrollHandler, scrollToSection } = useScrollToSection()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-800/95 backdrop-blur-md border-gray-200 shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a
              href="#hero"
              className="hover:text-cyan-400 transition-colors cursor-pointer"
              onClick={createScrollHandler("#hero")}
            >
              <Image
                src="/images/meikify-logo.webp"
                alt="Meikify Logo"
                width={140}
                height={36}
                priority
                className="object-contain"
              />
            </a>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {NAVIGATION_ITEMS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-white hover:text-cyan-600 font-medium transition-all duration-300 group"
                onClick={createScrollHandler(item.href, analytics, { buttonText: item.name, section: "header" })}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-yellow-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <GradientButton
              size="default"
              onClick={createScrollHandler("#diagnostico", analytics, { buttonText: "Diagnóstico Gratis", section: "header" })}
            >
              Diagnóstico Gratis
            </GradientButton>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`block w-5 h-0.5 bg-[#0ea5e9] transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-1" : ""}`}
              ></span>
              <span
                className={`block w-5 h-0.5 bg-[#0ea5e9] mt-1 transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}
              ></span>
              <span
                className={`block w-5 h-0.5 bg-[#0ea5e9] mt-1 transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-1" : ""}`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-gray-200 pt-4 bg-white/95 backdrop-blur-md rounded-lg shadow-lg">
            <div className="flex flex-col space-y-4">
              {NAVIGATION_ITEMS.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-slate-700 hover:text-cyan-600 font-medium transition-colors px-4 py-2 rounded-lg hover:bg-gray-50"
                  onClick={(e) => {
                    e.preventDefault()
                    setIsMenuOpen(false)
                    scrollToSection(item.href, analytics, { buttonText: item.name, section: "mobile_menu" })
                  }}
                >
                  {item.name}
                </a>
              ))}
              <GradientButton
                className="mx-4"
                onClick={() => {
                  setIsMenuOpen(false)
                  scrollToSection("#diagnostico", analytics, { buttonText: "Solicita tu diagnóstico gratis", section: "mobile_menu" })
                }}
              >
                Solicita tu diagnóstico gratis
              </GradientButton>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
"use client"

import Image from 'next/image'
import { MessageSquare } from 'lucide-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faInstagram,
  faYoutube,
  faTiktok,
} from '@fortawesome/free-brands-svg-icons'
import { useScrollToSection } from '@/hooks/use-scroll-to-section'
import { CONFIG } from '@/lib/config'
import type { AnalyticsTracker } from '@/types'

interface FooterProps {
  analytics: AnalyticsTracker
  onWhatsAppClick: (source: string) => void
}

export const Footer: React.FC<FooterProps> = ({ analytics, onWhatsAppClick }) => {
  const { createScrollHandler } = useScrollToSection()

  return (
    <footer className="bg-slate-900 py-16 text-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Logo and Tagline */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Image
                src="/images/meikify-logo.webp"
                alt="Meikify Logo"
                width={200}
                height={52}
                loading="lazy"
                className="object-contain"
              />
            </div>
            <p className="text-slate-300 leading-relaxed max-w-sm">
              Potencia tu equipo con IA y logra nuevos resultados.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold text-white mb-6 text-lg">Navegación</h4>
            <ul className="space-y-4 text-slate-300">
              <li>
                <a
                  href="#hero"
                  className="hover:text-cyan-400 transition-colors cursor-pointer"
                  onClick={createScrollHandler("#hero")}
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#soluciones"
                  className="hover:text-cyan-400 transition-colors cursor-pointer"
                  onClick={createScrollHandler("#soluciones")}
                >
                  Soluciones
                </a>
              </li>
              <li>
                <a
                  href="#metodologia"
                  className="hover:text-cyan-400 transition-colors cursor-pointer"
                  onClick={createScrollHandler("#metodologia")}
                >
                  Metodología
                </a>
              </li>
              <li>
                <a
                  href="#diagnostico"
                  className="hover:text-cyan-400 transition-colors cursor-pointer"
                  onClick={createScrollHandler("#diagnostico")}
                >
                  Diagnóstico
                </a>
              </li>
              <li>
                <a href="/privacidad" className="hover:text-cyan-400 transition-colors">
                  Aviso de Privacidad
                </a>
              </li>
              <li>
                <a href="/terminos" className="hover:text-cyan-400 transition-colors">
                  Términos de Servicio
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-6 text-lg">Contacto</h4>
            <div className="space-y-4 text-slate-300">
              <div className="flex items-center space-x-3">
                <MessageSquare className="w-5 h-5 text-cyan-400" />
                <a href="mailto:hola@meikify.cl" className="hover:text-cyan-400 transition-colors">
                  hola@meikify.cl
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-cyan-400">📞</span>
                <a
                  href="#"
                  onClick={() => onWhatsAppClick("footer")}
                  className="hover:text-cyan-400 transition-colors"
                  aria-label="Enviar mensaje WhatsApp al +56 9 5899 5317"
                >
                  +56 9 5899 5317
                </a>
              </div>

              {/* Social Media Icons */}
              <div className="flex space-x-4 pt-4 text-white">
                <a
                  href="https://www.linkedin.com/company/meikifycl/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Meikify"
                >
                  <FontAwesomeIcon icon={faLinkedin} className="text-cyan-300 hover:text-gray-400 text-2xl" />
                </a>
                <a
                  href="https://www.instagram.com/joan.meikify/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Meikify"
                >
                  <FontAwesomeIcon icon={faInstagram} className="text-cyan-300 hover:text-gray-400 text-2xl" />
                </a>
                <a
                  href="https://www.youtube.com/@joan.meikify"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube Meikify"
                >
                  <FontAwesomeIcon icon={faYoutube} className="text-cyan-300 hover:text-gray-400 text-2xl" />
                </a>
                <a
                  href="https://www.tiktok.com/@joan.meikify"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok Meikify"
                >
                  <FontAwesomeIcon icon={faTiktok} className="text-cyan-300 hover:text-gray-400 text-2xl" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-700 mt-12 pt-8">
          <p className="text-slate-400 text-center">© 2025 Meikify. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
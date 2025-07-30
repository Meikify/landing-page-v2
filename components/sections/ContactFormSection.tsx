"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Shield, Sparkles } from 'lucide-react'
import type { AnalyticsTracker, NotificationProps } from '@/types'

interface ContactFormSectionProps {
  analytics: AnalyticsTracker
  onShowNotification: (type: string, title: string, message: string) => void
}

export const ContactFormSection: React.FC<ContactFormSectionProps> = ({ 
  analytics, 
  onShowNotification 
}) => {
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null)

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Mostrar estado de carga
    const submitButton = document.querySelector('button[type="submit"]') as HTMLButtonElement
    const originalText = submitButton.innerHTML
    submitButton.innerHTML =
      '<div class="flex items-center justify-center"><div class="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>Enviando...</div>'
    submitButton.disabled = true

    try {
      // Execute reCAPTCHA v3
      const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
      if (!siteKey) throw new Error('reCAPTCHA site key not configured');
      const token = await window.grecaptcha.execute(siteKey, {action: 'submit'})
      setRecaptchaToken(token)

      // Obtener los datos del formulario
      const formData = new FormData(e.target as HTMLFormElement)
      const data = {
        nombre: formData.get("name") as string,
        correo: formData.get("email") as string,
        whatsapp: formData.get("whatsapp") as string,
        empresa: formData.get("company") as string,
        cargo: formData.get("position") as string,
        tarea_proceso: formData.get("process") as string,
        recaptcha_token: token,
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
      
      if (response.ok) {
        onShowNotification("success", "¡Solicitud enviada!", "")
        // Google Ads conversion tracking
        if (
          typeof window !== 'undefined' &&
          (window as any).gtag &&
          process.env.NEXT_PUBLIC_GOOGLE_ADS_ID &&
          process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL
        ) {
          ;(window as any).gtag('event', 'conversion', {
            send_to: `${process.env.NEXT_PUBLIC_GOOGLE_ADS_ID}/${process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL}`,
          })
        }
        ;(e.target as HTMLFormElement).reset()
        setRecaptchaToken(null)
      } else {
        onShowNotification(
          "error",
          "Error de conexión 🌐",
          `${response.status}`,
        )
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error)
      onShowNotification(
          "error",
        "Error de conexión 🌐",
        "Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo o contáctanos directamente.",
      )
    } finally {
      // Restaurar el botón
      submitButton.innerHTML = originalText
      submitButton.disabled = false
    }
  }

  return (
    <section id="diagnostico" className="py-24 bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Genera tu diagnóstico inteligente en menos de{" "}
              <span className="text-transparent bg-gradient-to-r from-cyan-400 to-yellow-400 bg-clip-text">
                2 minutos
              </span>
            </h2>
            <div className="space-y-2 text-lg text-slate-300">
              <p>Descubre cómo automatizar tareas, ahorrar tiempo y aumentar tus ventas con IA.</p>
              <p>Recibirás un informe personalizado con análisis y recomendaciones en tu correo o WhatsApp.</p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl">
            <form className="space-y-6" onSubmit={handleFormSubmit}>
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                  Nombre y Apellido
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Juan Perez"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-slate-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="ejemplo@empresa.com"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-slate-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                  required
                />
              </div>

              {/* WhatsApp Field */}
              <div>
                <label htmlFor="whatsapp" className="block text-sm font-semibold text-slate-700 mb-2">
                  WhatsApp (con código país)
                </label>
                <input
                  type="tel"
                  id="whatsapp"
                  name="whatsapp"
                  placeholder="+56912345678"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-slate-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                  required
                />
              </div>

              {/* Company Field */}
              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-slate-700 mb-2">
                  Empresa
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder="ACME Ltda."
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-slate-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                  required
                />
              </div>

              {/* Position Field */}
              <div>
                <label htmlFor="position" className="block text-sm font-semibold text-slate-700 mb-2">
                  Cargo
                </label>
                <input
                  type="text"
                  id="position"
                  name="position"
                  placeholder="Gerente de Operaciones"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-slate-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                  required
                />
              </div>

              {/* Process Field */}
              <div>
                <label htmlFor="process" className="block text-sm font-semibold text-slate-700 mb-2">
                  ¿Qué tarea o proceso te gustaría automatizar?
                </label>
                <textarea
                  id="process"
                  name="process"
                  rows={4}
                  placeholder="Ej: 'Responder mensajes de WhatsApp, Emitir facturas'"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-slate-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <Button
                  type="submit"
                  size="lg"
                  className="w-full px-4 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white"
                  onClick={() => {
                    analytics.trackCTAClick("Generar diagnóstico con IA", "formulario")
                  }}
                >
                  <Sparkles className="w-5 h-5" />
                  <span className="whitespace-nowrap">Generar diagnóstico con IA</span>
                </Button>
              </div>

              {/* Privacy Notice */}
              <div className="flex items-start space-x-3 pt-4 text-sm text-slate-600">
                <Shield className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  <strong>No compartimos tus datos con nadie.</strong> Solo los usamos para generar tu propuesta
                  personalizada.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Star, Shield, Users } from "lucide-react"

interface CTASectionProps {
  visibleSections: Set<string>
  handleDemoRequest: () => void
}

export const CTASection: React.FC<CTASectionProps> = ({
  visibleSections,
  handleDemoRequest,
}) => {
  return (
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
  )
}
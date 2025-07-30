"use client"

import Image from 'next/image'
import { Brain, Users, Target } from 'lucide-react'
import type { VisibleSections } from '@/types'

interface FundadorSectionProps {
  visibleSections: VisibleSections
}

export const FundadorSection: React.FC<FundadorSectionProps> = ({ visibleSections }) => {
  const credentials = [
    { icon: <Brain className="w-6 h-6" />, title: "Ejecutivo", desc: "Liderazgo estratégico" },
    { icon: <Users className="w-6 h-6" />, title: "Docente", desc: "Formación especializada" },
    { icon: <Target className="w-6 h-6" />, title: "Consultor", desc: "Resultados medibles" },
  ]

  return (
    <section
      id="fundador"
      className="py-24 bg-gradient-to-br from-slate-50 via-white to-cyan-50 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-40 h-40 bg-gradient-to-br from-cyan-200/20 to-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-gradient-to-br from-yellow-200/20 to-orange-200/20 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-slate-900 mb-6">
            Quién está{" "}
            <span className="text-transparent bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text">
              detrás de Meikify
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Conoce la experiencia y visión que impulsa cada transformación digital
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Imagen del fundador */}
          <div className={`${visibleSections.has("fundador") ? "animate-fade-in-left" : ""}`}>
            <div className="relative">
              <div className="w-full max-w-md mx-auto">
                <div className="relative">
                  {/* Efectos decorativos alrededor de la imagen */}
                  <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-3xl blur-xl"></div>
                  <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-3xl blur-xl"></div>

                  {/* Contenedor de la imagen */}
                  <div className="relative bg-white rounded-3xl p-2 shadow-2xl">
                    <div className="relative w-full h-[500px] rounded-2xl overflow-hidden">
                      <Image
                        src="/images/joan_toro.jpeg"
                        alt="Joan Toro - Fundador de Meikify"
                        fill
                        loading="lazy"
                        className="object-cover object-center hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contenido del fundador */}
          <div className={`space-y-8 ${visibleSections.has("fundador") ? "animate-fade-in-right" : ""} text-center sm:text-left`}>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-slate-900 leading-tight">La visión detrás de Meikify</h3>

              <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                <p className="text-xl font-semibold text-slate-800">Soy Joan Toro, fundador de Meikify.</p>
                <p>
                  Llevo más de <strong>12 años ayudando a empresas</strong> a transformar su forma de trabajar,
                  combinando estrategia, tecnología y personas para obtener resultados concretos y sostenibles.
                </p>
                <p>
                  Mi propósito es claro: <strong className="text-cyan-600">hacer que las cosas pasen</strong> con
                  soluciones ágiles, humanas y eficaces.
                </p>

                <p>
                  Integro mi experiencia como <strong>ejecutivo, docente y consultor</strong> para guiar a las
                  organizaciones en su evolución, alineando sus equipos y procesos con la potencia de la inteligencia
                  artificial y la automatización.
                </p>
              </div>

              {/* Credenciales destacadas */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
                {credentials.map((credential, index) => (
                  <div
                    key={index}
                    className="text-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="inline-flex p-3 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-white mb-3">
                      {credential.icon}
                    </div>
                    <h4 className="font-bold text-slate-900 mb-1">{credential.title}</h4>
                    <p className="text-sm text-slate-600">{credential.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
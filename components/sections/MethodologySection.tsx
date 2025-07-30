"use client"

import { Card, CardContent } from '@/components/ui/card'
import { METHODOLOGY_STEPS } from '@/lib/constants'
import { getIcon } from '@/lib/icon-utils'
import type { VisibleMethodologyCards } from '@/types'

interface MethodologySectionProps {
  visibleMethodologyCards: VisibleMethodologyCards
}

export const MethodologySection: React.FC<MethodologySectionProps> = ({ visibleMethodologyCards }) => {
  return (
    <section id="metodologia" className="py-24 bg-gradient-to-br from-white via-cyan-50 to-yellow-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-slate-900 mb-6">
            Una metodología centrada en las{" "}
            <span className="text-transparent bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text">
              personas y los resultados
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            En Meikify creemos que la tecnología por sí sola no transforma nada. Por eso trabajamos con un enfoque que
            pone a las personas primero y garantiza resultados reales.
          </p>
        </div>

        <div className="relative">
          {/* Central Timeline */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#00bce7] via-blue-500 to-yellow-400 hidden lg:block"></div>

          <div className="space-y-24">
            {METHODOLOGY_STEPS.map((step, index) => (
              <div key={index} className={`flex items-center ${step.side === "right" ? "lg:flex-row-reverse" : ""}`}>
                <div className={`lg:w-1/2 ${step.side === "right" ? "lg:pl-16" : "lg:pr-16"}`}>
                  <Card
                    data-card-id={`methodology-${index}`}
                    className={`bg-white shadow-xl border-0 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 ${
                      visibleMethodologyCards.has(`methodology-${index}`)
                        ? step.side === "left"
                          ? "animate-fade-in-left"
                          : "animate-fade-in-right"
                        : "opacity-0 " + (step.side === "left" ? "translate-x-[-50px]" : "translate-x-[50px]")
                    }`}
                    style={{
                      transition: "all 0.6s ease-out",
                    }}
                  >
                    <CardContent className="p-8">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className={`p-4 rounded-2xl bg-gradient-to-br ${step.color} text-white`}>
                          {getIcon(step.icon, "w-12 h-12")}
                        </div>
                        <div>
                          <div className="text-sm font-bold text-slate-500">{step.phase}</div>
                          <h3 className="text-2xl font-bold text-slate-900">{step.title}</h3>
                        </div>
                      </div>
                      <p className="text-slate-600 leading-relaxed text-lg text-center sm:text-left">{step.description}</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline Node */}
                <div className="hidden lg:block relative">
                  <div
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-xl transition-all duration-500 ${
                      visibleMethodologyCards.has(`methodology-${index}`)
                        ? "scale-100 opacity-100"
                        : "scale-75 opacity-50"
                    }`}
                  >
                    <span className="text-white font-bold text-lg">{step.phase}</span>
                  </div>
                </div>

                <div className="lg:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
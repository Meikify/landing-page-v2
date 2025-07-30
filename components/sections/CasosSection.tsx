"use client"

import { Card, CardContent } from '@/components/ui/card'
import { USE_CASES } from '@/lib/constants'
import type { VisibleSections } from '@/types'

interface CasosSectionProps {
  visibleSections: VisibleSections
}

export const CasosSection: React.FC<CasosSectionProps> = ({ visibleSections }) => {
  return (
    <section id="casos" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-slate-900 mb-6">
            Historias reales.{" "}
            <span className="text-transparent bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text">
              Resultados reales
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Así hemos transformado empresas como la tuya con soluciones medibles y sostenibles
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {USE_CASES.map((useCase, index) => (
            <Card
              key={index}
              className={`hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
                visibleSections.has("casos") ? `animate-fade-in-up animate-stagger-${index + 1}` : ""
              }`}
            >
              <CardContent className="p-8">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg"></div>
                  <div className="relative text-center py-4 px-6 rounded-lg">
                    <div className="text-sm font-bold mb-1 text-cyan-600 uppercase tracking-wider">
                      {useCase.industry}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{useCase.title}</h3>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm text-center sm:text-left">{useCase.description}</p>

                <div className="space-y-2">
                  <h4 className="font-semibold text-slate-900 text-sm text-center sm:text-left">Métricas clave:</h4>
                  <ul className="space-y-1">
                    {useCase.metrics.map((metric, metricIndex) => (
                      <li key={metricIndex} className="text-sm text-slate-600 flex items-start text-center sm:text-left">
                        <span className="text-green-500 mr-2">•</span>
                        <strong>{metric}</strong>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
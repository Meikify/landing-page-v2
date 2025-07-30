"use client"

import { BEFORE_AFTER_DATA } from '@/lib/constants'
import type { VisibleSections } from '@/types'

interface AntesDepuesSectionProps {
  visibleSections: VisibleSections
}

export const AntesDepuesSection: React.FC<AntesDepuesSectionProps> = ({ visibleSections }) => {
  return (
    <section
      id="antes-despues"
      className="py-24 bg-gradient-to-br from-gray-50 via-white to-slate-50 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-red-200/30 to-orange-200/30 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-green-200/30 to-emerald-200/30 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-cyan-100/20 to-blue-100/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Automatizar con IA:{" "}
            <span className="text-transparent bg-gradient-to-r from-red-500 via-orange-500 to-blue-500 bg-clip-text">
              un antes y un después
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            La automatización no solo ahorra horas: elimina errores, mejora la experiencia de tu equipo y libera
            recursos para proyectos estratégicos.
          </p>
        </div>

        {/* Before & After Comparison */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* ANTES - Before Column */}
          <div className={`${visibleSections.has("antes-despues") ? "animate-fade-in-left" : ""}`}>
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl p-8 lg:p-10 shadow-xl border border-gray-200 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-200/20 to-orange-200/20 rounded-full blur-xl transform translate-x-16 -translate-y-16"></div>

              <div className="relative z-10">
                <div className="flex items-center mb-8">
                  <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 rounded-2xl font-bold text-xl shadow-lg">
                    Antes
                  </div>
                </div>

                <div className="space-y-6">
                  {BEFORE_AFTER_DATA.before.map((item, index) => (
                    <div key={index} className="flex items-start space-x-4 group">
                      <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                        <span role="img" aria-label={item.text}>
                          {item.icon}
                        </span>
                      </div>
                      <div className="flex-1">
                        <p className="text-slate-800 font-semibold text-lg leading-tight">{item.text}</p>
                        <p className="text-slate-600 mt-1">{item.subtext}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* DESPUÉS - After Column */}
          <div className={`${visibleSections.has("antes-despues") ? "animate-fade-in-right" : ""}`}>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 lg:p-10 shadow-xl border-2 border-green-200 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-200/30 to-emerald-200/30 rounded-full blur-xl transform translate-x-16 -translate-y-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-cyan-200/20 to-blue-200/20 rounded-full blur-lg transform -translate-x-12 translate-y-12"></div>

              <div className="relative z-10">
                <div className="flex items-center mb-8">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-2xl font-bold text-xl shadow-lg">
                    Después
                  </div>
                </div>

                <div className="space-y-6">
                  {BEFORE_AFTER_DATA.after.map((item, index) => (
                    <div key={index} className="flex items-start space-x-4 group">
                      <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                        <span role="img" aria-label={item.text}>
                          {item.icon}
                        </span>
                      </div>
                      <div className="flex-1">
                        <p className="text-slate-800 font-semibold text-lg leading-tight">{item.text}</p>
                        <p className="text-slate-600 mt-1">{item.subtext}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
"use client"

import { FeatureCard } from '@/components/ui/feature-card'
import { BENEFITS_DATA } from '@/lib/constants'
import { getIcon } from '@/lib/icon-utils'
import type { VisibleSections } from '@/types'

interface SolutionsSectionProps {
  visibleSections: VisibleSections
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({ visibleSections }) => {
  return (
    <section id="soluciones" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] opacity-5"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            El futuro de tu negocio es{" "}
            <span className="text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text">
              ahora
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Así es cómo la automatización inteligente transforma tu operación y te coloca por delante del mercado
          </p>
        </div>

        {/* Layout con Robot a la derecha */}
        <div className="grid lg:grid-cols-3 gap-8 relative z-10">
          {/* Cards de beneficios - 8 columnas */}
          <div className="lg:col-span-8 grid md:grid-cols-2 gap-8">
            {BENEFITS_DATA.map((benefit, index) => (
              <FeatureCard
                key={index}
                icon={getIcon(benefit.icon)}
                title={benefit.title}
                description={benefit.description}
                stat={benefit.stat}
                color={benefit.color}
                isVisible={visibleSections.has("soluciones")}
                staggerIndex={index + 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
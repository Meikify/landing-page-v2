"use client"

import { TESTIMONIALS } from '@/lib/constants'

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonios" className="py-24 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Lo que dicen nuestros clientes</h2>
        <div className="grid lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <p className="text-slate-700 mb-4">&ldquo;{t.quote}&rdquo;</p>
              <p className="text-slate-900 font-bold text-right">— {t.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
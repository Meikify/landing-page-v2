import React from 'react'

export const metadata = {
  title: 'Términos de Servicio | Meikify',
  description: 'Consulta los términos y condiciones de uso de nuestros servicios.',
}

export default function TermsPage() {
  return (
    <div className="container mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold mb-6">Términos de Servicio</h1>
      <div className="space-y-4 text-slate-700 leading-relaxed">
        <p>
          A continuación se detallan los términos y condiciones que rigen el uso de los servicios de Meikify.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel velit euismod, accumsan nunc sit
          amet, venenatis urna.
        </p>
      </div>
    </div>
  )
}
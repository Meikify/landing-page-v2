import React from 'react'

export const metadata = {
  title: 'Aviso de Privacidad | Meikify',
  description: 'Conoce nuestro Aviso de Privacidad y el uso que damos a tus datos.',
}

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold mb-6">Aviso de Privacidad</h1>
      <div className="space-y-4 text-slate-700 leading-relaxed">
        <p>
          Aquí encontrarás información sobre cómo recopilamos, usamos y protegemos tus datos personales
          cuando interactúas con Meikify.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut facilisis nulla ac diam facilisis,
          nec feugiat lectus tincidunt.
        </p>
      </div>
    </div>
  )
}
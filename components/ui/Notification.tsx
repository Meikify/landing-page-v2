"use client"

import React from "react"
import { X } from "lucide-react"

export interface NotificationProps {
  type: string
  title: string
  message: string
  onClose: () => void
}

export const Notification: React.FC<NotificationProps> = ({ type, title, message, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl border-4 border-green-500 shadow-2xl max-w-md mx-4 animate-slide-in-top">
        <div className="p-8 text-center">
          {/* Emoji y título */}
          <div className="mb-6">
            <div className="text-4xl mb-3">🎉</div>
            <h3 className="text-2xl font-bold text-green-600">¡Solicitud enviada!</h3>
          </div>

          {/* Mensaje */}
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Gracias por confiar en Meikify. Hemos recibido tu información y te enviaremos el diagnóstico automatizado
            muy pronto.
          </p>

          {/* Botón de cerrar (opcional, se puede cerrar automáticamente) */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  )
}
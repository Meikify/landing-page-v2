import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Obtener credenciales de variables de entorno (solo servidor)
    const API_USERNAME = process.env.API_USERNAME
    const API_PASSWORD = process.env.API_PASSWORD
    
    if (!API_USERNAME || !API_PASSWORD) {
      return NextResponse.json(
        { error: 'API credentials not configured' },
        { status: 500 }
      )
    }
    
    // Crear autenticación básica
    const basicAuth = "Basic " + Buffer.from(`${API_USERNAME}:${API_PASSWORD}`).toString("base64")
    
    // Hacer request al webhook de n8n
    const response = await fetch("https://n8nwebhook.meikify.cl/webhook/leads-diagnostico", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": basicAuth,
      },
      body: JSON.stringify(body)
    })
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    const result = await response.json()
    
    return NextResponse.json({ success: true, data: result })
    
  } catch (error) {
    console.error('Error in contact API:', error)
    return NextResponse.json(
      { error: 'Failed to submit form' },
      { status: 500 }
    )
  }
}
//src/app/layout.jsx

import './globals.css'

export const metadata = {
  title: 'Lavau',
  description: 'Banho self-service inteligente para pets.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
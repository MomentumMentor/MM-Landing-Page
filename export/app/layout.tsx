import { ReactNode } from 'react'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Momentum Mentor - Stop Planning. Start Proving.</title>
        <meta name="description" content="Transform goals into momentum through integrated analytics and systematic progress tracking" />
      </head>
      <body>{children}</body>
    </html>
  )
}

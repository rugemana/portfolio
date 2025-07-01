import './globals.css'

export const metadata = {
  title: 'Rugemana Project Manager',
  description: 'Track and manage your projects',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

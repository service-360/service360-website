import './globals.css'

export const metadata = {
  title: 'Service360',
  description: 'All Services Under One Roof',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

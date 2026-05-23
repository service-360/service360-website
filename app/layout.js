export const metadata = {
  title: "Service360 | Anything. Anytime. Anywhere.",
  
  description:
    "Service360 is a trusted all-in-one service platform in Trichy, Tamil Nadu offering emergency assistance, legal services, healthcare, home services, and lifestyle support.",

  keywords: [
    "Service360",
    "Trichy services",
    "Emergency services in Trichy",
    "Healthcare services",
    "Legal services",
    "Home services",
    "Electrician",
    "Plumbing",
    "Lifestyle services",
  ],

  metadataBase: new URL("https://www.service360.in"),

  openGraph: {
    title: "Service360",
    
    description:
      "India’s trusted all-in-one service ecosystem for emergency, legal, healthcare, home, and lifestyle services.",

    url: "https://www.service360.in",

    siteName: "Service360",

    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Service360",
      },
    ],

    locale: "en_IN",

    type: "website",
  },

  icons: {
    icon: "/favicon.ico",
  },
}

import "./globals.css"

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body>
        {children}
      </body>

    </html>
  )
}

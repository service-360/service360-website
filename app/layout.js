import "./globals.css"
import Script from "next/script"

export const metadata = {
  title: "Service360 | Anything. Anytime. Anywhere.",

  description:
    "India’s trusted all-in-one platform for emergency assistance, legal services, healthcare, home services, and lifestyle support.",

  keywords: [
    "Service360",
    "Home Services",
    "Emergency Services",
    "Plumbing",
    "Electrician",
    "Healthcare",
    "Legal Services",
    "Pet Care",
    "India Services Platform"
  ],

  authors: [{ name: "Service360" }],

  openGraph: {
    title: "Service360 | Anything. Anytime. Anywhere.",

    description:
      "India’s trusted all-in-one platform for emergency assistance, legal services, healthcare, home services, and lifestyle support.",

    url: "https://service360.in",

    siteName: "Service360",

    images: [
      {
        url: "https://service360.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Service360"
      }
    ],

    locale: "en_IN",
    type: "website"
  },

  twitter: {
    card: "summary_large_image",

    title: "Service360 | Anything. Anytime. Anywhere.",

    description:
      "India’s trusted all-in-one platform for emergency assistance, legal services, healthcare, home services, and lifestyle support.",

    images: ["https://service360.in/og-image.jpg"]
  },

  metadataBase: new URL("https://service360.in")
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">

      <body>

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QQYTVJE81V"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];

            function gtag(){
              dataLayer.push(arguments);
            }

            gtag('js', new Date());

            gtag('config', 'G-QQYTVJE81V');
          `}
        </Script>

        {children}

      </body>

    </html>
  )
}

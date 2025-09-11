import "./globals.css"
import Providers from "./providers"   // ✅ default import, no curly braces

export const metadata = {
  title: "Movie Review App",
  description: "Demo project with Next.js",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

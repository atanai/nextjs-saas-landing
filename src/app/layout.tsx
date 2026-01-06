import "./globals.css"

export const metadata = {
  title: "SaaS Landing Demo",
  description: "Modern SaaS landing page built with Next.js and Tailwind CSS",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  )
}

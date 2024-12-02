import { Footer } from "@/components/footer"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Geist } from 'next/font/google'

const geist = Geist({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={geist.className}>
      <head />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen w-full dark:bg-black bg-white">
            {children}
            <Footer />
          </div>

        </ThemeProvider>
      </body>
    </html>
  )
}


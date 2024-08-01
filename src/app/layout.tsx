import { Metadata, Viewport } from 'next'
import { ThemeProvider } from '@/components/theme'

import './globals.css'

export const metadata: Metadata = {
  description: "Todo Nextjs Projects",
  icons: {
    icon: './favicon.ico',
    shortcut: './favicon-32x32.png',
    apple: './apple-touch-icon.png'
  },
  title: {
    default: "Zween Todo",
    template: `%s`
  }
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' }
  ]
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang='en' suppressHydrationWarning>
        <head />
        <body
          className={'relative h-full min-h-screen bg-background tracking-[.2px] leading-6 antialiased'}
        >
          <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}

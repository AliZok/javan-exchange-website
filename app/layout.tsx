import type { Metadata } from 'next'
import { Vazirmatn } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const vazirmatn = Vazirmatn({
  subsets: ['arabic'],
  variable: '--font-vazirmatn'
})

export const metadata: Metadata = {
  title: 'صرافی جوان | تبدیل ارز با بهترین نرخ',
  description: 'صرافی جوان - خرید و فروش ارز، حواله های ارزی، تبدیل ارز با بهترین نرخ روز',
  // icons: {
  //   icon: '/icon.png',
  // },
  openGraph: {
    title: 'صرافی جوان | تبدیل ارز با بهترین نرخ',
    description: 'صرافی جوان - خرید و فروش ارز، حواله های ارزی، تبدیل ارز با بهترین نرخ روز',
    images: [
      {
        url: '/images/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'صرافی جوان',
      },
    ],
  },
  // twitter: {
  //   card: 'summary_large_image',
  //   title: 'صرافی آرین | Aryan Exchange',
  //   description: 'ارز دیجیتال، صرافی آنلاین، انتقال پول و کارت ویزا - خدمات جامع مالی در آرین اکسچنج',
  //   images: ['https://www.aryan-exchange.com/aryan-exchange-logo-square.png'],
  // },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.png',
        type: 'image/png',
      },
      {
        // url: '/aryan-exchange-logo-square-without-bg.png',
        url: '/icon.png',
        type: 'image/png',
        sizes: 'any',
      },
    ],
    apple: '/apple-icon.png',
  },
  // verification: {
  //   google: 'کد_تایید_گوگل_شما',
  // },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fa" dir="rtl" className="bg-background">
      <body className={`${vazirmatn.className} antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

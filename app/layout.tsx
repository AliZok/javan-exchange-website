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

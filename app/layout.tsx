import { Noto_Sans } from 'next/font/google'
import type { Metadata } from 'next'
import './globals.css'

const title = 'Next.js 실습 프로젝트'
const description = '삼성전자 React 심화 과정의 Next.js 프로젝트입니다.'
const image = 'https://picsum.photos/500'
export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    images: [image]
  },
  twitter: {
    title,
    description,
    images: [image]
  }
}

const notoSans = Noto_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap'
})

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={`${notoSans.className} antialiased`}>{children}</body>
    </html>
  )
}

'use client'
import { useRouter } from 'next/navigation'

export default function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  return (
    <div className="fixed inset-0 z-3 flex h-[100vh] w-[100vw] items-center justify-center">
      <div
        className="absolute inset-0 h-full w-full bg-black/50 backdrop-blur-sm"
        onClick={() => router.back()}></div>
      <div className="relative m-10 box-border max-h-[calc(100%-100px)] w-full max-w-[1000px] overflow-auto overscroll-contain rounded-md bg-white p-3 drop-shadow-md">
        {children}
      </div>
    </div>
  )
}

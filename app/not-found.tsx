'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function NotFound() {
  const router = useRouter()

  useEffect(() => {
    router.prefetch('/')
    // eslint-disable-next-line
  }, [])

  function handleClick() {
    // await axios('')
    router.push('/')
  }
  return (
    <>
      <h1>404 페이지를 찾을 수 없습니다.</h1>
      <Link href="/">홈으로 이동!(Link)</Link>
      <div
        onClick={handleClick}
        onMouseEnter={() => router.prefetch('/')}>
        홈으로 이동(Push)
      </div>
    </>
  )
}

'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navigations = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/signin', label: 'Sign In' },
  { href: '/movies', label: 'Movies' },
  { href: '/movies/tt4520988', label: 'Sample Movie' },
  { href: '/async', label: 'Async' },
  { href: '/parallel', label: 'Parallel' }
]

export default function Header() {
  // http://localhost:3000/movies/tt12345677
  const pathname = usePathname()
  return (
    <header className="flex gap-[10px]">
      {navigations.map(nav => {
        return (
          <Link
            key={nav.href}
            href={nav.href}
            data-pathname={pathname}
            className={pathname === nav.href ? 'text-red-500' : ''}>
            {nav.label}
          </Link>
        )
      })}
    </header>
  )
}

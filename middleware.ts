import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

async function getSession() {
  return true
}

export async function middleware(request: NextRequest) {
  if (!(await getSession())) {
    return NextResponse.redirect(new URL('/signin', request.url))
  }
  return NextResponse.next()
}

export const config = {}

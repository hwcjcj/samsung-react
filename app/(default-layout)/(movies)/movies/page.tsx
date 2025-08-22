'use client'
import { fetchMovies } from '@/serverActions'
import { useState } from 'react'

export default function Movies() {
  const [movies, setMovies] = useState([])

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const movies = await fetchMovies(formData)
    setMovies(movies)
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input name="searchText" />
        <button type="submit">검색!</button>
      </form>
      <pre>{JSON.stringify(movies, null, 2)}</pre>
    </>
  )
}

// TypeScript => 컴파일 단계 타입을 체크
// Zod => 런타임 단계 타입을 체크

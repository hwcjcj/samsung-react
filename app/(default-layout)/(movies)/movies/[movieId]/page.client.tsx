'use client'
import axios from 'axios'
import { use, useState, useEffect } from 'react'

interface Movie {
  Title: string
  Plot: string
}

export default function MovieDetails({
  params,
  searchParams
}: {
  params: Promise<{ movieId: string }>
  searchParams: Promise<{ plot: string }>
}) {
  const { movieId } = use(params)
  const { plot = 'short' } = use(searchParams)
  const [movie, setMovie] = useState<Movie>()

  useEffect(() => {
    fetchMovie()
  }, [])

  async function fetchMovie() {
    if (!movieId) return
    await new Promise(resolve => setTimeout(resolve, 2000))
    const { data } = await axios(
      `https://omdbapi.com?apikey=7035c60c&i=${movieId}&plot=${plot}`
    )
    setMovie(data)
  }

  // throw new Error('에러가 발생했어유~😘')

  return (
    <>
      <h1>Movie Details Page!</h1>
      <h1>{movie?.Title}</h1>
      <p>{movie?.Plot}</p>
    </>
  )
}

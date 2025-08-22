import Image from 'next/image'
import axios from 'axios'

interface Movie {
  Title: string
  Poster: string
}

export default async function Poster({
  params
}: {
  params: Promise<{ movieId: string }>
}) {
  const { movieId } = await params
  const { data: movie } = await axios<Movie>(
    `https://omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&i=${movieId}`
  )
  return (
    <Image
      src={movie.Poster.replace('SX300', 'SX1500')}
      alt={movie.Title}
      width={1500}
      height={1500 * 1.5}
    />
  )
}

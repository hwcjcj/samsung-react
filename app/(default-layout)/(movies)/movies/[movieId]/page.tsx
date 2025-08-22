import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'

// async function add(a: number): Promise<number> {
//   return a + 1
// }

// const res = await add(7)

export const generateMetadata = async ({
  params, // 동적 세그먼트
  searchParams // 쿼리스트링
}: {
  params: Promise<{ movieId: string }>
  searchParams: Promise<{ plot?: 'short' | 'full' }>
}): Promise<Metadata> => {
  const { movieId } = await params
  const { plot = 'short' } = await searchParams
  const res = await fetch(
    //axios는 캐싱이 안돼서 next의 fetch를 사용
    `https://omdbapi.com/?apikey=7035c60c&i=${movieId}&plot=${plot}`,
    { cache: 'force-cache' } //주소 기준으로 캐싱
  )

  const movie: Movie = await res.json()

  const title = movie.Title
  const description = movie.Plot
  const image = movie.Poster

  return {
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
}

interface Movie {
  Title: string
  Plot: string
  Poster: string
}

export default async function MovieDetails({
  params,
  searchParams
}: {
  params: Promise<{ movieId: string }>
  searchParams: Promise<{ plot: string }>
}) {
  const { movieId } = await params
  const { plot = 'short' } = await searchParams
  // await new Promise(resolve => setTimeout(resolve, 2000))
  const { data: movie } = await axios<Movie>(
    `https://omdbapi.com?apikey=7035c60c&i=${movieId}&plot=${plot}`
  )

  // throw new Error('에러가 발생했어유~😘')

  return (
    <>
      <h1 className="text-[50px] font-bold">{movie.Title}</h1>
      <Link href={`/poster/${movieId}`}>
        <Image
          src={movie.Poster}
          alt={movie.Title}
          width={700}
          height={700 * 1.5}
        />
      </Link>
      <p>{movie.Plot}</p>
    </>
  )
}

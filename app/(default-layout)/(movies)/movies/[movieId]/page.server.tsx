import axios from 'axios'

export default async function MovieDetails({
  params,
  searchParams
}: {
  params: Promise<{ movieId: string }>
  searchParams: Promise<{ plot: string }>
}) {
  const { movieId } = await params
  const { plot = 'short' } = await searchParams
  await new Promise(resolve => setTimeout(resolve, 2000))
  const { data: movie } = await axios(
    `https://omdbapi.com?apikey=7035c60c&i=${movieId}&plot=${plot}`
  )

  // throw new Error('에러가 발생했어유~😘')

  return (
    <>
      <h1>{movie.Title}</h1>
      <p>{movie.Plot}</p>
    </>
  )
}

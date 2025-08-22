'use client'
export default function Error({ error }: { error: Error }) {
  return (
    <>
      <h1>Error Page!!</h1>
      <p>{error.message}</p>
    </>
  )
}

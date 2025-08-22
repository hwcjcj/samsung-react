export default function Layout({
  children,
  poster
}: {
  children: React.ReactNode
  poster: React.ReactNode
}) {
  return (
    <>
      {children}
      {poster}
    </>
  )
}

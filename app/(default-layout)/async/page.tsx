import Abc from './Abc'
import Xyz from './Xyz'
import { delay } from '@/utils'
import { Suspense } from 'react'
import Loader from '@/components/Loader'

export default async function Async() {
  await delay(1000)
  return (
    <>
      <h1>Async 페이지 컴포넌트!!</h1>
      <Suspense
        fallback={
          <Loader
            color="red"
            position="relative"
          />
        }>
        <Abc />
      </Suspense>
      <Suspense
        fallback={
          <Loader
            color="green"
            position="relative"
          />
        }>
        <Xyz />
      </Suspense>
    </>
  )
}

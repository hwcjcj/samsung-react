import { delay } from '@/utils'

export default async function Abc() {
  await delay(2000)
  return <h2>ABC 컴포넌트!</h2>
}

'use client'
import { signIn } from '@/serverActions'

export default function SignIn() {
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const { token } = await signIn(formData)
    localStorage.setItem('token', token)
    // 서버로 보내서 인증 처리...
  }
  return (
    <>
      <h1>Sign In Page!</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="id"
          type="text"
        />
        <input
          name="pw"
          type="password"
        />
        <button type="submit">로그인</button>
      </form>
    </>
  )
}

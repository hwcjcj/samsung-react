'use client'

export default function SignIn() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const id = formData.get('id')
    const pw = formData.get('pw')
    // 서버로 보내서 인증 처리...
    console.log(id, pw)
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

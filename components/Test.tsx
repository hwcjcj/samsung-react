'use client'

export default function Test() {
  // await new Promise(resolve => setTimeout(resolve, 3000))
  return (
    <div>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>
          <h1 onClick={() => {}}>Test Component!</h1>
        </li>
      </ul>
    </div>
  )
}

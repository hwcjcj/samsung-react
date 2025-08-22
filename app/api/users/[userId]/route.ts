import type { NextRequest } from 'next/server'

// http://localhost:3000/api/users/325
export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ userId: string }> }
) {
  const { userId } = await params
  return Response.json({
    id: userId,
    name: 'Neo',
    age: 22
  })
}

// const user = {
//   contact: {
//     address: {
//       city: 'Seoul'
//     }
//   }
// }
// console.log(user.contact.address.city) // 'Seoul'

// const { contact } = user
// console.log(contact.address.city) // 'Seoul'

// const { contact: { address: { city } } } = user
// console.log(city) // 'Seoul'

export function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

// await delay(3000)

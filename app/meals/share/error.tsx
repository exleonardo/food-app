'use client'

export default function Error({
  reset,
}: {
  error: { digest?: string } & Error
  reset: () => void
}) {
  return (
    <main className={'error'}>
      <h1>Something went wrong!</h1>
      <p>Failed to create meal.</p>
    </main>
  )
}

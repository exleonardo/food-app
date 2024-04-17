'use client'

export default function Error({
  error,
  reset,
}: {
  error: { digest?: string } & Error
  reset: () => void
}) {
  return (
    <main className={'error'}>
      <h1>Something went wrong!</h1>
      <p>Failed to fetch meal data. Please Try again later.</p>
      <button onClick={() => reset()}>Try again</button>
    </main>
  )
}

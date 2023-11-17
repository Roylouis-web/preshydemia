'use client' // Error components must be Client Components
 
import Link from 'next/link'
import { useEffect } from 'react'

const Error = ({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) => {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div className='bg-slate-500 fixed top-0 min-h-screen z-10 w-full flex justify-center items-center text-white flex-col gap-7'>
      <h1 className='text-2xl sm:text-3xl lg:text-4xl'>Daily limit reached, try again tomorrow!</h1>
      <Link href="/">Go back</Link>
    </div>
  )
}

export default Error
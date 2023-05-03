import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

export default function NotFound() {
    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            // router.go(1)
            router.push('/')
        }, 3000)
    }, [])

  return (
    <div className='text-center'>
      <h1 className='font-bold text-3xl pb-3'>Ooooooops....</h1>
      <h2 className='pb-3 text-2xl'>That page cannot be found</h2>
      <p>
        Go back to <Link className='text-btn underline' href='/'>Homepage</Link>
      </p>
    </div>
  )
}

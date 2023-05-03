import Image from 'next/image'
import { Inter } from 'next/font/google'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
      </Head>
      <div>
        <h1 className='text-3xl font-bold pb-5 text-gray-900 text-center'>Homepage</h1>
        <p className='text-secondary pb-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi delectus, possimus nemo aspernatur a, reprehenderit ipsam, quis laboriosam doloremque sapiente incidunt. Modi accusamus iure minima harum quasi aut nihil molestiae.</p>
        <p className='text-secondary pb-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi delectus, possimus nemo aspernatur a, reprehenderit ipsam, quis laboriosam doloremque sapiente incidunt. Modi accusamus iure minima harum quasi aut nihil molestiae.</p>
        <Link className='block w-36 py-2 my-5 mx-auto bg-btn text-white text-center rounded' href='/ninjas'>
          See Ninja Listing
        </Link>
      </div>
    </>
  )
}

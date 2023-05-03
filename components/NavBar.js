import Link from "next/link"
import Image from "next/image"

export default function NavBar() {
  return (
    <nav className="mt-2.5 mx-auto mb-20 py-2.5 flex justify-end items-end border-b border-borb">
        <div className="mr-auto font-bold tx-xl">
            <Image 
              src={'/logo-ninja.png'}
              alt="ninja"
              width={120}
              height={77}
            />
        </div>
        <Link className='a' href="/">Home</Link>
        <Link className='a' href="/about">About</Link>
        <Link className='a' href="/ninjas">Ninja Listing</Link>
    </nav>
  )
}

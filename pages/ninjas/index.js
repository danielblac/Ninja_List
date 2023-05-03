import Link from "next/link"

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()
  return {
    props: {
      ninjas: data
    }
  }
}
export default function Ninjas({ ninjas }) {
  return (
    <div>
      <h1 className="text-3xl font-bold pb-5 text-gray-900">All Ninjas</h1>
      {ninjas.map(ninja => (
        <Link href={`/ninjas/${ninja.id}`} key={ninja.id} className="px-0.5 py-4 bg-ninbg block mx-5 my-2.5 border-l-8 border-ninbg hover:border-l-8 hover:border-btn">
          <h3 className="font-semibold pb-1">{ninja.name}</h3>
        </Link>
      ))}
    </div>
  )
}

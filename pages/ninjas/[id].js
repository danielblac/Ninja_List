export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()

    const paths = data.map(ninja => {
        return {
            params: {
                id: ninja.id.toString()
            }
        }
    })

    return {
        paths,
        fallback: false 
    }
}

export async function getStaticProps(context) {
    const id = context.params.id
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const data = await res.json()

    return {
      props: {
        ninja: data
      }
    }
}

export default function Details({ ninja }) {
  return (
    <div>
      <h1 className="text-3xl font-bold pb-5 text-gray-900">{ ninja.name }</h1>
      <p className='text-secondary pb-3'>{ ninja.email }</p>
      <p className='text-secondary pb-3'>{ ninja.website }</p>
      <p className='text-secondary pb-3'>{ ninja.address.city }</p>
    </div>
  )
}

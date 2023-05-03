import Head from "next/head"

export default function about() {
  return (
    <>
      <Head>
        <title>Ninja List | About</title>
      </Head>
      <div>
        <h1 className="text-3xl font-bold pb-5 text-gray-900">About</h1>
        <p className='text-secondary pb-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit aliquam voluptatibus odit? Tenetur accusamus sunt sint omnis eius dolore reiciendis voluptatem incidunt voluptas quaerat maiores architecto, voluptates blanditiis aut nemo?</p>
        <p className='text-secondary pb-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit aliquam voluptatibus odit? Tenetur accusamus sunt sint omnis eius dolore reiciendis voluptatem incidunt voluptas quaerat maiores architecto, voluptates blanditiis aut nemo?</p>
      </div>
    </>
  )
}

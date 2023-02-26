import * as React from 'react'
import Layout from '../components/layout'
import Pallette from '../components/pallette'
import Form from '../components/form'

export default function IndexPage() {
  return (
    <>
    <main>
      <Layout pageTitle="Home Page" />
      <h1 className='text-3xl font-bold underline text-center'>Welcome to Tempestry!</h1>
      <p className='text-center'>A Temperature Blanket App</p>
    </main>
    <Form/>
    <Pallette/>
    <div className="flex justify-center">
      <button className="mt-4 mb-4 border p-4 bg-[#323176] rounded-full hover:bg-pink-800 text-white font-bold">Start Knitting!</button>
    </div>
    </>
  )
}

export function Head() {
  return (
    <>
      <title>Tempestry | Home</title>
      <meta name="home" content="Temptestry | Weather History App For Fiber Artists" />
    </>
  );
}

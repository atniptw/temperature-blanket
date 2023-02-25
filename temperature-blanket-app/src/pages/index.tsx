import * as React from 'react'
import Layout from '../components/layout'

export default function IndexPage() {
  return (
    <main>
      <Layout pageTitle="Home Page" />
      <h1 className='text-3xl font-bold underline'>Welcome to Tempestry!</h1>
      <p>A Temperature Blanket App</p>
    </main>
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

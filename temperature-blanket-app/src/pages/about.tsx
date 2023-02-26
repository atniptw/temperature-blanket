import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

export default function AboutPage() {
  return (
    <main>
      <Layout pageTitle='About'/>
      <h1>About Me</h1>
      <p>
        Hi there! I'm the proud creator of this site, which I built with Gatsby.
      </p>
    </main>
  )
}

export function Head() {
    return (
    <>
    <title>Tempestry | About</title>
    <meta
        name="about"
        content="Temptestry | Weather History App For Fiber Artists"
    />
    </>
    )
}

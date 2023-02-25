import * as React from 'react'
import { Link } from 'gatsby'

export default function AboutPage() {
  return (
    <main>
      <Link to="/">Back to Home</Link>
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

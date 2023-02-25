import * as React from 'react';
import { Link } from 'gatsby';

interface props {
    pageTitle: string
    children?: any
}

export default function Layout({ pageTitle, children }: props) {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
}

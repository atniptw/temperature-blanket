import * as React from 'react';
import Navbar from './navbar';

interface props {
    pageTitle: string
    children?: any
}

export default function Layout({ pageTitle, children }: props) {
  return (
    <>
    <div>
      <Navbar/>
    </div>
    <div>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
    </>
  );
}

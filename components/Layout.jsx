import React from 'react'
import Head from 'next/head'

// cursor
import Cursor from "components/Cursor"

function Layout({ children }) {
  return (
    <div className="layout">
        <Head>
          <title>Custom Cursor</title>
        </Head>
        <header></header>
        <main className="main-container">
          <Cursor/>
          {children}
        </main>
        <footer></footer>
    </div>
  )
}

export default Layout
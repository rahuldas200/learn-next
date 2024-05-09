import React from 'react'
import Link from 'next/link'

export default function aboutLayout({children}) {
  return (
    <div>
        <nav className='mt-5 bg-slate-500 p-3'>
          <ul className="flex gap-6 ">
            <li>
              <Link href="/about/mission" replace>Mission</Link>
            </li>
            <li>
              <Link href="/about/vission">Vission</Link>
            </li>
          </ul>
        </nav>
      {children}
    </div>
  )
}

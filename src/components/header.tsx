import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header className='sticky top-0 bg-gray-400 w-full px-3 py-6'>
        <div className='flex items-center justify-between'>
            <p>Hello world</p>
            <nav>
                <Link href={"/"}>Home</Link>
            </nav>
        </div>
    </header>
  )
}

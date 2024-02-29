"use client"

import Link from 'next/link'

export default function Logo() {
    return (
        <div className='flex items-center justify-center'>
            <Link href='/' className='hover:bg-gray-200 hover:cursor-pointer transition-all'>
                <h1 className='text-5xl font-light uppercase'>ben.</h1>
            </Link>
        </div>
    )
}
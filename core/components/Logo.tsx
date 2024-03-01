"use client"

import Link from 'next/link'

export default function Logo() {
    return (
        <div className='flex items-center justify-center'>
            <Link href='/' className='hover:bg-gray-200 hover:cursor-pointer transition-all px-2 py-1'>
                <h1 className='text-4xl uppercase font-medium'>ben.</h1>
            </Link>
        </div>
    )
}
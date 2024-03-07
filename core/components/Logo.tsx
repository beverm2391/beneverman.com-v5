import Link from 'next/link'
import { cn } from '@/lib/utils'

export default function Logo() {
    return (
        <div className={cn(
            'flex items-center justify-center',
            "z-10", // make sure the logo sits on top of everything else (thus is clickable)
        )}>
            <Link href='/' className='hover:bg-gray-200 hover:cursor-pointer transition-all px-2 py-1'>
                <h1 className='text-4xl uppercase font-medium text-black'>ben</h1>
            </Link>
        </div>
    )
}
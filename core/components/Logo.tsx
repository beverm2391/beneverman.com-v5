import Link from 'next/link'
import { cn } from '@/lib/utils'
import { FaRegSmileBeam } from 'react-icons/fa'

export default function Logo() {
    return (
        <div className={cn(
            'flex items-center justify-center',
            "z-10", // make sure the logo sits on top of everything else (thus is clickable)
        )}>
            <Link href='/' className='hover:bg-gray-200/10 hover:cursor-pointer transition-all p-2 rounded-full'>
                <FaRegSmileBeam className='w-8 h-8 text-white' />
                {/* <h1 className='text-3xl uppercase font-medium'></h1> */}
            </Link>
        </div>
    )
}
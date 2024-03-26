import CustomCursor from '@/core/components/CustomCursor'

export default function LandingPage() {    
    return (
        <main className='absolute top-0 left-0 w-full h-full'>
            <CustomCursor />
            <section className='relative h-[100dvh] w-full bg-red-300'>
                some content
            </section>
            <section className='relative h-[100dvh] w-full bg-blue-300'>
                some more content
            </section>
        </main>
    )
}
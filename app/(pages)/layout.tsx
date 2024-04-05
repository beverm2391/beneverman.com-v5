export default function PagesLayout({ children }: { children: React.ReactNode }) {
    //!  This layout is used for all pages to control width, padding, and margin
    return (
        <section className='pages-layout w-full mx-auto max-w-4xl py-8'>
            {children}
        </section>
    )
}
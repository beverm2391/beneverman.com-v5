import Footer from "@/core/components/Footer";

export default function PagesLayout({ children }: { children: React.ReactNode }) {
    //!  This layout is used for all pages to control width, padding, and margin
    return (
        <section className='pages-layout'>
            {children}
        </section>
    )
}
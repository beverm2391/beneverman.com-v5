import "@/styles/blog.css"

export default async function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="py-8 md:py-16">
            {children}
        </div>
    );
}
import "@/styles/blog.css"

export default async function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            {children}
        </div>
    );  
}
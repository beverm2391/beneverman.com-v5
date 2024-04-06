import "@/styles/blog.css"
import Footer from "@/core/components/Footer";

export default async function Layout({ children }: { children: React.ReactNode }) {
    return (
        // ! The `blog-layout` class does not go here because it will mess up the w-screen in [slug].tsx
        // ! Instead it is added to the `page.tsx` file
        <div>
            {children}
        </div>
    );  
}
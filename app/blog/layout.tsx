import "./styles.css"
import 'katex/dist/katex.min.css'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <main className="mx-auto max-w-4xl">
            <h1>My blog</h1>
            <div>
                {children}
            </div>
        </main>
    )
}
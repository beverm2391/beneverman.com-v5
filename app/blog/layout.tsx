export default function Layout({ children } : { children: React.ReactNode }) {
    return (
        <div>
            My blog
        <main>
            {children}
        </main>
        </div>
    )
}
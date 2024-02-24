export default function Home() {
  const currentYear: number = new Date().getFullYear();
  return (
    <div>
      <h1 className="text-8xl font-medium mb-4">
        Ben Everman<br />
        <span className="text-8xl">&copy;{currentYear}</span>
      </h1>
      <p className="font-inter text-lg">
        I'm 23 y/o and I live in Atlanta, Ga.
      </p>
    </div>
  )
}

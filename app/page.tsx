import NavBar from "../components/Navbar"
import Hero from "../components/Hero"
import AboutMe from "@/components/AboutMe"

export default function Home() {
  return (
    <>
      <div>
        <header>
          <NavBar />
        </header>
        <main>
          <Hero />
        </main>
        <section>
          <AboutMe />
        </section>
      </div>
    </>
  )
}

import Hero from '../../components/Hero/Hero'
import Container from '../../components/Containers/Container'
import Header from '../../components/Header/Header'
import About from '../../components/About/About'
import Technologies from '../../components/Technologies/Technologies'
import TechBanner from '../../components/Banner/TechBanner'
import Projects from '../../components/Projects/Projects'
import GitHBanner from '../../components/Banner/GitHBanner'
const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Container>
        <About />
        <Technologies />
      </Container>
      <TechBanner />
      <Container>
        <Projects />
      </Container>
      <GitHBanner />
    </>
  )
}
export default Home

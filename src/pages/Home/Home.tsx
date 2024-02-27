import Hero from '../../components/Hero/Hero'
import Container from '../../components/Containers/Container'
import Header from '../../components/Header/Header'
import About from '../../components/About/About'
import Technologies from '../../components/Technologies/Technologies'
import TechBanner from '../../components/Banner/TechBanner'
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
    </>
  )
}
export default Home

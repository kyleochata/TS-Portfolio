import Hero from '../../components/Hero/Hero'
import Container from '../../components/Containers/Container'
import Header from '../../components/Header/Header'
import About from '../../components/About/About'
import Technologies from '../../components/Technologies/Technologies'
const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Container>
        <About />
        <Technologies />
      </Container>
    </>
  )
}
export default Home

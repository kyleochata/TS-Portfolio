import Hero from '../../components/Hero/Hero'
import Container from '../../components/Containers/Container'
import Header from '../../components/Header/Header'
import About from '../../components/About/About'
const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Container>
        <About />
      </Container>
    </>
  )
}
export default Home

import Container from '../Containers/Container'
import './TechBanner.scss'
const TechBanner = () => {
  return (
    <section className="tb-container">
      <Container>
        <div className="tb-icontainer">
          <h1 className="tb-title">Don't see your technology?</h1>
          <h3 className="tb-subtitle">
            I'm a quick learner and love learning!
          </h3>
          <p className="tb-content">
            If you don't see your technology listed, don't worry! I may have
            experience with it or it is similar to something I have already
            worked with. I am always looking to learn new technologies and am a
            quick learner. I am confident that I can learn and adapt to any
            technology you need me to work with.
          </p>
          <a
            href="mailto:kyleochata@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="tb-btn">Contact Me!</button>
          </a>
        </div>
      </Container>
    </section>
  )
}
export default TechBanner

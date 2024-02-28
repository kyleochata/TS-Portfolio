import ProfileImg from '../../assets/images/resized/profile-pic.png'
import GetInTouchBtn from '../Buttons/GetInTouchBtn/GetInTouchBtn'
import './About.scss'
const About = () => {
  return (
    <section className="a-container">
      <div className="a-i-container">
        <img src={ProfileImg} alt="Profile" />
      </div>
      <div className="a-card">
        <h4>Experienced</h4>
        <h2>
          Passionate Front-End Developer Creating Engaging Web Experiences
        </h2>
        <p>
          I am a full stack developer specializing in front-end development,
          currently working at Nexalure Technologies. With a background in
          coding and a passion for creating engaging web experiences, I bring a
          unique blend of technical expertise and creative problem-solving
          skills to every project. Whether it's crafting intuitive user
          interfaces or optimizing website performance, I am dedicated to
          delivering high-quality results that exceed client expectations. Let's
          collaborate and bring your vision to life!
        </p>
        <GetInTouchBtn />
      </div>
    </section>
  )
}
export default About

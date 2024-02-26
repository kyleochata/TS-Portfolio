import TechCard from './TechCard'
import AllCard from './AllCard'
import { techs, allTechs } from '../../utils/data'
import './Technologies.scss'

const Technologies = () => {
  return (
    <section className="t-container">
      <div className="t-top-card">
        <div className="t-titles">
          <h4 className="t-tl-title">Experienced</h4>
          <h2>
            Language Landscape: <br></br>Full-Stack Core, Front-End Mastery
          </h2>
        </div>
        <p className="t-top-p">
          My core full-stack languages are: MongoDB, Express.js, React.js with
          Typescript and Node.js {`(MERN)`}. While these are my core languages,
          I am constantly learning new technologies and frameworks to stay
          updated with the latest trends and best practices. Check out my list
          of technologies I am currently working with or exploring!
        </p>
      </div>
      <section className="t-bot-card">
        <h3 className="tb-sub-title">Core</h3>
        <div className="t-tc-container">
          {techs.map((tech) => (
            <TechCard key={tech.name} {...tech} />
          ))}
        </div>
        <h3 className="tb-sub-title">All Technologies</h3>
        <div className="tb-al-container">
          {allTechs.map((tech) => (
            <AllCard key={tech.name} {...tech} />
          ))}
        </div>
      </section>
    </section>
  )
}
export default Technologies

import PsCard from './PsCard'
import { projects } from '../../utils/data'
import './Projects.scss'
const Projects = () => {
  return (
    <section className="ps-container">
      <div className="ps-h-container">
        <h4 className="ps-h-subtitle">Projects</h4>
        <h2 className="ps-h-title">Featured Builds</h2>
        <p className="ps-h-content">Browse a few of my hand picked projects.</p>
      </div>
      <div className="ps-card-container">
        {projects.map((project) => (
          <PsCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  )
}
export default Projects

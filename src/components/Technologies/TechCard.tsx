import TCImage from './PImages'
import './TechCard.scss'

interface Tech {
  name: string
  description: string
  image: string
}

const TechCard = ({ name, description, image }: Tech) => {
  return (
    <div className="tc-container">
      <TCImage image={image} name={name} />
      <div className="tc-content">
        <h3 className="tc-title">{name}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}
export default TechCard

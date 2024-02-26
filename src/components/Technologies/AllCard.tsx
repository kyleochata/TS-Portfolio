import './AllCard.scss'

interface ATListProps {
  image: string
  name: string
  link: string
  color?: string
}
const ATList = ({ image, name, link, color = 'blue' }: ATListProps) => {
  return (
    <div className="at-container" data-color={color}>
      <a href={link} target="_blank" rel="noreferrer" className="atl-a">
        <div className="at-image">
          <img src={image} alt={`${name} Logo`} />
        </div>
        <h3 className="at-title">{name}</h3>
      </a>
    </div>
  )
}
export default ATList

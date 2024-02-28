import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays, faUserGroup } from '@fortawesome/free-solid-svg-icons'

import './PsCard.scss'

interface PsCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  roles: string
  rolesDesc: string
  teamSize: string
  year: string
  srcLink: string
}
const PsCard = ({
  title,
  tags,
  image,
  description,
  roles,
  rolesDesc,
  teamSize,
  year,
  srcLink,
}: PsCardProps) => {
  return (
    <article className="ps-card">
      <div className="ps-i-container">
        <a href={srcLink} target="_blank" rel="noopener noreferrer">
          <img src={image} alt={title} className="ps-i" />
          <div className="ps-i-overlay">
            <h3 className="ps-i-title">{title}</h3>
            <p className="ps-i-click">Click to view project</p>
          </div>
        </a>
      </div>

      <div className="ps-c-bot">
        <div className="ps-c-tags">
          {tags.map((tag) => (
            <span key={tag} className={`ps-t-span ${tag}`}>
              {tag}
            </span>
          ))}
        </div>
        <h2 className="ps-c-title">{title}</h2>
        <p className="ps-c-desc">{description}</p>
        <h4 className="ps-c-subtitle">Roles: {roles}</h4>
        <p className="ps-c-rdesc">{rolesDesc}</p>
        <div className="ps-c-roles">
          <span>
            <FontAwesomeIcon icon={faUserGroup} style={{ color: '#7ebdc2' }} />
            {` : ${teamSize} person(s)`}
          </span>
          <span>
            <FontAwesomeIcon
              icon={faCalendarDays}
              style={{ color: '#7ebdc2' }}
            />
            {` : ${year}`}
          </span>
        </div>
        <div className="ps-c-links">
          <a href={srcLink} target="_blank" rel="noopener noreferrer">
            <button className="ps-c-btn">Explore on GitHub</button>
          </a>
        </div>
      </div>
    </article>
  )
}
export default PsCard

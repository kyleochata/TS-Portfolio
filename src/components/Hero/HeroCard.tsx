import GetInTouchBtn from '../Buttons/GetInTouchBtn/GetInTouchBtn'
import ResumeBtn from '../Buttons/ResumeBtn/ResumeBtn'
import './HeroCard.scss'
const HeroCard = () => {
  return (
    <div className="hc-container">
      <div className="hc-card">
        <h1 className="hc-title">
          Hi, I'm <strong>Kyle Etrata.</strong>
        </h1>
        <h2 className="hc-subtitle">
          Passionate full-stack developer located in Orange, CA
        </h2>
        <p className="hc-text">
          With expertise in front-end development, I create engaging and
          user-friendly websites that leave a <strong>bold</strong> impression
        </p>
        <div className="hc-btn-container">
          <ResumeBtn />
          <GetInTouchBtn />
        </div>
      </div>
    </div>
  )
}
export default HeroCard

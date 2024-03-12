import Logo from '../../assets/images/resized/BlueLogo1.png'
import ResumeBtn from '../Buttons/ResumeBtn/ResumeBtn'
import { scrollToTop } from '../../utils/helpers'
import './Header.scss'

const Header = () => {
  return (
    <header>
      <div className="h-maxSize">
        <div className="h-logo">
          <img src={Logo} alt="Kyle Etrata Logo" onClick={scrollToTop} />
        </div>
        <nav>
          <ul>
            <li className="about-nav">
              <a href="/">Home</a>
            </li>
            <li className="about-nav">
              <a href="#about">About</a>
            </li>
            <li>
              <ResumeBtn />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
export default Header

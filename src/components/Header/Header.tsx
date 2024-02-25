import Logo from '../../assets/images/resized/BlueLogo1.png'
import ResumeBtn from '../Buttons/ResumeBtn/ResumeBtn'
import './Header.scss'

const Header = () => {
  return (
    <header>
      <div className="h-maxSize">
        <div className="h-logo">
          <img src={Logo} alt="Kyle Etrata Logo" />
        </div>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
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

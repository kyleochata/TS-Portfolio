import KEResume from '../../assets/KyleEtrata-Resume-v2.pdf'
import LogoImage from '../../assets/images/resized/BlueLogo1.png'
import { scrollToTop } from '../../utils/helpers'
import './Footer.scss'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="f-container">
        <div className="f-t-card">
          <div className="f-i-container">
            <img
              src={LogoImage}
              alt="Kyle Etrata Logo"
              className="f-logo"
              onClick={scrollToTop}
            />
          </div>
          <div className="f-r-container">
            <div className="f-r-ic">
              <button className="f-r-btn" onClick={scrollToTop}>
                Back to Top
              </button>
              <a
                className="f-r-btn"
                href={KEResume}
                download="Kyle_Etrata_Resume"
              >
                <button className="f-r-btn">Resume</button>
              </a>
              <a
                href="https://github.com/kyleochata"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="f-r-btn">GitHub</button>
              </a>
              <a
                href="https://www.linkedin.com/in/kyle-etrata/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="f-r-btn">LinkedIn</button>
              </a>
              <a
                href="mailto:kyleochata@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="f-r-btn">Contact Me</button>
              </a>
            </div>
          </div>
        </div>
        <p className="f-text">&copy; 2024 Kyle Etrata. All rights reserved.</p>
      </div>
    </footer>
  )
}
export default Footer

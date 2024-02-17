import KEResume from '../../../assets/KyleEtrata-Resume-v2.pdf'
import './ResumeBtn.scss'
const ResumeBtn = () => {
  return (
    <a href={KEResume} download="Kyle_Etrata_Resume">
      <button className="resume-btn">Resume</button>
    </a>
  )
}
export default ResumeBtn

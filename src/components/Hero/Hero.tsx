import BlogSite from '../../assets/images/MarqueeImgs/BlogSite2.png'
import WeatherApp from '../../assets/images/MarqueeImgs/weatherApp.png'
import HelpDesk from '../../assets/images/MarqueeImgs/HelpDesk.png'
import WillDoImg from '../../assets/images/MarqueeImgs/willdo.png'
import ReportImg from '../../assets/images/MarqueeImgs/report.png'
import SlideImg from '../../assets/images/MarqueeImgs/slideshow.png'
import JateImg from '../../assets/images/MarqueeImgs/JATE.png'
import BBCImg from '../../assets/images/MarqueeImgs/brainbalancecompanion1.png'
import HeroCard from './HeroCard'
import DoubleVMarquee from '../VerticalMarquee/DoubleVMarquee'
import './Hero.scss'

const Hero = () => {
  const images = [BlogSite, WeatherApp, HelpDesk, WillDoImg]
  const secondImages = [ReportImg, SlideImg, JateImg, BBCImg]
  const dupSecondImages = [...secondImages, ...secondImages]
  const dupImages = [...images, ...images]
  return (
    <div className="hero-container" id="hc-container">
      <HeroCard />
      <DoubleVMarquee images={dupImages} secondImages={dupSecondImages} />
    </div>
  )
}
export default Hero

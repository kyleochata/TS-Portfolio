import BlogSite from '../../assets/images/BlogSite.png'
import WeatherApp from '../../assets/images/weatherApp.png'
import DoubleVMarquee from '../VerticalMarquee/DoubleVMarquee'
import HelpDesk from '../../assets/images/HelpDesk.png'
import WillDoImg from '../../assets/images/resized/willdo.png'
import HeroCard from './HeroCard'
import './Hero.scss'

const Hero = () => {
  const images = [BlogSite, WeatherApp, HelpDesk, WillDoImg, BlogSite]
  const dupImages = [...images, ...images]
  return (
    <div className="hero-container" id="hc-container">
      <HeroCard />
      <DoubleVMarquee images={dupImages} />
    </div>
  )
}
export default Hero

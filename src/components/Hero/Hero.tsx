import BlogSite from '../../assets/images/BlogSite.png'
import WeatherApp from '../../assets/images/weatherApp.png'
import DoubleVMarquee from '../VerticalMarquee/DoubleVMarquee'
import HeroCard from './HeroCard'
import './Hero.scss'

const Hero = () => {
  const images = [BlogSite, WeatherApp, BlogSite, WeatherApp, BlogSite]
  const dupImages = [...images, ...images]
  return (
    <div className="hero-container">
      <HeroCard />
      <DoubleVMarquee images={dupImages} />
    </div>
  )
}
export default Hero

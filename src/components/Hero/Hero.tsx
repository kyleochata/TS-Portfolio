import BlogSite from '../../assets/images/BlogSite.png'
import WeatherApp from '../../assets/images/weatherApp.png'
import DoubleVMarquee from '../VerticalMarquee/DoubleVMarquee'
import './Hero.scss'

const Hero = () => {
  const images = [BlogSite, WeatherApp, BlogSite, WeatherApp, BlogSite]
  const dupImages = [...images, ...images]
  return (
    // <div className="hero-container">
    //   <div className="hero-section-L">
    //     <h1 className="hero-title">Hi I'm Kyle Etrata</h1>
    //   </div>
    //   <div className="hero-marquee">
    //     <DoubleVMarquee images={dupImages} />
    //   </div>
    // </div>
    <div className="hero-container">
      <div className="hero-section-L">
        <h1 className="hero-title">Hi I'm Kyle Etrata</h1>
      </div>
      <DoubleVMarquee images={dupImages} />
    </div>
  )
}
export default Hero

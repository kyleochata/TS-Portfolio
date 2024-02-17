import React from 'react'
import './DoubleVMarquee.scss'

interface VerticalMarqueeProps {
  images: string[] // or React.ReactNode[] if passing image components
}

const VerticalMarquee: React.FC<VerticalMarqueeProps> = ({ images }) => {
  return (
    <div className="vertical-marquee-container">
      <div className="top-to-bottom">
        {images.map((imageUrl, index) => (
          <img key={index} src={imageUrl} alt={`Image ${index + 1}`} />
        ))}
      </div>
      <div className="bottom-to-top">
        {images.map((imageUrl, index) => (
          <img key={index} src={imageUrl} alt={`Image ${index + 1}`} />
        ))}
      </div>
    </div>
  )
}

export default VerticalMarquee

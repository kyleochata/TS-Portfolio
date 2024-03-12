import React from 'react'
import './DoubleVMarquee.scss'

interface VerticalMarqueeProps {
  images: string[]
  secondImages: string[]
}

const VerticalMarquee: React.FC<VerticalMarqueeProps> = ({
  images,
  secondImages,
}) => {
  return (
    <div className="vertical-marquee-container">
      <div className="top-to-bottom">
        {images.map((imageUrl, index) => (
          <img key={index} src={imageUrl} alt={`Image ${index + 1}`} />
        ))}
      </div>
      <div className="bottom-to-top">
        {secondImages.map((imageUrl, index) => (
          <img key={index} src={imageUrl} alt={`Image ${index + 1}`} />
        ))}
      </div>
    </div>
  )
}

export default VerticalMarquee

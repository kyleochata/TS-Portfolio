import './PImages.scss'

interface PImagesProps {
  image: string
  name: string
}

const PImages = ({ image, name }: PImagesProps) => {
  return (
    <div className="pi-container">
      <img src={image} alt={`${name} Logo`} />
    </div>
  )
}
export default PImages

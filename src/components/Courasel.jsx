import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import React from 'react'

const Courasel = () => {
  return (
    <div>
     <div className="courasel">
  <Carousel>
      <Carousel.Item>
<img src="background1.webp" alt="" />
      </Carousel.Item>
      <Carousel.Item>
       <img src="background2.webp" alt="" />
      </Carousel.Item>
    </Carousel>
</div>
    </div>
  )
}

export default Courasel

// src/componants/BannerSlider.js
import React from 'react'
import Slider from 'react-slick'
import Image from './Image'
import bannar1 from '../../assets/bannar.jpg'
import bannar2 from '../../assets/banner2.png'
import { Link } from 'react-router-dom'
import "slick-carousel/slick/slick.css"
import SampleNextArrow from './SampleNextArrow'
import SamplePrevArrow from './SamplePrevArrow'
// import "slick-carousel/slick/slick-theme.css"

const BannerSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,     // ✅ Only 1 banner at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
     
  }

  const banners = [bannar1,bannar2]

  return (
    <Slider {...settings}>
      {banners.map((banner, index) => (
        <div key={index}>
          <Link to="/shop">
            <Image src={banner} className="w-full" />
          </Link>
        </div>
      ))}
    </Slider>
  )
}

export default BannerSlider

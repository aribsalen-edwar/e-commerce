import React from 'react'
import Slider from 'react-slick';
import img1 from '../../img/slider-image-1.jpeg'
import img2 from '../../img/slider-image-2.jpeg'
import img3 from '../../img/slider-image-3.jpeg'

const MainSlider =() => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <>
   <div className="container">
    <div className="row ">
    <div className="col-md-8">
    <Slider {...settings}>
    <img src={img3} className='w-100' alt="sliderimages" />
    <img src={img1} className='w-100' alt="sliderimages" />
    <img src={img2} className='w-100' alt="sliderimages" />
    </Slider>
</div>
<div className="col-md-4">
<img src={img1} className='w-100' alt="" />
<img src={img2} className='w-100' alt="" />
</div>
    </div>
 
   </div>
    </>
  )
}
export default MainSlider ;
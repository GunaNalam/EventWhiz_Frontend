import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CardSlider.css';
import { FaCalendarDays, FaLocationDot } from "react-icons/fa6";

const CardSlider = () => {
  const cardData = ["Card 1", "Card 2", "Card 3", "Card 4", "Card 5"];
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    infinite: true,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  };

  const handleDotClick = (index) => {
    setCurrentSlide(index);
    sliderRef.current.slickGoTo(index);
  };

  return (
    <div>
      <Slider {...settings} ref={sliderRef}>
        {cardData.map((card, index) => (
          <div key={index} className="card">
            <div className="carousel-body">
              <div className="carousel-body-sub">
                <div className="CarouselBodyHeading">
                  Event Title 
                </div>  
                <div className="CarouselBodyDesc">
                  Event Description - Ex: Lorem ipsum ng elit. Aliquam, laudantium.
                </div>  
                <div className="CarouselBodyLocDate">
                  <FaCalendarDays /> 20-11-2023
                </div>
                <div className="CarouselBodyLocDate">
                  <FaLocationDot /> Vizag
                </div>
                <button className="btn btn-primary my-3 rounded-pill">Attend</button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className="custom-dots">
        {cardData.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div> 
    </div>
  );
};

export default CardSlider;

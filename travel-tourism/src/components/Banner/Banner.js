import React from "react"
import { NavLink } from 'react-router-dom';
import "../Banner/banner.css"

const bannerContent = {
  heading: 'Welcome to Explore Himalaya',
  subText: 'Explore the beauty, adventure, and serenity of the Himalayas. Your journey to the world’s most majestic mountains begins here.'
};

const Banner = () => {
  const img = "https://images.pexels.com/photos/18646436/pexels-photo-18646436.jpeg";
  return (
    <section className='slider'>
      <div className="banner-static-wrapper">
        <img src={img} className="d-block w-100 banner-static-img" alt="Banner" />
        <div className="banner-card-content">
          <h5 className="heading">{bannerContent.heading}</h5>
          <p className="sub_text">{bannerContent.subText}</p>
          <NavLink to="/about" className="banner-btn">About</NavLink>
          </div>
          </div>
    </section>
  )
}

export default Banner
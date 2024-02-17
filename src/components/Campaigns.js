import React from 'react'
import { useState, useEffect } from 'react';
import Slider from "react-slick";
import Banner from '../api/banner.json';
import ReactFlagsSelect from "react-flags-select";
import { IoIosArrowBack } from "react-icons/io"
import { IoIosArrowForward } from 'react-icons/io'
import Title from './ui/Title';
import { useWindowWidth } from '@react-hook/window-size'

function NextBtn({ onClick, className }) {
  return (
    <button className={`text-purple-700 absolute top-1/2 -right-6 -translate-y-1/2`} onClick={onClick}>
      <IoIosArrowForward size={22} />
    </button>
  );
}

function PrevBtn({ onClick, className }) {
  return (
    <button className={`text-purple-700 absolute top-1/2 -left-6 -translate-y-1/2`} onClick={onClick}>
      <IoIosArrowBack size={22} />
    </button>
  )
}

export default function Campaigns() {

  const windowWidth = useWindowWidth()
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    setBanners(Banner)
  }, [])

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    autoplaySpeed: 3500,
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          arrows: false,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          arrows: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false
        }
      },
    ]

  };

  return (
    <>
      <div className='hidden md:block'>
        <Title >Kampanyalar</Title>
      </div>
      <Slider className='md:-mx-2' {...settings}>
        {banners.length && banners.map((banner, index) => (
          <div key={banner.id} className='md:px-2 outline-none'>
            <img className='md:rounded-lg' src={banner.image}></img>
          </div>
        ))}
      </Slider>
    </>
  )
}

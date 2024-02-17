import React from 'react'
import { useState } from "react";
import Slider from "react-slick";
import ReactFlagsSelect from "react-flags-select";
import { FaFacebook } from 'react-icons/fa6';
import { useWindowWidth } from '@react-hook/window-size'
export default function HeroSection() {

  const windowWidth = useWindowWidth()

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const [selected, setSelected] = useState("TR");

  const phones = {
    US: '+1',
    DE: '+50',
    TR: '+90',
    IT: '+7',
    IN: '+15'
  }

  return (
    <div className='relative h-auto md:h-[500px] before:bg-gradient-to-r before:from-primary-brand-color before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10'>
      {windowWidth >= 768 && <Slider {...settings}>
        <div>
          <img className='w-full h-[500px] object-cover' data-testid="main-image" src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-4.jpg" alt="getir" shape="NORMAL" ></img>
        </div>

        <div>
          <img className='w-full h-[500px] object-cover' data-testid="main-image" src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-1.jpg" alt="getir" shape="NORMAL"></img>
        </div>

        <div>
          <img className='w-full h-[500px] object-cover' data-testid="main-image" src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-2.jpg" alt="getir" shape="NORMAL"></img>
        </div>
      </Slider>}
      <div className='md:container flex justify-between items-center relative md:absolute top-0 left-0 md:left-1/2 translate-x-0 md:-translate-x-1/2 h-full z-20'>
        <div className='hidden md:block'>
          <img src='https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg' alt=''></img>
          <h3 className='mt-8 text-2xl font-semibold text-white'>Dakikalar içinde kapınızda</h3>
        </div>

        <div className='w-full md:w-[400px] md:rounded-lg bg-gray-50 p-6'>
          <h4 className='text-primary-brand-color text-center font-semibold mb-4'>Giriş yap veya kayıt ol</h4>
          <div className='grid gap-y-3'>
            <div className='flex gap-x-2'>
              <ReactFlagsSelect
                countries={Object.keys(phones)}
                customLabels={phones}
                selected={selected}
                onSelect={code => setSelected(code)}
                className='flag-select'
              />
              <label className='flex-1 relative'>
                <input required className='h-14 transition-colors hover:border-primary-brand-color focus:border-primary-brand-color outline-none px-4 border-2 border-gray-200 rounded w-full peer text-sm pt-2' />
                <span className='absolute inset-0 h-full flex items-center px-4 text-sm text-gray-500 transition-all peer-focus:h-7 peer-focus:text-primary-brand-color peer-focus:text-xs peer-valid:h-7 peer-valid:text-primary-brand-color peer-valid:text-xs'>Telefon Numarası</span>
              </label>
            </div>
            <button className='bg-brand-yellow h-12 flex items-center justify-center rounded-md w-full text-md font-semibold text-primary-brand-color transition-colors hover:bg-primary-brand-color hover:text-brand-yellow'>
              Telefon numarası ile devam et
            </button>

            <hr className='my-2' />

            <button className='bg-blue-700 bg-opacity-10 h-12 px-4 flex items-center mr-auto rounded-md w-full text-md font-semibold text-blue-700 text-opacity-80 transition-colors hover:bg-blue-700 hover:text-white'>
              <FaFacebook size={24} />
              <span className='mx-auto'> Facebook ile devam et</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

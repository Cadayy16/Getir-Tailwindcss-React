import React from 'react'
import menusList from "../api/menus.json"
import { useState, useEffect } from 'react'
import { Collapse } from 'react-collapse';
import { useWindowWidth } from '@react-hook/window-size'
import { TiArrowSortedDown } from "react-icons/ti";
export default function Footer() {

  const [isOpen, setIsOpen] = useState(true);
  const windowWidth = useWindowWidth()
  const toggleCollapse = () => {
    if (windowWidth <= 768) {
      setIsOpen(!isOpen)
    }
  }
  const [menus, setMenus] = useState({});

  useEffect(() => {
    setMenus(menusList)
  }, [])

  return (
    <div className='bg-white mt-10'>
      <div className='container mx-auto px-4 md:px-0'>
        <div className='grid gap-y-6 md:grid-cols-2 lg:grid-cols-4 pt-5 md:pt-10'>
          <section>
            <h6 className='text-lg text-primary-brand-color mb-4'>Getir'i indirin!</h6>
            <nav className='grid gap-2 md:gap-4 grid-cols-2 md:grid-cols-1'>
              <a href='#'>
                <img src='https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg' />
              </a>
              <a href='#'>
                <img src='https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg' />
              </a>
              <a href='#'>
                <img src='https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg' />
              </a>
            </nav>
          </section>
          {menus.length && menus.map((menu) => (
            <section>
              <nav className='grid gap-y-2 md:gap-y-4'>
                <h6 onClick={toggleCollapse} className='text-lg text-primary-brand-color flex items-center justify-between'>{menu.title}
                  <button>
                    <TiArrowSortedDown size={15} />
                  </button>
                </h6>
                <Collapse isOpened={isOpen}>
                  <nav>
                    <ul className='grid gap-y-1 md:gap-y-2'>
                      {menu.items.map((item) => (
                        <li>
                          <a className='block text-sm hover:text-brand-color pb-4' key={item.title} href='#'>
                            {item.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </Collapse>
              </nav>
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}

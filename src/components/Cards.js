import React from 'react'
import { useState, useEffect } from 'react'
import cardsData from "../api/cards.json"
export default function Cards() {

  const [cards, setCards] = useState([]);

  useEffect(() => {
    //data isteği
    setCards(cardsData)
  }, [])

  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {cards.length && cards.map(card => (
        <div className=' shadow-2xl bg-white p-14 flex flex-col items-center text-center'>
          <img className='w-[150px] h-[150px] mb-6' src={card.image} />
          <h6 className='text-brand-color font-semibold text-xl'>{card.title}</h6>
          <p className='mt-2 text-md text-gray-500'>{card.description}</p>
        </div>
      ))}
    </div>
  )
}

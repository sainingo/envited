import React from 'react'
import cake from '../assets/cake.png'
 import {FaRegCalendarAlt} from 'react-icons/fa'
 import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
 import { GoLocation } from 'react-icons/go'

const EventPage = () => {
  return (
    <div className='h-screen'>
      <div>
        <img src={cake} alt="Cake holder" />
      </div>

      <div className='m-4 text-xl'>
        <h3 className='font-bold text-2xl'>Birthday Bash</h3>
        <p className='text-lg'>Hosted by Elysia</p>
      </div>

      <div className='flex items-center gap-10 p-4 text-xl justify-around'>
        <i className='text-4xl'>< FaRegCalendarAlt /></i>
        <p className='text-[18px]'>18 August 6:00PM <br></br>
          <span>to 19 August 1:00PM UTC+10</span>
        </p>
        <i className='text-4xl'>< MdOutlineKeyboardArrowRight /></i>
      </div>

      <div className='flex items-center gap-10 p-4 text-xl justify-around'>
        <i className='text-4xl'>< GoLocation /></i>
        <p className='text-[18px]'>Street name <br />
          <span>Suburb, state, Postcode</span>
        </p>
        <i className='text-4xl'>< MdOutlineKeyboardArrowRight /></i>
      </div>
    </div>
  )
}

export default EventPage
import React from 'react'
import cake from '../assets/cake.png'
 import {FaRegCalendarAlt} from 'react-icons/fa'
 import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
 import { GoLocation } from 'react-icons/go'
import { Link } from 'react-router-dom'

const EventPage = () => {
  const localData = JSON.parse(localStorage.getItem('eventData'))
  
  return (
    <div className='h-[100%] md:h-screen lg:flex lg:h-screen lg:p-8'>
      <div className='md:w-[90%] md:mx-auto md:p-8'>
        <img src={cake} alt="Cake holder" className='md:w-[60%] md:mx-auto lg:absolute lg:right-32 lg:w-[30%]'/>
      </div>
      <div className='md:w-[60%] md:mx-auto md:p-8 lg:absolute lg:w-[50%] lg:ml-2 mt-4'>
        
      <div className='m-4 text-xl'>
        <h3 className='font-bold text-2xl'>{localData.host}</h3>
        <p className='text-lg'>Hosted by Elysia</p>
      </div>

      <div className='flex items-center gap-10 p-4 text-xl justify-around'>
        <i className='text-4xl'>< FaRegCalendarAlt /></i>
        <p className='text-[18px]'>{localData.startDate} <br></br>
          <span>to {localData.endDate} UTC+10</span>
        </p>
        <i className='text-4xl'>< MdOutlineKeyboardArrowRight /></i>
      </div>

      <div className='flex items-center gap-10 p-4 text-xl justify-around'>
        <i className='text-4xl'>< GoLocation /></i>
        <p className='text-[18px]'>Street name <br />
          <span>Suburb, {localData.location}, Postcode</span>
        </p>
        <i className='text-4xl'>< MdOutlineKeyboardArrowRight /></i>
      </div>
      <Link to='/'><button className='bg-fuchsia-500 m-4 py-2 px-4 rounded text-white cursor-pointer'>Back to home</button></Link>
      </div>
    </div>
  )
}

export default EventPage
import React from 'react'
import { Link } from 'react-router-dom'

const CreateEvent = () => {
  return (
   <div className='bg-[#240d57]/90 w-full h-screen'>
    <div className='text-white text-4xl text-center p-4'>
      <h1>Create an Event</h1>
    </div>
    <div className='w-[80%] mx-auto'>
    <form className='p-8'>
      <div className='m-2'>
        <label className='text-white'>Event Name</label>
        <input type="text" placeholder='Enter event name' className='w-full p-2 mt-2'/>
      </div>

      <div  className='m-2'>
      <label className='text-white'>Event Host</label>
        <input type="text" placeholder='Enter Host name' className='w-full p-2 mt-2'/>
      </div>

      <div  className='m-2'>
      <label className='text-white'>Start Date</label>
        <input type="date"  className='w-full p-2 mt-2'/>
      </div>

      <div  className='m-2'>
      <label className='text-white'>End Date</label>
        <input type="date" className='w-full p-2 mt-2'/>
      </div>

      <div  className='m-2'>
      <label className='text-white'>Location</label>
        <input type="text" placeholder='Enter location' className='w-full p-2 mt-2'/>
      </div>

      <div  className='m-2'>
      <label className='text-white'>Upload photo</label>
        <input type="file" placeholder='Enter photo' className='w-full p-2 mt-2'/>
      </div>
      
      <div>
        <Link to='/event'><button className='bg-[#e87bf8] px-4 py-2 w-[60%] font-bold text-lg m-2'>Next</button></Link>
      </div>

     </form>
    </div>
  </div>
  )
}

export default CreateEvent
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const CreateEvent = () => {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    event: '',
    host: '',
    startDate: '',
    endDate: '',
    location: '',
    photo: ''
  })

  useEffect(() => {
    const local = JSON.parse(localStorage.getItem('eventData'))

    //if user already created the event redirect to the even page
    if(local) {
      navigate('/event')
    }
  }, [navigate])


  const { event, host, startDate, endDate, location, photo} = formData;

  

  const handleSubmit = (e) => {
    e.preventDefault()

    if(formData) {
      localStorage.setItem('eventData', JSON.stringify(formData))
    }

    navigate('/event')
  }

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
   <div className='bg-[#240d57]/90 w-full h-screen text-white'>
    <div className='text-white text-4xl text-center p-4'>
      <h1>Create an Event</h1>
    </div>
    <div className='w-[80%] mx-auto text-black'>
    <form onSubmit={handleSubmit} className='p-8'>
      <div className='m-2'>
        <label className='text-white'>Event Name</label>
        <input type="text" required placeholder='Enter event name' value={event} name='event'onChange={handleChange} className='w-full p-2 mt-2'/>
      </div>

      <div  className='m-2'>
      <label className='text-white'>Event Host</label>
        <input type="text" required placeholder='Enter Host name' value={host} name="host"onChange={handleChange} className='w-full p-2 mt-2'/>
      </div>

      <div  className='m-2'>
      <label className='text-white'>Start Date</label>
        <input type="date" required name="startDate" value={startDate} onChange={handleChange} className='w-full p-2 mt-2'/>
      </div>

      <div  className='m-2'>
      <label className='text-white'>End Date</label>
        <input type="date" required name="endDate" value={endDate} onChange={handleChange} className='w-full p-2 mt-2'/>
      </div>

      <div  className='m-2'>
      <label className='text-white'>Location</label>
        <input type="text" required name="location" value={location} onChange={handleChange} placeholder='Enter location' className='w-full p-2 mt-2'/>
      </div>

      <div  className='m-2'>
      <label className='text-white'>Upload photo</label>
        <input type="file" required name="photo" value={photo} onChange={handleChange} placeholder='Enter photo' className='w-full p-2 mt-2'/>
      </div>
      
      <div>
        <button className='bg-[#e87bf8] px-4 py-2 w-[60%] font-bold text-lg m-2' type='submit'>Next</button>
      </div>

     </form>
    </div>
  </div>
  )
}

export default CreateEvent
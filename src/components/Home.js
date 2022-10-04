import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='grid lg:flex lg:gap-10 lg:p-4 lg:h-screen'>
     <div className='lg:absolute right-0 lg:w-[60%] lg:mx-auto lg:mt-32'>
     <div className='text-center m-4 lg:pt-1 lg:mt-2 lg:text-end pt-4 text-5xl w-[50%] mx-auto font-bold'>
        <h1 className=''>Imagine if <span className='text-purple-500'>Snapchat</span> had events</h1>
      </div>

      <div className='text-2xl text-center w-[80%] mx-auto p-4 md:text-xl lg:w-[70%] lg:text-end lg:ml-12'>
        <p>Easily host and share events with your friends across any social media</p>
      </div>
     
     </div>
     <div className='w-[80%] mx-auto md:mt-2 lg:w-[60%] lg:pt-8'>
      <img className='w-[80%] h-[85%] md:h-[92%] mx-auto lg:w-[50%]' src='https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ea95af2d-7f06-4f25-859c-9069519053a7/Landing_page_image.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221004%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221004T201009Z&X-Amz-Expires=86400&X-Amz-Signature=1a6dda15ec86bd04f76fff0ef79b86f6c41178bc3980e4c1bff0e31fad5d95e3&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Landing%2520page%2520image.svg%22&x-id=GetObject' alt="Movie night"/>
     </div>

     <div className='w-[80%] mx-auto pb-8 lg:mt-60 lg:pt-36'>
      <Link to='/create'><button className='bg-fuchsia-500 w-[60%] lg:w-[40%] lg:ml-42 p-4 ml-16 rounded-lg text-white text-xl md:ml-32'>Create my event</button></Link>
     </div>

    </div>
  )
}

export default Home
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='grid'>
      <div className='text-center m-4 pt-4 text-5xl w-[50%] mx-auto font-bold'>
        <h1 className=''>Imagine if <span className='text-purple-500'>Snapchat</span> had events</h1>
      </div>

      <div className='text-2xl text-center w-[80%] mx-auto p-4'>
        <p>Easily host and share events with your friends across any social media</p>
      </div>
     
     <div className='w-[80%] mx-auto'>
      <img className='w-[80%] h-[85%] mx-auto' src='https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ea95af2d-7f06-4f25-859c-9069519053a7/Landing_page_image.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221004%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221004T201009Z&X-Amz-Expires=86400&X-Amz-Signature=1a6dda15ec86bd04f76fff0ef79b86f6c41178bc3980e4c1bff0e31fad5d95e3&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Landing%2520page%2520image.svg%22&x-id=GetObject' alt="Movie night"/>
     </div>

     <div className='w-[80%] mx-auto '>
      <Link to='/create'><button className='bg-fuchsia-500 w-[60%] p-4 ml-20 rounded-lg text-white text-xl'>Create my event</button></Link>
     </div>

    </div>
  )
}

export default Home
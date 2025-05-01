import React from 'react'
import { Button } from '@/components/ui/button'
import Upload from './upload/upload'

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="headertext">Online Video Editor</h1>
      <p className="mt-4 text-lg">Create your own video and edit it in any way on both your phone and computer</p>

      <Upload />

    <div className="">
      <img src="images/image1.avif" alt="" className='homeimg' />
    </div>



      <div className="p5 flex flex-wrap items-center justify-center mt-10">
        <div className="w-full sm:w-1/2 p-5">
          <h1 className="text-5xl text-blue-600 font-bold my-5">Your all-in-one online video editor</h1>
          <p>Make your own video from scratch, edit it and add music — all in one screen! Our seamless video editor allows you to manage the added media easily with the help of multi-track timeline.</p>
        </div>
        <div className="w-full sm:w-1/2 items-center">
          <img src="/images/image2.avif" alt="Hero Image" className="w-full h-auto" />
        </div>
      </div>
      <div className="p5 flex flex-wrap items-center justify-center mt-10">
        <div className="w-full sm:w-1/2 items-center">
          <img src="/images/image3.avif" alt="Hero Image" className="w-full h-auto" />
        </div>
        <div className="w-full sm:w-1/2 p-5">
          <h1 className="text-5xl text-red-400 font-bold my-5">Add text to your video</h1>
          <p>Our editor comes with all the features necessary to create a great video — add any text to your project, and personalize it! You can change font, size, boldness, color, add background and more!</p>
        </div>
      </div>
    </div>
  )
}

export default Home

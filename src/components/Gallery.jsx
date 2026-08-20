import React from 'react'
import galleryone from '../assets/gallery/galleryone.webp'
import gallerytwo from '../assets/gallery/gallerytwo.webp'
import gallerythree from '../assets/gallery/gallerythree.webp'
import galleryfour from '../assets/gallery/galleryfour.webp'
import galleryfive from '../assets/gallery/galleryfive.webp'
import gallerysix from '../assets/gallery/gallerysix.webp'
import { LuFacebook } from "react-icons/lu";


const Gallery = () => {
  return (
    <div>
      <div className="bg-[#FFF4E6] w-full h-fit">
<div className="lg:mx-50 p-5 flex flex-col gap-5">
<div className="flex flex-col justify-center items-center mt-4">
<p className='text-4xl md:text-5xl font-bold text-black'>CAN Media Gallery</p>
<p className='text-lg text-black'>Share your beauty moments and get featured</p>
</div>
<div className="w-full h-full grid grid-cols-2 gap-3 md:grid-cols-3 perspective-[1000px]">
<span className='relative group overflow-hidden rounded-2xl'>
<img className='rounded-2xl group-hover:scale-105 transition-all' src={galleryone} alt="" />
<div className="absolute inset-0 z-30 cursor-pointer flex justify-center items-center bg-black/50 rounded-2xl opacity-[0] group-hover:opacity-[100] transition-all duration-500"><LuFacebook className='text-6xl text-white' /> </div>
</span>
<span className='relative group overflow-hidden rounded-2xl'>
<img className='rounded-2xl group-hover:scale-105 transition-all' src={gallerytwo} alt="" />
<div className="absolute inset-0 z-30 cursor-pointer flex justify-center items-center bg-black/50 rounded-2xl opacity-[0] group-hover:opacity-[100] transition-all duration-500"><LuFacebook className='text-6xl text-white'/> </div>
</span>
<span className='relative group overflow-hidden rounded-2xl'>
<img className='rounded-2xl group-hover:scale-105 transition-all' src={gallerythree} alt="" />
<div className="absolute inset-0 z-30 cursor-pointer flex justify-center items-center bg-black/50 rounded-2xl opacity-[0] group-hover:opacity-[100] transition-all duration-500"><LuFacebook className='text-6xl text-white'/> </div>
</span>
<span className='relative group overflow-hidden rounded-2xl'>
<img className='rounded-2xl group-hover:scale-105 transition-all' src={galleryfour} alt="" />
<div className="absolute inset-0 z-30 cursor-pointer flex justify-center items-center bg-black/50 rounded-2xl opacity-[0] group-hover:opacity-[100] transition-all duration-500"><LuFacebook className='text-6xl text-white'/> </div>
</span>
<span className='relative group overflow-hidden rounded-2xl'>
<img className='rounded-2xl group-hover:scale-105 transition-all' src={galleryfive} alt="" />
<div className="absolute inset-0 z-30 cursor-pointer flex justify-center items-center bg-black/50 rounded-2xl opacity-[0] group-hover:opacity-[100] transition-all duration-500"><LuFacebook className='text-6xl text-white'/> </div>
</span>
<span className='relative group overflow-hidden rounded-2xl'>
<img className='rounded-2xl group-hover:scale-105 transition-all' src={gallerysix} alt="" />
<div className="absolute inset-0 z-30 cursor-pointer flex justify-center items-center bg-black/50 rounded-2xl opacity-[0] group-hover:opacity-[100] transition-all duration-500"><LuFacebook className='text-6xl text-white'/> </div>
</span>
</div>
<div className="flex items-center justify-center">
<p className='flex items-center gap-2 text-black font-semibold cursor-pointer group'><span className='group-hover:-translate-x-1 transition-transform duration-500'>
Follow us on 
</span>
<LuFacebook className=' text-xl group-hover:translate-x-1 transition-transform duration-500' />
</p>
</div>
</div>
</div>
    </div>
  )
}

export default Gallery

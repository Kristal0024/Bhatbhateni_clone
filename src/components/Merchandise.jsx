import React from 'react'
import { useState,useRef } from "react"
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";




const Merchandise = () => {

const[index,setIndex]=useState(0)
  return (
    <div>
      <div className="w-full h-auto">
<div className="md:mx-3 lg:mx-26 py-18 px-4 lg:px-0!">
<div className="mb-5">
<p className='text-sm text-[#FD7E14] font-semibold tracking-widest mb-1 leading-relaxed '>EXPLORE OUR FINEST SELECTIONS</p>
<p className='md:text-5xl text-black text-4xl'>Official Nepal Cricket Merchandise</p>
</div>
<div className="relative">
<div className=" pointer-events-none w-32 h-full right-0 top-0 absolute bg-linear-to-l from-[#ffff]/10 via-[#ffff]/10 to-transparent z-20"></div>
<div className="pointer-events-none w-32 h-full top-0 left-0 absolute bg-linear-to-r from-[#ffff]/10 via-[#ffff]/10 to-transparent z-20"></div>
<div className="overflow-hidden">
<div className=" flex items-center gap-6 transition-transform duration-1000 ease-in-out" style={{transform:`translateX(-${index*100}px)`}}>
<div className="relative w-36 md:w-76 shrink-0  sm:ml-8  group ">
<img className='group-hover:scale-105 transition-scale duration-500' src="mjersey.webp" alt="merchandise jersey" />
<div className="absolute inset-0 bg-linear-to-t from-black/53 via-black/10 to transparent rounded-lg"></div>
<div className="absolute inset-0 cursor-pointer">
<p className="absolute top-15 md:top-59 left-6 text-lg md:text-2xl text-white font-medium md:font-semibold group-hover:-translate-y-4 transition-transform duration-500">Jersey</p>
<p className='absolute top-22 md:top-69 left-6 opacity-[0] text-base md:text-lg text-white font-semibold group-hover:opacity-[100] group-hover:-translate-y-4 transition-all duration-500 flex items-center gap-2' >Explore collection <span className='text-md -translate-x-6 md:translate-x-2'><HiOutlineArrowNarrowRight /></span></p>
</div>
</div>
<div className="relative w-36 md:w-76 shrink-0  group ">
<img className='group-hover:scale-105 transition-scale duration-500' src="mcap.webp" alt="" />
<div className="absolute inset-0 bg-linear-to-t from-black/53 via-black/10 to transparent rounded-lg"></div>
<div className="absolute inset-0 cursor-pointer">
<p className="absolute top-15 md:top-59 left-6 text-lg md:text-2xl text-white font-medium md:font-semibold transition-transform duration-500 group-hover:-translate-y-4">Cap</p>
<p className='absolute top-22 md:top-69 left-6 opacity-[0] text-base md:text-lg text-white font-semibold group-hover:opacity-[100] group-hover:-translate-y-4 transition-all duration-500 flex items-center gap-2' >Explore collection<span className='text-md -translate-x-6 md:translate-x-2'><HiOutlineArrowNarrowRight /></span></p>
</div>
</div>
<div className="relative w-36 md:w-76 shrink-0 group ">
<img className='group-hover:scale-105 transition-scale duration-500' src="mpolo.webp" alt="" />
<div className="absolute inset-0 bg-linear-to-t from-black/53 via-black/10 to transparent rounded-lg"></div>
<div className="absolute inset-0 cursor-pointer">
<p className="absolute top-15 md:top-59 left-6 text-lg md:text-2xl text-white font-medium md:font-semibold transition-transform duration-500 group-hover:-translate-y-4">Travel Polo</p>
<p className='absolute top-22 md:top-69 left-6 opacity-[0] text-base md:text-lg text-white font-semibold  group-hover:opacity-[100] group-hover:-translate-y-4 transition-all duration-500 flex items-center gap-0 sm:gap-2' >Explore collection<span className='text-md  -translate-x-6 md:translate-x-2'><HiOutlineArrowNarrowRight /></span></p>
</div>
</div>
<div className="relative w-36 md:w-76 shrink-0 group ">
<img className='group-hover:scale-105 transition-scale duration-500' src="mtrack.webp" alt="" />
<div className="absolute inset-0 bg-linear-to-t from-black/53 via-black/10 to transparent rounded-lg"></div>
<div className="absolute inset-0  cursor-pointer">
<p className="absolute top-15 md:top-59 left-6 text-lg md:text-2xl text-white font-medium md:font-semibold transition-transform duration-500 group-hover:-translate-y-4">Tracksuit</p>
<p className='absolute top-22 md:top-69 left-6 text-base md:text-lg text-white font-semibold opacity-[0] group-hover:opacity-[100] group-hover:-translate-y-4 transition-all duration-500  flex items-center gap-2' >Explore collection 
<span className='text-md -translate-x-6 md:translate-x-2'><HiOutlineArrowNarrowRight /></span></p>
</div>
</div>
</div>
</div>
<button onClick={()=>setIndex(Math.max(index-1,0))} className='absolute top-1/2 w-8 h-8 sm:w-11 -translate-y-1/2 sm:h-11 rounded-pill flex items-center justify-center text-white left-0 bg-[#FD9843]/80 hover:bg-[#FD9843] z-30'><IoIosArrowBack />
</button>
<button onClick={()=>setIndex(Math.min(index+1,1))} className='absolute top-1/2 w-8 h-8 flex items-center justify-center text-white rounded-pill sm:w-11 -translate-y-1/2 sm:h-11 right-0 bg-[#FD9843]/80 hover:bg-[#FD9843] z-30'><IoIosArrowForward />
</button>
</div>
</div>
</div>
    </div>
  )
}

export default Merchandise

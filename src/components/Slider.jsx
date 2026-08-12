import React from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'

const Slider = () => {
useGSAP(()=>{
gsap.to(".marquee_track",{
xPercent:-100,
duration:100,
ease:"none",
repeat:-1
})
})
  return (
    <div>
      <div className="h-12 bg-[#ED5E0E] overflow-hidden shrink-0">
<div className="marquee_track w-max flex h-full items-center">
<div className="marquee_group flex items-center">
<div className='w-max whitespace-nowrap ml-15 text-white text-lg tracking-widest leading-relaxed font-medium'>Official Nepal Cricket Player Jersey <span className='text-sm font-medium'>NP</span></div>
<div className='w-max whitespace-nowrap ml-15 text-white text-lg tracking-widest leading-relaxed font-medium'>Official Nepal Cricket Player Jersey <span className='text-sm font-medium'>NP</span></div>
<div className='w-max whitespace-nowrap ml-15 text-white text-lg tracking-widest leading-relaxed font-medium'>Official Nepal Cricket Player Jersey <span className='text-sm font-medium'>NP</span></div>
<div className='w-max whitespace-nowrap ml-15 text-white text-lg tracking-widest leading-relaxed font-medium'>Official Nepal Cricket Player Jersey <span className='text-sm font-medium'>NP</span></div>
<div className='w-max whitespace-nowrap ml-15 text-white text-lg tracking-widest leading-relaxed font-medium'>Official Nepal Cricket Player Jersey <span className='text-sm font-medium'>NP</span></div>
<div className='w-max whitespace-nowrap ml-15 text-white text-lg tracking-widest leading-relaxed font-medium'>Official Nepal Cricket Player Jersey <span className='text-sm font-medium'>NP</span></div>
</div>
<div className="marquee_group flex items-center">
<div className='w-max whitespace-nowrap ml-15 text-white text-lg tracking-widest leading-relaxed font-medium'>Official Nepal Cricket Player Jersey <span className='text-sm font-medium'>NP</span></div>
<div className='w-max whitespace-nowrap ml-15 text-white text-lg tracking-widest leading-relaxed font-medium'>Official Nepal Cricket Player Jersey <span className='text-sm font-medium'>NP</span></div>
<div className='w-max whitespace-nowrap ml-15 text-white text-lg tracking-widest leading-relaxed font-medium'>Official Nepal Cricket Player Jersey <span className='text-sm font-medium'>NP</span></div>
<div className='w-max whitespace-nowrap ml-15 text-white text-lg tracking-widest leading-relaxed font-medium'>Official Nepal Cricket Player Jersey <span className='text-sm font-medium'>NP</span></div>
<div className='w-max whitespace-nowrap ml-15 text-white text-lg tracking-widest leading-relaxed font-medium'>Official Nepal Cricket Player Jersey <span className='text-sm font-medium'>NP</span></div>
<div className='w-max whitespace-nowrap ml-15 text-white text-lg tracking-widest leading-relaxed font-medium'>Official Nepal Cricket Player Jersey <span className='text-sm font-medium'>NP</span></div>
</div>

</div>



</div>
    </div>
  )
}

export default Slider

import React from 'react'
import { FiArrowRight } from "react-icons/fi";


const Promotion = () => {
  return (
    <div>
<div className="w-full">
      <div className="flex py-16 mx-30">
<div className="flex flex-col justify-center gap-2 w-2/3">
<p className='text-[#FD7E14] text-base font-medium tracking-wider'>BLANXER PLATFORM</p>
<p className='text-[#101828] text-4xl font-bold'>Build Your Own E-Commerce Site in Minutes with Blanxer!</p>
<p className='text-gray-600 text-lg'>Want to launch an e-commerce site like this? With Blanxer, you can create a fully functional online store in just a few minutes.</p>
<p className='text-[#FD7E14] font-medium flex items-center gap-2 cursor-pointer group'>Visit blanxer.com <span className='group-hover:translate-x-2 transition-transform duration-300'><FiArrowRight />
</span></p>
</div>
<div className="w-1/2">
<img className='hover:scale-103 transition-all duration-500' src="site.webp" alt="" />
</div>
</div>
</div>
    </div>
  )
}

export default Promotion

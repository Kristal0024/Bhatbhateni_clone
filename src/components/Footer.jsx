import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className=" bg-[#E8590C]">
<div className=" mx-8 md:mx-10 lg:mx-30">
<div className="pt-10 pb-15 sm:pb-10 flex flex-col md:flex-row md:justify-between border-b border-black/20 ">
<div className="w-full md:w-1/2 pb-2 md:pb-0 border-b border-black/20 md:border-0">
<div className="w-76 flex flex-col gap-3 ">
<img className='w-[74%]' src="footerlogo.webp" alt="" />
<p className='w-[90%] md:w-[75%] text-gray-200 text-sm'>Largest Super Market Chain in Nepal</p>
</div>
</div>
<div className="grid grid-cols-2 gap-12 md:flex md:flex-row md:justify-end md:w-2/3 text-white mt-4 md:mt-0!">
<span>
<label className='mb-1 font-bold'>Categories</label>
<ul className='p-0 tracking-wide space-y-1 text-sm [&_li:hover]:underline cursor-pointer [&_li]:mb-1.5'>
<li>Jersey</li>
<li>Cap</li>
<li>Polo</li>
<li>Tracksuit</li>
</ul>
</span>
<span>
<label className='mb-1 font-bold'>Legals</label>
<ul className='p-0 space-y-1 text-sm [&_li:hover]:underline cursor-pointer [&_li]:mb-1.5'>
<li>Shipping Policy</li>
<li>Refund Policy</li>
<li>Privacy Ploicy</li>
<li>Terms of Service</li>
</ul>
</span>
<span>
<label className='mb-1 font-bold'>Socials</label>
<ul className='p-0 space-y-1 text-sm [&_li:hover]:underline cursor-pointer [&_li]:mb-2'>
<li>Facebook</li>
<li>Youtube</li>
<li>Instagram</li>
</ul>
</span>
</div>
</div>
<div className=" py-4 sm:mt-5 md:mt-0 text-gray-200 font-medium border-b border-black/20">
<div className="grid grid-cols-1 md:grid-cols-4 mb-4 gap-8">
<div className="">
<p className='mb-1'>Registered Business Name</p>
<p className='mb-1'>Bhat Bhateni Holding company</p>
</div>
<div className="">
<p className='mb-1'>PAN/VAT Number</p>
<p className='mb-1'>609562895</p>
</div>
<div className="">
<p className='mb-1'>Company Address</p>
<p className='mb-1'>Kathmandu</p>
</div>
<div className="">
<p className='mb-1'>Registration Number</p>
<p className='mb-1'>217915</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
<div className="">
<p className='mb-1'>Contact</p>
<p className='mb-1'>info@bbhco.com.np</p>
</div>
<div className="">
<p className='mb-1'>E-Commerce Number</p>
</div>
<div className="">
<p className='mb-1'>Outlers</p>
<p className='mb-1'>Kathmandu</p>
</div>
<div className="">
<p className='mb-1'>Company Officer</p>
<p className='mb-1'>Bhatbhateni Holding</p>
<p className='mb-1'>9700021411</p>
<p className='mb-1'>info@bbhco.com.np</p>
</div>
</div>
</div>
<div className="text-center py-4 text-gray-300 text-xs">
<p>© 2025 Bhatbhateni. All rights reserved. Powered By Blanxer.</p>
</div>
</div>
</div>
    </div>
  )
}

export default Footer

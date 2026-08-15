import React from 'react'
import { HiOutlineLightningBolt } from "react-icons/hi";
import { LuShield } from "react-icons/lu";
import { IoMdHeartEmpty } from "react-icons/io";



const data=[{
id:1,
icon:<HiOutlineLightningBolt />,
title:"Fast Delivery",
desc:"Delivery within 1-3 Days inside valley"
},
{
id:2,
icon:<LuShield />,
title:"Secure & Safe Payment",
desc:"Pay directly from the website with secure fonepay payment"
},
{
id:3,
icon:<IoMdHeartEmpty />
,
title:"Quality",
desc:"Good Quality Product"
},
]
const Aboutus = () => {
  return (
    <div>
<div className="bg-[#FFF4E6]">
 <div className="grid grid-cols-3 py-20 mx-30 h-50 border-t border-gray-200">
{
data.map((value)=>{
return(
<div key={value.id} className="p-2 w-full h-fit flex flex-col items-center justify-center group">
<div className="w-15 h-15 border flex items-center justify-center rounded-full bg-[#FD7E14]/25 mb-4 group-hover:scale-110 group-hover:bg-[#FD7E14] transition-all duration-300">
<span className='text-[#FD7E14] text-4xl group-hover:text-white transition-all duration-300'>{value.icon}</span>
</div>
<p className='font-bold text-lg group-hover:text-[#FD7E14] transition-all duration-300'>{value.title}</p>
<p className='text-center text-sm text-gray-500'>{value.desc}</p>
</div>
)
})
}
</div>
</div>
    </div>
  )
}

export default Aboutus

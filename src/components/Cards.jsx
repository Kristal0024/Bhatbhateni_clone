import React from 'react'
import { FaStar } from "react-icons/fa";
const data=[{
"id":1,
"image":"jersyone.webp",
"title":"NEPAL CRIKET WORLD CUP AUTHENTIC FANS JERSEY",
"rating":4.7,
"total_rating":44,
"price":"RS 799"
},
{
"id":2,
"image":"jersytwo.webp",
"title":"NEPAL CRIKET WORLD CUP AUTHENTIC REPLICA JERSEY",
"rating":4.3,
"total_rating":39,
"price":"RS 1,599"
}
,
{
"id":3,
"image":"jersythree.webp",
"title":"NEPAL CRIKET WORLD CUP AUTHENTIC PLAYER JERSEY",
"rating":4.3,
"total_rating":39,
"price":"RS 3,499"
}
,
{
"id":4,
"image":"jersyfour.webp",
"title":"NEPAL CRIKET AUTHENTIC PLAYER JERSEY",
"rating":4.3,
"total_rating":39,
"price":"RS 3,499"
}
]
const Cards = () => {
  return (
    <div>
<div className="w-full flex py-18 px-30 h-auto gap-4">
      {
data.map((value)=>{
return(
<div className="h-auto flex flex-col gap-3" key={value.id}>
<img className='w-82 hover:scale-110 transition-transform duration-300 cursor-pointer' src={value.image} alt="world cup jersy" />
<div className="flex flex-col gap-2 cursor-pointer">
<p className='text-[11px] font-semibold tracking-wide leading-snug line-clamp-2 text-gray-700 m-0'>{value.title}</p>
<div className="flex items-center">
<FaStar className='text-[#FDC700] mr-1 w-5 mb-1' /><span className='text-sm font-bold text-black'>{value.rating} </span><span className='ml-2 border-l border-gray-400 pl-2 text-xs text-gray-500 leading-3'>{value.total_rating} ratings</span>
</div>
<p className='text-base font-bold text-[#FF922B]'>{value.price}</p>
</div>
</div>
)
})
}
</div>
    </div>
  )
}

export default Cards

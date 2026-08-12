import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Courasel from './components/Courasel';
import Jersysection from './components/Jersysection';
import Cards from './components/Cards'



import {useGSAP} from '@gsap/react'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import Merchandise from './components/Merchandise';
import Slider from './components/Slider';
import Imgmar from './components/Imgmar';
gsap.registerPlugin(ScrollTrigger)


const App = () => {
const[Fixed,setFixed]=useState(false)
useGSAP(()=>{
ScrollTrigger.create({
trigger:".courasel",
start:"top+=90 top",
onEnter:()=>{
setFixed(true);
gsap.fromTo(".imageheader",{
opacity:0,
y:-30
},{
opacity:1,
y:0,
duration:0.6,
ease:"power2.out"
})
},
onLeaveBack:()=>setFixed(false)
})
})
  return (
    <div>
      <Header fixed={Fixed}/>
<Courasel/>
<Jersysection/>
<Slider/>
<Cards/>
<Merchandise/>
<Imgmar/>
    </div>
  )
}

export default App

import React, { useEffect, useState } from 'react'
import {MdOutlineWbSunny} from 'react-icons/md'
import { LuMoon } from 'react-icons/lu'
import './Darkmode.css'
function Darkmode() {
    const[mode,setMode] = useState('darkmode')
    function toggle(){
        if (mode==='darkmode') {
            setMode('lightmode')
        }else{
            setMode('darkmode')
        }
    }
    useEffect(()=>{
        document.body.classList.toggle('darkmode',mode==='darkmode')
    },[mode])
  return (
    <div>
        <button className='darkmodebtn' onClick={()=>{
            toggle()
            
        }}>{mode==='darkmode'? <MdOutlineWbSunny /> : <LuMoon />}</button>
    </div>
  )
}

export default Darkmode
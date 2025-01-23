import React, { useContext } from 'react'
import './chatSection.css'
import { LuSendHorizontal } from 'react-icons/lu'
import Darkmode from '../darkmode/Darkmode'
import { dataContext } from '../../context/UserContex'
import user from '../../assets/user.png'
import ai from '../../assets/ai (1).png'


function ChatSection() {
    let{sent,input,setInput,showResult,resultData,recentPromt,loading} =useContext(dataContext)
  return (
    <div className='chatsection'>
        <div className="topsection">
            {!showResult? <div className="heading">
                <span>HELLO SHAIKH IMRAN NIZAMUDDIN,</span>
                <span>I'm Your Own Assistence</span>
                <span>What can I help you...?</span>
            </div> : <div className='result'> 
                <div className="userbox">
                    <img src={user} alt="" width='80px' />
                    <p>{recentPromt}</p>
                </div>
                <div className="aibox">
                    <img src={ai} alt="" width='60px' />
                    {loading? <div className='loader'>
                        <hr />
                        <hr />
                        <hr />
                    </div>
                    :
                    <p>{resultData}</p>}
                    
                </div>
                </div>}
            
        </div>
        <div className="bottomsection">
            <input onChange = {(e)=>setInput(e.target.value)} type="text" 
            placeholder='Enter a prompt' value={input} />
            {input?<button className='sentbtn' id='sentbtn' onClick={() => {
                sent(input)
            }}><LuSendHorizontal /></button>:null}
            
            <Darkmode />
        </div>

    </div>
  )
}

export default ChatSection
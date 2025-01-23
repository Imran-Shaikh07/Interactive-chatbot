import React, { createContext, useState } from 'react'
import run from '../gemini'
export const dataContext = createContext()
function UserContex({children}) {
    const [input,setInput] =useState("")
    const [showResult, setShowResult] = useState(false)
    const [loading, setLoading] = useState(false)
    const [resultData, setResultData] = useState("")
    const [recentPromt,setResentPrompt] = useState("")
    const [prevPromt,setPrevPromt]=useState([])

    function newChat() {
        setShowResult(false);  // Correctly update the state
        setLoading(false);     // Reset loading state
        setInput("");          // Clear input if needed
    }

    async function sent(input){
       setResultData("")
        setShowResult(true)
        setResentPrompt(input)
        setLoading(true)
        setPrevPromt(prev=>[...prev,input])
        let response =  await run(input)
        setResultData(response.split('**') && response.split('*'))
        setLoading(false)
        setInput("")
    }
    const data ={
        input,
        setInput,
        sent,
        loading,
        setLoading,
        showResult,
        setShowResult,
        resultData,
        setResultData,
        recentPromt,
        setResentPrompt,
        prevPromt,      // Make sure prevPromt is provided to the context
        newChat 
    }
  return (
    <>
    <dataContext.Provider value={data}>
       {children}
    </dataContext.Provider>
    </>
  )
}

export default UserContex
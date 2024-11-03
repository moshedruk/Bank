import React from 'react'
import './h.css'
import { useNavigate } from 'react-router-dom'

export interface props{
    // manu: string
    setManu: (x:string ) =>void
    
}

export default function H() {
  const naviget = useNavigate()
  const btn2 = ()=> {       
    naviget("/tasks/card")     
  }
  return (
    <div className='btn-cradit'>     
     <button onClick={btn2}>card</button>
    </div>
  )
}

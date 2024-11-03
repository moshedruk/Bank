import React from 'react'
import {useNavigate } from "react-router-dom";
import './c.css'

export interface props{
  // manu: string
  setManu: (x:string ) =>void
  
}

export default function C() {
  const naviget = useNavigate()
  const btn2 = ()=> {       
    naviget("/tasks/home")     
  }
  return (
    <div className='btn-home'>
      <button onClick={btn2} >home</button>
    </div>
  )
}

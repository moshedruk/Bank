import React from 'react'

import './L.css'
import { useNavigate } from 'react-router-dom'
export interface props {
    // manu: string
    setManu: (x: string) => void
}
export default function L() {
    const naviget = useNavigate()
    const btn1 = ()=> {       
      naviget("/tasks/list-card")     
    }
    return (
        <div className='list'>
            <button onClick={btn1}>list-card</button>
        </div>
    )
}

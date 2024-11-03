import React from 'react'
import './B.css'
import { useNavigate } from 'react-router-dom'

export interface props {
    // manu: string
    setManu: (x: string) => void
}
export default function B() {
    const naviget = useNavigate()
    const btn2 = ()=> {       
      naviget("/tasks/list-bank")     
    }
    return (
        <div className='list-bank'>
            <button onClick={btn2}>list-bank</button>
        </div>
    )
}

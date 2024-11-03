import React, { useState } from 'react'
import Mycard from './mycard'
import './card.css'
import { Props_for_transformation } from '../interface/interface'

export interface props_state{
  for: string
  sum: number
  blans: number  
}
export interface Props_for_transformation  {
  sumcatd: number
  setSumcard: (x: (itam: number) => number) => void
  sumcatdlest: string
  setSumcardlest: (x: (itam: string) => string) => void
  setSum:(x: (itam: number) => number) => void
  setList:(x: (itam: props_state[]) => props_state[]) => void

}

export default function Card({setList_bank, setList, setSum,sum, sumcatd, sumcatdlest, setSumcard, setSumcardlest }: Props_for_transformation) {
  const [y, setY] = useState(0)
  const [x, setX] = useState(0)
  const [for_bank, setfor_bank] = useState("")
  const [for_card, setfor_card] = useState("")
  const newitamcard: props_state = {
    for: for_card,
    sum: x,
    blans: sum - x,
  }; 
  const newitambank: props_state = {
    for: for_bank,
    sum: y,
    blans: sum - y,
  }
  
  const Transfer = () => {
    const transferAmount = x;    
    if (transferAmount) {
      setSumcard(prevSumcatd => prevSumcatd + transferAmount);
      setSum(prevSum => prevSum - x)
      setList(prevList => [...prevList, newitamcard]);
    } else {
      alert("Transfer must be greater than 0")
      console.warn("Invalid transfer amount");
    }
  };
  const transfer_amount_bank = ()=>{
    setSum(prevSum => prevSum - y)
    setList_bank(prevList => [...prevList, newitambank]);
  }
  return (
    <div className='my-card'>
      <Mycard sumcatd={sumcatd} sumcatdlest={sumcatdlest} />
      <div className='Transfer-of-funds' >
        <h3>Bank transfer</h3>
        <input type="text" placeholder='transfer to' onChange={e => setfor_bank(e.target.value)}/>
        <input type="number" placeholder='Transfer amount' onChange={e => setY(parseInt((e.target.value)))} />
        <button onClick={transfer_amount_bank}>Transfer</button>
      </div>
      <div className='Transfer-of-funds'>
        <h3>Payment by credit</h3>
        <input type="text" placeholder='transfer to' onChange={e => setfor_card(e.target.value)} />
        <input type="number" placeholder='Transfer amount' onChange={e => setX(parseInt((e.target.value)))} />
        <button onClick={Transfer}>Transfer</button>
      </div>
      
    </div>
  )
}

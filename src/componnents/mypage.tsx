
import './mypage.css'
import Profile from './profile'
import Card from './card'
import { Props_page } from '../interface/interface'

import { useState } from 'react'
import Listtransforcard from './listtransfor'
import Listtransformbank from './listtransformbank'

import { Route, Routes } from 'react-router-dom'

export interface props_state{
  for: string
  sum: number
  blans: number  
}


export default function Mypage({setSum,sum,sumcatd , sumcatdlest ,setSumcard,setSumcardlest}:Props_page) {  
  const [list,setList] = useState<props_state[]>([])
  const [list_bank,setList_bank] = useState<props_state[]>([])
  return (
    <div className='mypage'>
      <Routes>
          <Route path="card" element={<Card setList_bank = {setList_bank} setList = {setList} setSum = {setSum} sum = {sum} sumcatd = {sumcatd} sumcatdlest = {sumcatdlest} setSumcard = {setSumcard} setSumcardlest = {setSumcardlest} />}/>
          <Route path="home" element={<Profile sum = {sum} sumcatd = {sumcatd} sumcatdlest = {sumcatdlest}/>} />
          <Route path="list-card" element={<Listtransforcard list = {list} />} />
          <Route path="list-bank" element={<Listtransformbank list = {list_bank} />} />        
      </Routes>                
    </div>
  )
}


import'./menu.css'
import H from './h'
import C from './c'
import L from './L'
import B from './B'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import Mypage from './mypage'
import { useState } from 'react'
import Profile from './profile'

export interface props{
  // manu: string
  setManu: (x:string ) =>void  
}
export default function Menu() {  
  const [sum, setSum] = useState<number>(1000)
  const [sumcatd, setSumcard] = useState<number>(343)
  const [sumcatdlest, setSumcardlest] = useState<string>("3343") 
  const naviget = useNavigate() 
  naviget("tasks/home")
  return (
    <div>
      {/* ה-menu נשאר כאן, מחוץ ל-Routes */}
      <div className='menu'>        
        <C />
        <H />
        <L />
        <B />      
      </div>
      
      <div className='mypage'>
        {/* קישור לדף הבית של המשימות */}
        <Link to='/menu/tasks'>Go to Profile</Link>     
        
        <Routes>
          {/* הנתיב הראשי למשימות */}
          <Route path="tasks" element={<Mypage setSum={setSum} sum={sum} sumcatd={sumcatd} sumcatdlest={sumcatdlest} setSumcard={setSumcard} setSumcardlest={setSumcardlest} />}>
            {/* נתיב משנה לדף הבית של המשימות */}
            <Route path="home" element={<Profile sum={sum} sumcatd={sumcatd} sumcatdlest={sumcatdlest} />} />
          </Route>
        </Routes>
      </div>
    </div>
  )
}

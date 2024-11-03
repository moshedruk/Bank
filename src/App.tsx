


import { useState } from 'react'
import './App.css'
import { Route, Routes } from "react-router-dom";
import Menu from './componnents/menu'
import Mypage from './componnents/mypage'
import Login from './componnents/login';



function App() {

  const [sum, setSum] = useState<number>(1000)
  const [sumcatd, setSumcard] = useState<number>(343)
  const [sumcatdlest, setSumcardlest] = useState<string>("3343")
  return (
    <div>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="menu" element={<Menu />} />
        </Routes>
      </div>
      <div>
        <Routes>
          {/* <Route path="tasks/*" element={<Mypage setSum={setSum} sum={sum} sumcatd={sumcatd} sumcatdlest={sumcatdlest} setSumcard={setSumcard} setSumcardlest={setSumcardlest} />} /> */}
        </Routes>
      </div>
    </div>
  )
}

export default App

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter as Router } from "react-router-dom";
import App from './App.tsx'
// import Profile from './componnents/profile.tsx'; 

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     // errorElement: <ErrorPage />,
//     children: [
//       {
//         path: "home",
//         element: <Profile sum={1000} sumcatd={343} sumcatdlest={"3343"} />,
//       },
//       // {
//       //   path: "home",
//       //   element: <h1>Home</h1>
//       // },
//     ],
//   },
// ]);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
    <App/>      
    </Router> 
  </StrictMode>
)

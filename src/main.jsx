import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './components/HomePage.jsx'
import ProfilePage from './components/ProfilePage.jsx'
// import { Link } from 'react-router-dom'
import ProfilePages from './components/ProfilePages.jsx'
import Home from "./Pages/Home.jsx"
import About from './Pages/About.jsx'

// const router= createBrowserRouter([{
//   path: '/',
//   element: <HomePage/>,
//   errorElement: (<div>404 not foundffff
//     <a href="/">Home p</a> <br />
//     <Link to="/">Home Link</Link>
//   </div>)
// },
// {
//   path: '/profiles',
//   element: <ProfilePages/>,
//   children:[{
//     path: '/profiles/:profileId',
//     element: <ProfilePage profile={1}/>
//   }]
// },


// ]);

function App() {
  return (
    <BrowserRouter>
      <Link to="/">Home</Link>
      <Link to="/about">about</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}
 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)

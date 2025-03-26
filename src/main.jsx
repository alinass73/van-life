import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from './App.jsx'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/HomePage.jsx";
import ProfilePage from "./components/ProfilePage.jsx";
// import { Link } from 'react-router-dom'
import ProfilePages from "./components/ProfilePages.jsx";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Van from "./Pages/Van.jsx";
import VanDetail from "./Pages/VanDetail.jsx"

import "./server.js"
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
      <div className="max-w-137 mx-auto">
        <header className="flex h-28 items-center p-2.5 text-black">
          <Link className="font-black text-2xl uppercase mr-auto" to="/">
            #VanLife
          </Link>
          <nav>
            <Link className="hover:underline px-1 py-5" to="/about">
              About
            </Link>
            <Link className="hover:underline px-1 py-5" to="/vans">
              Van
            </Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Van />} />
          <Route path="/vans/:id" element={<VanDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

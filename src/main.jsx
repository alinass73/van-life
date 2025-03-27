import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from './App.jsx'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProfilePages from "./components/ProfilePages.jsx";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Van from "./Pages/Vans/Van.jsx";
import VanDetail from "./Pages/Vans/VanDetail.jsx"
import Layout from "./components/Layout.jsx"

import "./server.js"
import Dashboard from "./Pages/Host/Dashboard.jsx";
import Income from "./Pages/Host/Income.jsx";
import Reviews from "./Pages/Host/Reviews.jsx";
import HostLayout from "./components/HostLayout.jsx";
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
        
        <Routes>
          <Route element={<Layout/>}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/vans" element={<Van />} />
            <Route path="/vans/:id" element={<VanDetail />} />
            <Route path="host" element={<HostLayout/>}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
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

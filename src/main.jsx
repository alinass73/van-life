import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from './App.jsx'
import { Route, Link } from "react-router-dom";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import ProfilePages from "./components/ProfilePages.jsx";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import VanDetail from "./Pages/Vans/VanDetail.jsx";
import Layout from "./components/Layout.jsx";

import "./server.js";
import Dashboard from "./Pages/Host/Dashboard.jsx";
import Income from "./Pages/Host/Income.jsx";
import HostVans from "./Pages/Host/HostVans.jsx";
import Reviews from "./Pages/Host/Reviews.jsx";
import HostLayout from "./components/HostLayout.jsx";
import HostVansInfo from "./components/HostVansInfo.jsx";
import HostVansDetail from "./Pages/Host/HostVansDetail.jsx";
import HostVansPricing from "./Pages/Host/HostVansPricing.jsx";
import HostVansPhotos from "./Pages/Host/HostVansPhotos.jsx";
import Vans, {loader as vanLoader} from "./Pages/Vans/Vans.jsx";
import NotFound from "./Pages/NotFound.jsx";
import Error from "./Pages/Error.jsx";
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

const router = createBrowserRouter(
  createRoutesFromElements(
     
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} loader={vanLoader} errorElement={<Error/>} />
        <Route path="/vans/:id" element={<VanDetail />} />
        <Route path="host" element={<HostLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="income" element={<Income />} />
          <Route path="vans" element={<HostVans />} />
          <Route path="vans/:id" element={<HostVansInfo />}>
            <Route index element={<HostVansDetail />} />
            <Route path="pricing" element={<HostVansPricing />} />
            <Route path="photos" element={<HostVansPhotos />} />
          </Route>
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
  )
);
/**
 * Challenge: Change our router to a newer one that supports the
 * data APIs!
 *
 * 1. You'll need to import: RouterProvider, createBrowserRouter,
 *    and createRoutesFromElements
 * 2. Create a `router` variable and use the functions you just
 *    imported to create a new browserRouter
 * 3. Pass that router variable to the `router` prop on
 *    <RouterProvider />. It should end up being the only thing
 *    the App component renders.
 *
 */
function App() {
  return (
    <RouterProvider router={router}/>
      // <div className="max-w-137 mx-auto"></div>
     
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

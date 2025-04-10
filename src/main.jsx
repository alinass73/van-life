
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import VanDetail, { loader as vanDetailLoader } from "./Pages/Vans/VanDetail.jsx";
import Layout from "./components/Layout.jsx";
import Dashboard from "./Pages/Host/Dashboard.jsx";
import Income from "./Pages/Host/Income.jsx";
import HostVans, { loader as hostVansLoader } from "./Pages/Host/HostVans.jsx";
import Reviews from "./Pages/Host/Reviews.jsx";
import HostLayout from "./components/HostLayout.jsx";
import HostVansInfo from "./components/HostVansInfo.jsx";
import HostVansDetail, { loader as hostVansDetailLoader } from "./Pages/Host/HostVansDetail.jsx";
import HostVansPricing from "./Pages/Host/HostVansPricing.jsx";
import HostVansPhotos from "./Pages/Host/HostVansPhotos.jsx";
import Vans, { loader as vanLoader } from "./Pages/Vans/Vans.jsx";
import NotFound from "./Pages/NotFound.jsx";
import Error from "./Pages/Error.jsx";
import Login, { loader as logInLoader, action as actionLoader } from "./Pages/Login.jsx";
import { requireAuth } from "../utils.js";
import "./server.js";

// localStorage.removeItem("loggedin")

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="vans" element={<Vans />} loader={vanLoader} errorElement={<Error />} />
      <Route path="login" element={<Login />} loader={logInLoader} action={actionLoader} />
      <Route path="vans/:id" element={<VanDetail />} loader={vanDetailLoader} />
      <Route path="host" element={<HostLayout />}>
        <Route
          index
          element={<Dashboard />}
          loader={async ({request}) => await requireAuth(request)}
        />
        <Route
          path="income"
          element={<Income />}
          loader={async ({request}) => await requireAuth(request)}
        />
        <Route
          path="reviews"
          element={<Reviews />}
          loader={async ({request}) => await requireAuth(request)}
        />
        <Route path="vans" element={<HostVans />} loader={hostVansLoader} />
        <Route path="vans/:id" element={<HostVansInfo />}>
          {/* <Route index element={<HostVansDetail />} loader={hostVansDetailLoader} /> */}
          <Route index element={<HostVansDetail />} loader={async ({request}) => await requireAuth(request)} />
          <Route path="pricing" element={<HostVansPricing />} loader={async ({request}) => await requireAuth(request)} />
          <Route path="photos" element={<HostVansPhotos />} loader={async ({request}) => await requireAuth(request)} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
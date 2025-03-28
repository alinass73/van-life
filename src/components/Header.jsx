import { NavLink } from "react-router-dom";
export default function HomePage() {
  return (
    <header className="flex h-28 items-center p-2.5 text-black">
      <NavLink className="font-black text-2xl uppercase mr-auto pl-6.5" to="/">
        #VanLife
      </NavLink>
      <nav>
        <NavLink className= {({isActive})=>isActive ? "font-bold underline text-[#161616] px-1 py-5" : "hover:underline px-1 py-5"} to="/host">
          Host
        </NavLink>
        <NavLink className= {({isActive})=>isActive ? "font-bold underline text-[#161616] px-1 py-5" : "hover:underline px-1 py-5"} to="/about">
          About
        </NavLink>
        <NavLink className= {({isActive})=>isActive ? "font-bold underline text-[#161616] px-1 py-5" : "hover:underline px-1 py-5"} to="/vans">
          Van
        </NavLink>
      </nav>
    </header>
  );
}

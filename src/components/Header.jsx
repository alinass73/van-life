import { NavLink } from "react-router-dom";
import account from "../assets/account.svg"
export default function HomePage() {
  function fakeLogOut() {
    localStorage.removeItem("loggedin")
}
  return (
    <header className="flex h-28 items-center p-2.5 text-black">
  <NavLink className="font-black text-2xl uppercase mr-auto pl-6.5" to="/">
    #VanLife
  </NavLink>
  <nav className="flex items-center h-full">
    <NavLink className={({isActive}) => isActive ? "font-bold underline text-[#161616] px-1 py-5 h-full flex items-center" : "hover:underline px-1 py-5 h-full flex items-center"} to="/host">
      Host
    </NavLink>
    <NavLink className={({isActive}) => isActive ? "font-bold underline text-[#161616] px-1 py-5 h-full flex items-center" : "hover:underline px-1 py-5 h-full flex items-center"} to="/about">
      About
    </NavLink>
    <NavLink className={({isActive}) => isActive ? "font-bold underline text-[#161616] px-1 py-5 h-full flex items-center" : "hover:underline px-1 py-5 h-full flex items-center"} to="/vans">
      Van
    </NavLink>
    <NavLink className="flex items-center h-full px-1 py-5" to="/login">
      <img src={account} className="w-6" alt="Account" />
    </NavLink>
    <button onClick={fakeLogOut}>X</button>
  </nav>
</header>
  );
}

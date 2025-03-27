import { Link } from "react-router-dom";
export default function HomePage() {
  return (
    <header className="flex h-28 items-center p-2.5 text-black">
      <Link className="font-black text-2xl uppercase mr-auto" to="/">
        #VanLife
      </Link>
      <nav>
        <Link className="hover:underline px-1 py-5" to="/host">
          Host
        </Link>
        <Link className="hover:underline px-1 py-5" to="/about">
          About
        </Link>
        <Link className="hover:underline px-1 py-5" to="/vans">
          Van
        </Link>
      </nav>
    </header>
  );
}

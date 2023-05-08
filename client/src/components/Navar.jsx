import SearchField from "./SearchField";
import { NavLink } from "react-router-dom";
import brand from "../assets/logo.png";

export default function Navar() {
  const navItems = [
    { name: "News", path: "/news" },
    { name: "Destination", path: "/destination" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];
  return (
    <div>
      <div className="max-w-7xl mx-auto flex text-white items-center p-5 justify-between">
        <img className="w-24" src={brand} alt="Brand" />
        <SearchField />
        <nav className="flex gap-10  text-lg items-center">
          {navItems.map((item, index) => (
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-primary" : "hover:text-primary font-normal"
              }
              key={index}
              to={item.path}
            >
              {item.name}
            </NavLink>
          ))}
          <NavLink
            className="hover:text-black hover:bg-primary2 transition duration-300 text-black font-normal bg-primary rounded px-6 py-2 text-base"
            to={"/login"}
          >
            LOGIN
          </NavLink>
        </nav>
      </div>
    </div>
  );
}

import SearchField from "./SearchField";
import { NavLink, useNavigate } from "react-router-dom";
import brand from "../assets/logo.png";
import PrimaryButton from "./PrimaryButton";
import { SlClose, SlMenu } from "react-icons/sl";
import { useState } from "react";

export default function Navar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "News", path: "/news" },
    { name: "Destination", path: "/destination" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];
  return (
    <div>
      <div className="max-w-7xl mx-auto flex text-white items-center p-5 md:p-10 justify-between">
        <img className="w-24" src={brand} alt="Brand" />
        <SearchField style={"hidden md:block"} />
        <nav
          className={`flex flex-col md:flex-row md:relative bg-white md:bg-transparent absolute ${
            open ? "top-0" : "-top-full"
          } right-0 md:w-fit w-full gap-5 transition duration-200 md:h-fit h-[50vh] md:gap-10 md:p-0 rounded-b-xl text-black md:text-white p-10 text-lg items-center`}
        >
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
          <PrimaryButton
            text={"LOGIN"}
            style={"text-lg"}
            onClickHandler={() => navigate("/login")}
          />
        </nav>
        <div onClick={() => setOpen(!open)} className="md:hidden text-2xl">
          {open ? (
            <SlClose className="text-black absolute right-5 top-5 text-3xl" />
          ) : (
            <SlMenu className="text-white" />
          )}
        </div>
      </div>
    </div>
  );
}

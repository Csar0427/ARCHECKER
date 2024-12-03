import React, { useState } from "react";
import Logo from "../assets/icons/travelmug-logo.png";
import { Link, useLocation } from "react-router-dom";
import { icons } from "../assets/icons/icons";

const Navbar = () => {
  const location = useLocation();
  const menuPages = [
    "cakes-desserts",
    "coffee-glaciers",
    "milktea-fruittea",
    "pasta-sandwiches",
  ];

  const currentPath = location.pathname.split("/")[1];
  const [open, setOpen] = useState(false);

  const handleToggleMenu = () => {
    setOpen(!open);
  };

  const pageTitle = menuPages.includes(currentPath)
    ? "Our Menu"
    : currentPath === "basket"
    ? "Your Basket"
    : null;

  return (
    <div className="flex items-center justify-center sticky top-0 z-50 w-full bg-[#161616]">
      <nav className="flex justify-between items-center w-full h-20 px-5 text-[#ff8418] max-w-[630px]">
        <div>
          <Link
            className="text-2xl cursor-pointer uppercase font-bold tracking-widest"
            to="/"
          >
            <img className="w-11" src={Logo} alt="logo" />
          </Link>
        </div>

        <h1 className="font-semibold tracking-widest uppercase">{pageTitle}</h1>

        <div className="block cursor-pointer z-50" onClick={handleToggleMenu}>
          {open ? icons.cross : icons.hamburger}
        </div>
      </nav>

      <div
        className={`flex flex-col items-center justify-center fixed inset-0 bg-[#161616] backdrop-blur-lg transition-all duration-300 ease-in-out transform ${
          open ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <Link to="/" className="py-4">
          <img className="w-36" src={Logo} alt="logo" />
        </Link>
        <ul className="flex flex-col justify-center items-center gap-6 text-xl font-bold uppercase text-[#ff8418] my-5">
          {menuPages.map((menu, index) => (
            <li
              key={index}
              className="border-b-2 border-[#ff8418] pb-1 hover:text-white transition-colors duration-200 ease-in-out"
            >
              <Link to={`/${menu}`} className="py-2">
                {menu.replace("&", " & ")}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

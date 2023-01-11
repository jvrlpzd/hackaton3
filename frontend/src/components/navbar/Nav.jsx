/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";
import iconMenu from "../../assets/menu.png";

function Nav() {
  const Links = [
    { name: "VEHICLES", link: "/vehicles" },
    { name: "MY HISTORY", link: "/history" },
    { name: "MY PROFIL", link: "/profil" },
    { name: "OUR SERVICES", link: "/services" },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full z-20">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800"
        >
          <span className="text-3xl text-indigo-600 mr-1 pt-2">
            <ion-icon name="logo-ionic" />
          </span>
          <a href="/">Logo</a>
        </div>
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <img className="h-8" src={iconMenu} alt="" />
        </button>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-20 left-0  w-full md:w-auto md:pl-0 pl-9 transition-all duration-300 ease-in ${
            open ? "top-16 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <a
                href={link.link}
                className="text-gray-800 hover:text-gray-600 duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Nav;

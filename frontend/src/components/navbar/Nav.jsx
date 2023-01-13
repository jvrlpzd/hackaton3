/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import iconMenu from "../../assets/menu.png";
import logo from "../../assets/logo.png";
import LogOut from "../LogOut";
import CurrentUserContext from "../../context/userContext";

function Nav() {
  // On récupère la valeur stockée dans le user (qui se trouve dans le userContext) puis on va dire si user.email contient qqch alors un user est login sinon il est logout. Affichage de navbar différent.
  const { user } = useContext(CurrentUserContext);
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
          <Link to="/">
            <img className="w-24 h-12" src={logo} alt="" />
          </Link>
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
          {user.email ? (
            <ul className="md:flex">
              <li className="md:ml-8 text-xl md:my-0 my-7">
                <a
                  href="/"
                  className="text-gray-800 hover:text-gray-600 duration-300"
                >
                  HOME
                </a>
              </li>
              <li className="md:ml-8 text-xl md:my-0 my-7">
                <a
                  href="/history"
                  className="text-gray-800 hover:text-gray-600 duration-300"
                >
                  MY HISTORY
                </a>
              </li>
              <li className="md:ml-8 text-xl md:my-0 my-7">
                <a
                  href="/profil"
                  className="text-gray-800 hover:text-gray-600 duration-300"
                >
                  MY PROFIL
                </a>
              </li>
              <li className="md:ml-8 text-xl md:my-0 my-7">
                <a
                  href="/services"
                  className="text-gray-800 hover:text-gray-600 duration-300"
                >
                  OUR SERVICES
                </a>
              </li>
              <LogOut />
            </ul>
          ) : (
            <ul className="md:flex">
              <li className="md:ml-8 text-xl md:my-0 my-7">
                <a
                  href="/"
                  className="text-gray-800 hover:text-gray-600 duration-300"
                >
                  HOME
                </a>
              </li>
              <li className="md:ml-8 text-xl md:my-0 my-7">
                <a
                  href="/services"
                  className="text-gray-800 hover:text-gray-600 duration-300"
                >
                  OUR SERVICES
                </a>
              </li>
              <li className="md:ml-8 text-xl md:my-0 my-7">
                <a
                  href="/login"
                  className="text-gray-800 hover:text-gray-600 duration-300"
                >
                  SIGN IN
                </a>
              </li>
            </ul>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Nav;

import { faNewspaper } from "@fortawesome/free-regular-svg-icons";
import {
  faBroom,
  faHome,
  faPhone,
  faPhotoVideo,
  faServer,
  faSignIn,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../images/Logo/logo.png";

const NavBar = () => {
  return (
    <div className="  z-10 w-full  justify-center  fixed lg:flex lg:absolute top-0 lg:top-28 text-white font-semibold text-sm items-center">
      <div className="hidden lg:flex w-fit gap-8 justify-between">
        <NavLink className="px-4 py-2" to="/home">
          HOME
        </NavLink>
        <NavLink className="px-4 py-2" to={"/rooms"}>
          ROOMS
        </NavLink>
        <NavLink className="px-4 py-2" to={"/services"}>
          SERVICES
        </NavLink>
        <NavLink className="px-4 py-2" to={"/news"}>
          NEWS
        </NavLink>
        <NavLink className="px-4 py-2" to={"/gallery"}>
          GALLERY
        </NavLink>
        <NavLink className="px-4 py-2" to={"/about"}>
          ABOUT
        </NavLink>
        <NavLink className="px-4 py-2" to={"/contact"}>
          CONTACT
        </NavLink>
      </div>
      <div className="">
        <div className="justify-between relative flex-row-reverse navbar text-black bg-orange-400 w-full items-center lg:hidden ">
          {" "}
          <Link className="absolute right-20 top-[30%]" to={"/login"}>
            <a className="text-xl text-white" href="">
              <FontAwesomeIcon icon={faSignIn} />
            </a>
          </Link>
          <div className="dropdown  dropdown-end ">
            <label
              tabIndex={0}
              className="btn btn-ghost  text-white  lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>

            <ul
              tabIndex={0}
              className="menu gap-2 menu-compact dropdown-content  mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink
                  className="px-4 py-2  justify-between items-center w-full"
                  to="/home"
                >
                  HOME <FontAwesomeIcon icon={faHome} />
                </NavLink>
              </li>
              <li tabIndex={0}>
                <NavLink
                  className="px-4 py-2  justify-between items-center w-full"
                  to={"/rooms"}
                >
                  ROOMS <FontAwesomeIcon icon={faBroom} />
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="px-4 py-2  justify-between items-center w-full"
                  to={"/services"}
                >
                  SERVICES <FontAwesomeIcon icon={faServer} />
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="px-4 py-2  justify-between items-center w-full"
                  to={"/news"}
                >
                  NEWS <FontAwesomeIcon icon={faNewspaper} />
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="px-4 py-2 flex justify-between items-center w-full"
                  to={"/gallery"}
                >
                  GALLERY <FontAwesomeIcon icon={faPhotoVideo} />
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="px-4 py-2  justify-between items-center w-full"
                  to={"/about"}
                >
                  ABOUT <FontAwesomeIcon icon={faUserGroup} />
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="px-4 py-2  justify-between items-center w-full"
                  to={"/contact"}
                >
                  CONTACT <FontAwesomeIcon icon={faPhone} />
                </NavLink>
              </li>
            </ul>
          </div>
          <img className="w-36 h-12" src={logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;

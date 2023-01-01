import { faNewspaper } from "@fortawesome/free-regular-svg-icons";
import {
  faBroom,
  faHome,
  faPhone,
  faPhotoVideo,
  faServer,
  faSignIn,
  faSignOut,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../images/Logo/logo.png";
import auth from "../../../Login/firebase.init";

const NavBar = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <div className="  z-10 w-full  justify-center  fixed lg:flex lg:absolute top-0 lg:top-28 text-white font-semibold text-sm items-center">
      <div className="hidden lg:flex w-fit gap-8 text-white justify-between">
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
          {user ? (
            <div className="absolute right-20 top-[30%] ">
              <button
                onClick={handleSignOut}
                className="text-white flex underline px-2  rounded  text-lg TF items-center gap-2"
              >
                <span className="text-lg font-normal ">Sign Out</span>
                <FontAwesomeIcon icon={faSignOut} />
              </button>
            </div>
          ) : (
            <Link className="absolute right-20 top-[30%]" to={"/login"}>
              <a
                className="text-white font-normal flex underline px-2  rounded  text-lg TF items-center gap-2"
                href=""
              >
                Sign In <FontAwesomeIcon icon={faSignIn} />
              </a>
            </Link>
          )}
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

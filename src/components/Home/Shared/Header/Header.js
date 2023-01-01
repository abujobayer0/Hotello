import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import logo from "../../../images/Logo/logo.png";
import {
  faPhoneFlip,
  faSignIn,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../Login/firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const style = { fontFamily: "'Raleway', sans-serif" };
  const stylep = { fontFamily: " 'Questrial', sans-serif" };
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };
  console.log(user);
  return (
    <div className="lg:flex z-10 hidden  absolute top-8 w-full items-center justify-center gap-52">
      <div className="text-white  text-sm">
        <h1 style={stylep}>
          <FontAwesomeIcon className="text-orange-400" icon={faPhoneFlip} /> +31
          (0) 20 507 000
        </h1>
      </div>
      <div className="logo">
        <img className="w-48" src={logo} alt="" />
      </div>
      <div
        style={style}
        className="flex  items-center justify-center text-sm text-white"
      >
        <h2 className="border-r-2 pr-8">in New York</h2>

        <div className="flex   h-10  gap-2 ml-4 justify-center items-center w-28">
          {user ? (
            <div className="flex gap-2 w-full transition-all ease-in-out text-white TF rounded glass bg-orange-500   items-center justify-center text-lg">
              <button onClick={handleSignOut}>sign out</button>
              <FontAwesomeIcon icon={faSignOut} />
            </div>
          ) : (
            <Link to={"/login"}>
              <a
                className="flex gap-2 w-full transition-all ease-in-out text-white TF rounded glass bg-orange-500 px-2  items-center justify-center text-lg"
                href=""
              >
                {" "}
                Sign In <FontAwesomeIcon icon={faSignIn} />
              </a>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;

import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "./firebase.init";

const LoginForm = ({
  handleGoogleSignIn,

  setViewLayer,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [signInWithEmailAndPassword, user, loading] =
    useSignInWithEmailAndPassword(auth);
  if (user) {
    navigate("/home");
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  };
  return (
    <div className="TF">
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <input
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
            className="form-control block w-full px-4 py-2 text-lg TF font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-400 focus:outline-none"
            placeholder="Email address"
          />
        </div>
        <div className="mb-6">
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            className="form-control block w-full px-4 py-2 text-lg TF font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-400 focus:outline-none"
            required
            placeholder="Password"
          />
        </div>
        <div>
          {loading && <p className="text-white animate-pulse">Loading...</p>}
        </div>
        <div className="flex justify-between items-center mb-6">
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-orange-400 checked:border-orange-400 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              id="exampleCheck3"
            />
            <label
              className="form-check-label inline-block lg:text-white text-gray-800"
              for="exampleCheck2"
            >
              Remember me
            </label>
          </div>
          <div className="flex text-lg">
            <span className="px-2  text-white">||</span>
            <p
              onClick={() => setViewLayer(true)}
              className="text-white rounded glass px-2 hover:bg-stone-800 ease-in-out transition-all bg-stone-900 lg:bg-neutral-focus lg:hover:bg-neutral  cursor-pointer "
            >
              {" "}
              Sign up
            </p>
          </div>
        </div>
        <input
          type="submit"
          className="inline-block px-7 py-3 bg-orange-500 glass text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-orange-600 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out w-full"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          value="Sign in"
        />

        <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
          <p className="text-center text-gray-200 font-semibold mx-4 mb-0">
            OR
          </p>
        </div>
        <a
          onClick={handleGoogleSignIn}
          className="px-7 gap-2  hover:bg-stone-900 bg-stone-800 lg:bg-neutral-focus lg:hover:bg-neutral glass py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3"
          href="#!"
          role="button"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
        >
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAdFJREFUSEvFVW1OwkAQfbOgiZbQNlT/qieQG4A30BMIJxBOIJ5AuYGeQG4gnEC8Af7VJm0V/pCwYxaL2X4sgobQ37PvzZs380rY8Ecbxsf2Cd6Dz7oQosaMKghVAA6IhsxyWJSFruvujZZNwaggCAJnJnZvATSWjpHRK/C06bpumFeXS/AWjKtC0COA49U84q5nl1orEcSdP+eCMw/mIEQ1DezBsy2jyowCP5rcA7jUACIQGl7Z6ukdvkeTDoEdU+eL2gSBMpSEeNLBpeT6oVsarjaqbFWSYN4Vrn/KCBfpztclShD44bivz9ezrewIVY0QbCKSM9nWFScJoona6aP5Y+aB55TqaSA/mhjB58+AmwPb6uR64G+cYNURabJYkEOMU5NvS00mULti798tM9aPxncAXS1qClKc6PHx25qGUvKZaU3ji1dr7cQEr55tJa4/59CSHQEICdSp2PtdXYn/MW6ASWXVAhwgbnrlkjpUbWIp/XFUqMP63qZk8ZCJQjBntosJLwdlS6Vt+k12wrF0FQ0Zkjw/FHhxNq3nJeovcb3T0Q00mP1QkNPWWnGtAyk1JOicgGMmVInhgHnERP2iFPd//uGsmzmm+u3/k/+r5Au06MIZYa9i0AAAAABJRU5ErkJggg==" />
          Continue with Google
        </a>
      </form>
    </div>
  );
};

export default LoginForm;

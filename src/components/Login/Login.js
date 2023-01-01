import React, { useState } from "react";
import auth from "./firebase.init";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Logo from "../images/Logo/logo.png";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import { useLocation, useNavigate } from "react-router-dom";
const Login = () => {
  const provider = new GoogleAuthProvider();
  //login
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [error, setError] = useState("");
  // const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  //layer
  const [viewLayer, setViewLayer] = useState(false);

  //sign up
  const [signUpEmail, setsignUpEmail] = useState("");
  const [signUpPassword, setsignUpPassword] = useState("");
  const [signUpConfirmPassword, setsignUpConfirmPassword] = useState("");
  const [signUpError, setsignUpError] = useState("");
  const [createUserWithEmailAndPassword, user, loading] =
    useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  //google auth
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  };
  //auth google end

  //sign up

  const handleSignUpError = (e) => {
    setsignUpError(e.target.value);
  };
  if (user) {
    navigate(from, { replace: true });
  }

  const handleSignUpSubmit = (e) => {
    e.preventDefault();

    if (signUpPassword === signUpConfirmPassword) {
      createUserWithEmailAndPassword(signUpEmail, signUpPassword);
    } else {
      alert("Fill The Form Properly ");
    }
  };
  //signUp Hooks
  //end sign up
  return (
    <div className="bg-neutral lg:bg-neutral flex justify-center items-center h-screen overflow-scroll overflow-x-hidden relative  ">
      <section className="h-fit  w-full py-2 relative flex flex-col lg:h-[100vh] mt-12 lg:mt-0 md:mt-0">
        <div className="container  px-6 py-12 h-full">
          <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
            <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="w-full"
                alt="Phone image"
              />
              {loading && (
                <p className="text-white animate-pulse">Loading...</p>
              )}
            </div>
            <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
              {viewLayer === false ? (
                <LoginForm
                  setViewLayer={setViewLayer}
                  handleGoogleSignIn={handleGoogleSignIn}
                ></LoginForm>
              ) : (
                <SignupForm
                  handleSignUpEmail={setsignUpEmail}
                  handleSignUpPassword={setsignUpPassword}
                  handleSignUpConfirmPassword={setsignUpConfirmPassword}
                  handleSignUpError={handleSignUpError}
                  handleSignUpSubmit={handleSignUpSubmit}
                  setViewLayer={setViewLayer}
                  handleGoogleSignIn={handleGoogleSignIn}
                ></SignupForm>
              )}
            </div>
          </div>
        </div>
        <div className="mt-4  absolute bottom-0  flex justify-center  items-center w-full  ">
          <img className="w-28 py-2 underline " src={Logo} alt="" />
        </div>
      </section>
    </div>
  );
};

export default Login;

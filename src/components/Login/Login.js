import React, { useState } from "react";
import app from "./firebase.init";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Logo from "../images/Logo/logo.png";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
const auth = getAuth(app);
const Login = () => {
  const provider = new GoogleAuthProvider();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [viewLayer, setViewLayer] = useState(false);
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  };

  return (
    <div className="bg-orange-100 h-[100vh] overflow-scroll overflow-x-hidden bgRoom ">
      <section className="h-[100vh] glass w-full py-2  lg:h-[100vh] mt-12 lg:mt-0 md:mt-0">
        <div className="container  px-6 py-12 h-full">
          <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
            <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="w-full"
                alt="Phone image"
              />
            </div>
            <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
              {viewLayer === false ? (
                <LoginForm
                  setViewLayer={setViewLayer}
                  handleSubmit={handleSubmit}
                  handleEmailChange={handleEmailChange}
                  handleGoogleSignIn={handleGoogleSignIn}
                  handlePasswordChange={handlePasswordChange}
                ></LoginForm>
              ) : (
                <SignupForm setViewLayer={setViewLayer}></SignupForm>
              )}
            </div>
          </div>
        </div>
      </section>
      <div className="mt-4  flex justify-center items-center w-full h-12 glass">
        <img className="w-28 " src={Logo} alt="" />
      </div>
    </div>
  );
};

export default Login;

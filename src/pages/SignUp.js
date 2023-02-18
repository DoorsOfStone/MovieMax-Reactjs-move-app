import React, { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
//import { auth } from "../firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import { Link, useNavigate } from "react-router-dom";
import * as FcIcons from "react-icons/fc";
import { app } from "../firebase";

function SignUp() {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const signUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("User has been created");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        alert(errorCode);
        //const errorMessage = error.message;
        // ..
      });
  };
  const googleLogIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;

        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/main");
  }, [user, loading]);
  return (
    <div className="  min-w-screen min-h-screen flex justify-center items-center  ">
      <div className="Login w-full h-screen  flex flex-col justify-center items-center ">
        <form className="loginForm w-[1000px] h-[1200px] flex flex-col justify-center items-center mt-[100px] mb-[200px] text-white">
          <h1 className="logo text-[50px]  mb-[50px] mt-[100px] font-bold">
            ////MovieMax
          </h1>
          <h1 className="text-2xl mt-3">Register</h1>
          <div className="w-full h-[60px] m-5 flex flex-col items-center">
            <p>Email</p>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-3/4 h-[40px] rounded-lg outline-none  text-slate-700 p-3"
              placeholder="Email"
            />
          </div>

          <div className="w-full h-[60px] m-5 flex flex-col items-center">
            <p>Password</p>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-3/4 h-[40px] rounded-lg outline-none text-slate-700 p-3"
              placeholder="Password"
            />
          </div>

          <p>Or Try</p>
          <div className="flex flex-row justify-center items-center w-2/3 p-2 ">
            <button
              onClick={signUp}
              className="w-[100px] h-[50px] bg-slate-400/40 hover:bg-slate-600/40 rounded-xl m-5"
            >
              Register
            </button>
            <FcIcons.FcGoogle onClick={googleLogIn} className="text-xl" />

            {/* <button className="w-[100px] h-[50px] bg-slate-400/40 hover:bg-slate-600/40 rounded-xl m-5">
              Demo
            </button> */}
          </div>
          <Link className="mb-5" to={"/"}>
            Sign In?
          </Link>
        </form>
      </div>
    </div>
  );
}

export default SignUp;

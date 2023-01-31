import React, { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../firebase";
import { Link, Navigate, useNavigate } from "react-router-dom";
import * as FcIcons from "react-icons/fc";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const register = () => {
    if (!name) alert("Please enter a username");
    registerWithEmailAndPassword(name, email, password);
  };
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
          <div className="w-full h-[60px] m-5 flex flex-col items-center">
            <p>Username</p>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-3/4 h-[40px] rounded-lg outline-none text-slate-700 p-3"
              placeholder="Password"
            />
          </div>

          <p>Or Try</p>
          <div className="flex flex-row justify-center items-center w-2/3 p-2 ">
            <button
              onClick={register}
              className="w-[100px] h-[50px] bg-slate-400/40 hover:bg-slate-600/40 rounded-xl m-5"
            >
              Register
            </button>
            <FcIcons.FcGoogle onClick={signInWithGoogle} className="text-xl" />
            <Link to={"/main"}>
              <button className="w-[100px] h-[50px] bg-slate-400/40 hover:bg-slate-600/40 rounded-xl m-5">
                Demo
              </button>
            </Link>
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

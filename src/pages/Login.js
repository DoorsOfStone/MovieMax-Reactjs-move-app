import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import * as FcIcons from "react-icons/fc";
import "./pages.css";
import { auth, signInWithGoogle, logInWithEmailAndPassword } from "../firebase";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) navigate("/main");
    console.log(user);
  }, [user, loading]);

  return (
    <div className="  min-w-screen min-h-screen flex justify-center items-center  ">
      <div className="Login w-full h-screen  flex flex-col justify-center items-center ">
        <form className="loginForm w-[1000px] h-[1200px] flex flex-col justify-center items-center mt-[100px] mb-[200px] text-white ">
          <h1 className="logo text-[50px] font-bold mb-[50px]">////MovieMax</h1>
          <h1 className="text-2xl mb-[20px]">Sing In</h1>
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
          <div className="flex flex-row justify-center items-center w-full ">
            <button
              onClick={() => logInWithEmailAndPassword(email, password)}
              className="w-[100px] h-[50px] bg-slate-400/40 hover:bg-slate-600/40 rounded-xl m-5"
            >
              Sign In
            </button>
            <Link to={"/main"}>
              <button className="w-[100px] h-[50px] bg-slate-400/40 hover:bg-slate-600/40 rounded-xl m-5">
                Demo
              </button>
            </Link>
          </div>
          <button className="text-xl " onClick={signInWithGoogle}>
            <FcIcons.FcGoogle />
          </button>
          <Link to={"/Register"}>Sign Up?</Link>
        </form>
      </div>
    </div>
  );
}

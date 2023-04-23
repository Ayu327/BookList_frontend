import { useState } from "react";
import React from "react";
import "./SignIn.css";
import { NavLink } from "react-router-dom";
import { useSignIn } from "../hooks/useSignin";
const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn, error, isLoading } = useSignIn();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await signIn(email, password);
  };
  return (
    <form className="SignIn" onSubmit={handleSubmit}>
      <div className="signinContainer">
        <div className="signinMain">
          <h1 className="signcontent">
            <pre className="p1">Welcome Page</pre>
            <pre className="p2">One line text</pre>
            <pre className="p3">Will be here </pre>
          </h1>
          <p className="continue">Sign in to continue access pages</p>
          <p className="dont">Don't Have An Account ?</p>
          <NavLink to="/Register">
            <button className="regbtn">Register</button>
          </NavLink>
        </div>
        <div className="signIn">
          <h1 className="head">Sign In</h1>
          <p className="signp">Sign in to continue access pages</p>

          <input
            type="text"
            className="inputBox1"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          ></input>
          <br />
          <input
            type="password"
            className="inputBox2"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          ></input>
          <br />

          <button
            onSubmit={handleSubmit}
            disabled={isLoading}
            className="btnsignin"
          >
            Sign In
          </button>

          {error && <div className="error">{error}</div>}
          <br />
        </div>
      </div>
    </form>
    // <form className="SignIn" onSubmit={handleSubmit}>
    //   <h3>SignIn form</h3>

    //   <label>email</label>
    //   <input
    //     type="text"
    //     onChange={(e) => setEmail(e.target.value)}
    //     value={email}
    //   ></input>

    //   <label>password</label>
    //   <input
    //     type="password"
    //     onChange={(e) => setPassword(e.target.value)}
    //     value={password}
    //   ></input>
    //   <button disabled={isLoading}>SignIn</button>
    //   {error && <div className="error">{error}</div>}
    // </form>
  );
};

export default SignInForm;
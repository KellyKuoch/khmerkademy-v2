import "./SignUp.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const SignUp = () => {
  //sign in
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  const navigate = useNavigate();

  //sing up
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
        alert("You already have an account. Please sign in instead ");
      });
  };

  const signIn = async (event) => {
    event.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        signInEmail,
        signInPassword
      );
      if (user) {
        navigate("/instruction");
      } else {
        alert("Invalid credential");
      }
    } catch (error) {
      console.error("Incorrect Email or Password", error);
      alert("Incorrect Email or Password. Please try again. ");
    }
  };

  return (
    <div className="auth-container">
      <div className="sign-in-container">
        <form onSubmit={signUp}>
          <div className="title">Create an account</div>
          <div className="input-box underline">
            <input
              type="email"
              placeholder="Enter your email"
              value={signUpEmail}
              onChange={(e) => setSignUpEmail(e.target.value)}
            ></input>
            {/* <div className="underline"></div> */}
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Enter your password"
              value={signUpPassword}
              onChange={(e) => setSignUpPassword(e.target.value)}
            ></input>
            {/* <div className="underline"></div> */}
          </div>
          <div className="input-box button">
            <button className="button-8" type="submit">
              Sign Up
            </button>
          </div>
        </form>
      </div>
      <div className="sign-in-container">
        <form onSubmit={signIn}>
          <div className="title">Already have an account?</div>
          <div className="input-box underline">
            <input
              type="email"
              placeholder="Enter your email"
              value={signInEmail}
              onChange={(e) => setSignInEmail(e.target.value)}
            ></input>
            {/* <div className="underline"></div> */}
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Enter your password"
              value={signInPassword}
              onChange={(e) => setSignInPassword(e.target.value)}
            ></input>
            {/* <div className="underline"></div> */}
          </div>
          <div className="input-box button">
            <button className="button-8" type="submit">
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

import { Fragment, useContext } from "react";
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./Navigation.css";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

const Navigation = () => {
  // for user sign Limitation
  const [authUser, setAuthUser] = useState(null);
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
  }, []);

  return (
    <Fragment>
      <div className="navigation">
        <div className="logo-container">
          <Link to="/home">
            <img src="./img/angkor-wat.png" alt="logo" />
          </Link>
        </div>
        <div className="nav-links-container">
          <Link className="nav-link" to="/home">
            Home
          </Link>

          {/* <div className="profile-container">
            <Link className="nav-link" to="/profile">
              <img src="/img/anya-profile.webp" alt="logo" />
            </Link>
          </div> */}
          {/* {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )} */}

          {/* <Link className="nav-link" to="/signin">
            Sign In
          </Link>
          <Link className="nav-link" to="/signup">
            Sign Up
          </Link>
          <Link className="nav-link" to="/detail">
            Detail
          </Link> */}
          {authUser ? (
            <>
              <Link className="nav-link" to="/daily-phrase">
                Daily Khmer
              </Link>

              <Link className="nav-link" to="/lessons">
                Lessons
              </Link>
              <Link className="nav-link" to="/fun-facts">
                Fun Facts
              </Link>
              <div className="profile-container">
                <Link className="nav-link" to="/detail">
                  <img src="/img/github-pf.png" alt="logo" />
                </Link>
              </div>
            </>
          ) : (
            <Link className="nav-link" to="/signup">
              Sign In
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;

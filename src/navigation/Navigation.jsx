import { Fragment } from "react";
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./Navigation.css";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import Hamburger from "./Hamburger";
const Navigation = () => {
  const [authUser, setAuthUser] = useState(null);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
    return () => unsubscribe(); // Unsubscribe on cleanup
  }, []);

  return (
    <Fragment>
      <div className="navbar">
        <div className="logo">
          <Link to="/home">KhmerKademy</Link>
        </div>
        {/* <div className="hamburger" onClick={toggleHamburger}>
          <Hamburger />
        </div> */}
        <ul className={hamburgerOpen ? "" : "open"}>
          {authUser ? (
            <>
              <li>
                <Link
                  className="nav-link"
                  to="/lesson"
                  onClick={toggleHamburger}
                >
                  Lessons
                </Link>
              </li>
              <li>
                <div className="profile-container">
                  <Link
                    className="nav-link"
                    to="/detail"
                    onClick={toggleHamburger}
                  >
                    <img
                      src="/img/github-pf.png"
                      alt="Profile"
                      className="profile-pic"
                    />
                  </Link>
                </div>
              </li>
            </>
          ) : (
            <li>
              <Link className="nav-link" to="/signup" onClick={toggleHamburger}>
                Sign In
              </Link>
            </li>
          )}
        </ul>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;

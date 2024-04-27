import { Fragment } from "react";
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./Navigation.css";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

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
          <Link className="nav-link" to="/fun-facts">
            Fun Facts
          </Link>
          {authUser ? (
            <>
              <Link className="nav-link" to="/daily-phrase">
                Daily Khmer
              </Link>

              <Link className="nav-link" to="/lessons">
                Lessons
              </Link>
              <Link className="nav-link" to="/dictionary">
                Dictionary
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

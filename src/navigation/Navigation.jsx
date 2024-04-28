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
      <div className="navbar">
        <div className="logo">
          <Link to="/home">KhmerKademy</Link>{" "}
          {/* Assuming you want a text logo since the image is commented out */}
        </div>
        <ul>
          {/* <li>
            <Link className="nav-link" to="/home">
              Home
            </Link>
          </li> */}
          <li>
            <Link className="nav-link" to="/fun-facts">
              Fun Facts
            </Link>
          </li>
          {authUser ? (
            <>
              <li>
                <Link className="nav-link" to="/daily-phrase">
                  Daily Khmer
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/lessons">
                  Lessons
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/dictionary">
                  Dictionary
                </Link>
              </li>
              <li>
                <div className="profile-container">
                  <Link className="nav-link" to="/detail">
                    <img
                      src="/img/github-pf.png"
                      alt="Profile"
                      className="pf-pic"
                    />
                  </Link>
                </div>
              </li>
            </>
          ) : (
            <li>
              <Link className="nav-link" to="/signup">
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

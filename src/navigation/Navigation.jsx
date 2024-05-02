import { Fragment } from "react";
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./Navigation.css";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { IoHome, IoInformationCircle, IoBook } from "react-icons/io5";
import { MdAirplaneTicket, MdConfirmationNumber } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

const Navigation = () => {
  const [authUser, setAuthUser] = useState(null);

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

        <ul>
          <li>
            <Link className="nav-link" to="/fun-facts" activeClassName="active">
              <MdAirplaneTicket className="icon" size="4em" />
              <span className="link-text">Fun Facts</span>
            </Link>
          </li>
          {authUser ? (
            <>
              <li>
                <Link
                  className="nav-link"
                  to="/daily-phrase"
                  activeClassName="active"
                >
                  <MdConfirmationNumber className="icon" size="4em" />
                  <span className="link-text">Daily Khmer</span>
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link"
                  to="/lesson"
                  activeClassName="active"
                >
                  <IoBook className="icon" size="4em" />
                  <span className="link-text">Lessons</span>
                </Link>
              </li>
              <li>
                <div className="profile-container">
                  <Link
                    className="nav-link"
                    to="/detail"
                    activeClassName="active"
                  >
                    <CgProfile className="icon" size="4em" />
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

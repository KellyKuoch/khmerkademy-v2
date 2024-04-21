import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import "./Navigation.css";
// import { signOutUser } from "../authentication/firebase-config";
// import { UserContext } from "../authentication/user.context";

const Navigation = () => {
  // const { currentUser } = useContext(UserContext);
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
          <Link className="nav-link" to="/daily-phrase">
            Daily Khmer
          </Link>

          <Link className="nav-link" to="/lessons">
            Lessons
          </Link>

          {/* <Link className="nav-link" to="/exercise">
            Exercises
          </Link> */}
          <Link className="nav-link" to="/fun-facts">
            Fun Facts
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
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;

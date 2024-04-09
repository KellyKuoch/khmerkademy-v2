import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
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
          <Link className="nav-link" to="/fun-facts">
            Fun Facts
          </Link>
          <Link className="nav-link" to="/lessons">
            Lessons
          </Link>

          <Link className="nav-link" to="/exercise">
            Exercises
          </Link>
          <div className="profile-container">
            <Link className="nav-link" to="/profile">
              <img src="/img/anya-profile.webp" alt="logo" />
            </Link>
          </div>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;

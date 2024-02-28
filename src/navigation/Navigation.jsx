import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <div className="logo-container">
          <img src="/Khmerkademy.png" alt="logo" />
        </div>
        <div className="nav-links-container">
          <Link className="nav-link" to="/home">
            Lessons
          </Link>
          <Link className="nav-link" to="/exercise">
            Exercises
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;

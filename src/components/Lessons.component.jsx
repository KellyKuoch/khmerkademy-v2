import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import "./Exercise.css";

const Lesson = () => {
  return (
    <Fragment>
      <div className="categories">
        <h1>Lessons</h1>
        <div className="categories-container">
          <Link className="card" to="/lesson/daily-phrase">
            <img
              className="card-image"
              src="/img/khmer-daily.jpeg"
              alt="Quiz"
            />
            <div className="card-title">Daily Phrases</div>
          </Link>
          <Link className="card" to="/fill-blank">
            <img
              className="card-image"
              src="/img/khmer-introduction.jpg"
              alt="Quiz"
            />
            <div className="card-title">Introduction</div>
          </Link>
          <Link className="card" to="/matching">
            <img
              className="card-image"
              src="/img/khmer-grammar.jpg"
              alt="Quiz"
            />
            <div className="card-title">Grammar</div>
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Lesson;

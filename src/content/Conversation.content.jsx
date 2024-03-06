import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import "./Conversation.css";
const Conversation = () => {
  return (
    <div>
      <Fragment>
        <div className="categories">
          {/* <h1>Conversation</h1> */}
          <div className="categories-container">
            <Link className="card" to="/lesson/daily-phrase">
              <img
                className="card-image"
                src="https://placehold.co/600x400.png"
                alt="Quiz"
              />
              <div className="card-title">Section 1: Beginner</div>
            </Link>
            <Link className="card" to="/lesson/conversation">
              <img
                className="card-image"
                src="https://placehold.co/600x400.png"
                alt="Quiz"
              />
              <div className="card-title">Section 2: Pre-intermediate</div>
            </Link>
            <Link className="card" to="/matching">
              <img
                className="card-image"
                src="https://placehold.co/600x400.png"
                alt="Quiz"
              />
              <div className="card-title">Section 3: Intermediate</div>
            </Link>
            <Link className="card" to="/matching">
              <img
                className="card-image"
                src="https://placehold.co/600x400.png"
                alt="Quiz"
              />
              <div className="card-title">Section 4: Upper-Intermediate</div>
            </Link>
            <Link className="card" to="/matching">
              <img
                className="card-image"
                src="https://placehold.co/600x400.png"
                alt="Quiz"
              />
              <div className="card-title">Section 5: Advanced</div>
            </Link>
          </div>
        </div>
        <Outlet />
      </Fragment>
      <div className="header-chat"></div>
    </div>
  );
};

export default Conversation;

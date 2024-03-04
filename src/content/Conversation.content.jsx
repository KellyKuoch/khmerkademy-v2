import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import "./Conversation.css";
const Conversation = () => {
  return (
    <div>
      <Fragment>
        <div className="categories">
          <h1>Conversation</h1>
          <div className="categories-container">
            <Link className="card" to="/lesson/daily-phrase">
              <img
                className="card-image"
                src="https://placehold.co/600x400.png"
                alt="Quiz"
              />
              <div className="card-title">Lesson 1 - Introduction</div>
            </Link>
            <Link className="card" to="/lesson/conversation">
              <img
                className="card-image"
                src="https://placehold.co/600x400.png"
                alt="Quiz"
              />
              <div className="card-title">Lesson 2 - Family</div>
            </Link>
            <Link className="card" to="/matching">
              <img
                className="card-image"
                src="https://placehold.co/600x400.png"
                alt="Quiz"
              />
              <div className="card-title">Lesson 3 - Restaurant</div>
            </Link>
            <Link className="card" to="/matching">
              <img
                className="card-image"
                src="https://placehold.co/600x400.png"
                alt="Quiz"
              />
              <div className="card-title">Lesson 4 - Holiday</div>
            </Link>
            <Link className="card" to="/matching">
              <img
                className="card-image"
                src="https://placehold.co/600x400.png"
                alt="Quiz"
              />
              <div className="card-title">Lesson 5 - Culture</div>
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

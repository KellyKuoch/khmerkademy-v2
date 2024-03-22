import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import "./Learn.css";
// import Culture from "../culture-topic/Culture.culture-topic";
import Progress from "../Progress/Progress";

const sections = [
  {
    id: 1,
    title: "Section 1: Beginner",
    image: "/section-img/charmander.png",
    link: "/learn/section-1",
  },
  {
    id: 2,
    title: "Section 2: Pre-Intermediate",
    image: "/section-img/sonic.png",
    link: "/learn/section-1",
  },
  {
    id: 3,
    title: "Section 3: Intermediate",
    image: "/section-img/pngegg.png",
    link: "/learn/section-1",
  },
  {
    id: 4,
    title: "Section 4: Upper-Intermediate",
    image: "/section-img/pokemon.png",
    link: "/learn/section-1",
  },
  {
    id: 5,
    title: "Section 5: Advance",
    image: "/section-img/toroto.png",
    link: "/learn/section-1",
  },
];

const Learn = () => {
  return (
    <div>
      <Fragment>
        {/* cutlure topic component - promote Cambodian Rich Culture */}
        {/* <div className="culture-main"><Culture /></div> */}

        <div class="main-topics">
          {sections.map((item) => (
            <div className="main-grid">
              <div className="section">
                <img src={item.image} alt="1" className="img" />
                <div className="small-section">
                  <div className="title">
                    <h2>{item.title}</h2>
                  </div>
                  <Link to={item.link} className="button-7">
                    START HERE
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="main-topics">
          <Progress />
        </div> */}

        <Outlet />
      </Fragment>
      {/* <div className="header-chat"></div> */}
    </div>
  );
};

export default Learn;

import "./Unit.css";
import { Link } from "react-router-dom";

const Unit = () => {
  return (
    <div className="main-container">
      <div className="container">
        <div className="progress">{/* <h1>Progress Bar</h1> */}</div>
        <div className="unit">
          <div className="insider-unit">
            <div className="small-insider-unit">
              <h2>Unit 1</h2>
            </div>
            <div className="small-insider-unit">
              <img
                src="https://placehold.co/600x400?text=Consonent"
                alt="logo"
                className="fish"
              />
              <img
                src="https://placehold.co/600x400?text=Vowel"
                alt="logo"
                className="fish"
              />
              <Link to="/unit/vocabulary">
                {" "}
                <img
                  src="https://placehold.co/600x400?text=Vocabulary"
                  alt="logo"
                  className="fish"
                />
              </Link>

              <Link to="/unit/conversation">
                {" "}
                <img
                  src="https://placehold.co/600x400?text=Conversation"
                  alt="logo"
                  className="fish"
                />
              </Link>
            </div>
          </div>

          <div className="insider-unit">
            <div className="small-insider-unit">
              <h2>Unit 2</h2>
            </div>
            <div className="small-insider-unit">
              <Link to="/daily-phrase">
                <img
                  src="https://placehold.co/600x400?text=Vocabulary"
                  alt="logo"
                  className="fish"
                />
              </Link>
              <Link>
                <img
                  src="https://placehold.co/600x400?text=Conversation"
                  alt="logo"
                  className="fish"
                />
              </Link>
              <Link>
                <img
                  src="https://placehold.co/600x400?text=Grammar+(Verb)"
                  alt="logo"
                  className="fish"
                />
              </Link>

              <Link>
                <img
                  src="https://placehold.co/600x400.png"
                  alt="logo"
                  className="fish"
                />
              </Link>
            </div>
          </div>
          <div className="insider-unit">
            <div className="small-insider-unit">
              <h2>Unit 3</h2>
            </div>
            <div className="small-insider-unit">
              <Link>
                <img
                  src="https://placehold.co/600x400?text=Vocabulary"
                  alt="logo"
                  className="fish"
                />
              </Link>
              <Link>
                <img
                  src="https://placehold.co/600x400?text=Conversation"
                  alt="logo"
                  className="fish"
                />
              </Link>
              <Link>
                <img
                  src="https://placehold.co/600x400?text=Grammar+(Verb)"
                  alt="logo"
                  className="fish"
                />
              </Link>
              <Link>
                <img
                  src="https://placehold.co/600x400.png"
                  alt="logo"
                  className="fish"
                />
              </Link>
            </div>
          </div>
          <div className="insider-unit">
            <div className="small-insider-unit">
              <h2>Unit 4</h2>
            </div>
            <div className="small-insider-unit">
              <Link>
                <img
                  src="https://placehold.co/600x400?text=Consonent"
                  alt="logo"
                  className="fish"
                />
              </Link>
              <Link>
                <img
                  src="https://placehold.co/600x400?text=Vowel"
                  alt="logo"
                  className="fish"
                />
              </Link>
              <Link>
                <img
                  src="https://placehold.co/600x400?text=Vocabulary"
                  alt="logo"
                  className="fish"
                />
              </Link>
              <Link>
                <img
                  src="https://placehold.co/600x400?text=Conversation"
                  alt="logo"
                  className="fish"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="unit">
          <h2>Reviews</h2>
          <Link>
            <img
              src="https://placehold.co/600x400?text=Unit+1"
              alt="logo"
              className="fish"
            />
          </Link>

          <Link>
            <img
              src="https://placehold.co/600x400?text=Unit+2"
              alt="logo"
              className="fish"
            />
          </Link>
          <Link>
            <img
              src="https://placehold.co/600x400?text=Unit+3"
              alt="logo"
              className="fish"
            />
          </Link>
          <Link>
            <img
              src="https://placehold.co/600x400?text=Unit+4"
              alt="logo"
              className="fish"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Unit;

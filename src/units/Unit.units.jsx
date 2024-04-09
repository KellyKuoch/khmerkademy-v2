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
              <Link to="/unit/consonants" className="each-unit">
                <img
                  src="https://placehold.co/600x400?text=Consonent"
                  alt="logo"
                  className="fish"
                />
                <span>Consonent</span>
              </Link>
              <Link to="/unit/vowels" className="each-unit">
                <img
                  src="https://placehold.co/600x400?text=Vowel"
                  alt="logo"
                  className="fish"
                />
                <span>Vowel</span>
              </Link>

              <Link to="/unit/vocabulary" className="each-unit">
                {" "}
                <img
                  src="https://placehold.co/600x400?text=Vocabulary 1"
                  alt="logo"
                  className="fish"
                />
                <span>Vocabulary 1</span>
              </Link>

              <Link to="/unit/conversation-1" className="each-unit">
                {" "}
                <img
                  src="https://placehold.co/600x400?text=Conversation 1"
                  alt="logo"
                  className="fish"
                />
                <span>Conversation 1</span>
              </Link>
              <Link to="/unit/conversation-1" className="each-unit">
                {" "}
                <img
                  src="https://placehold.co/600x400?text=Exercise 1"
                  alt="logo"
                  className="fish"
                />
                <span>Exercise 1</span>
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
                  src="https://placehold.co/600x400?text=Vocabulary 2"
                  alt="logo"
                  className="fish"
                />
              </Link>
              <Link to="/unit/conversation-2">
                <img
                  src="https://placehold.co/600x400?text=Conversation 2"
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
              <Link to="/unit/conversation-1">
                {" "}
                <img
                  src="https://placehold.co/600x400?text=Exercise 2"
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
                  src="https://placehold.co/600x400?text=Vocabulary 3"
                  alt="logo"
                  className="fish"
                />
              </Link>
              <Link>
                <img
                  src="https://placehold.co/600x400?text=Conversation 3"
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
              <Link to="/unit/conversation-1">
                {" "}
                <img
                  src="https://placehold.co/600x400?text=Exercise 3"
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
                  src="https://placehold.co/600x400?text=Vocabulary 4"
                  alt="logo"
                  className="fish"
                />
              </Link>
              <Link>
                <img
                  src="https://placehold.co/600x400?text=Conversation 4"
                  alt="logo"
                  className="fish"
                />
              </Link>
              <Link to="/unit/conversation-1">
                {" "}
                <img
                  src="https://placehold.co/600x400?text=Exercise 4"
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

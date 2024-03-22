import "./Homepage.css";



export default function App() {
  return (
    <div className="main-homepage">
      <div className="top-container">
        <div className="left-top">
          <h2>Learn a language for free. Forever</h2>
          <div className="button-row">
            <button>Log In</button>
            <button>Sign Up</button>
          </div>
        </div>
        <img
          className="image-class"
          src="https://placehold.co/600x400.png"
          alt="top-pic"
        />
      </div>
      <div className="middle-container">
        <h2>Gamification poured into every lesson</h2>
        <div className="lesson-preview">
          <div className="lesson-container">
            <img
              className="image-small"
              src="https://placehold.co/600x400.png"
              alt="small-pic"
            />
            <h3>Personalized Learning</h3>
          </div>
          <div className="lesson-container">
            <img
              className="image-small"
              src="https://placehold.co/600x400.png"
              alt="small-pic"
            />
            <h3>Improve Quickly</h3>
          </div>
          <div className="lesson-container">
            <img
              className="image-small"
              src="https://placehold.co/600x400.png"
              alt="small-pic"
            />
            <h3>Stay Motivated</h3>
          </div>
          <div className="lesson-container">
            <img
              className="image-small"
              src="https://placehold.co/600x400.png"
              alt="small-pic"
            />
            <h3>New Lesson Every Week</h3>
          </div>
        </div>
      </div>
      <div className="footer-container">
        <img
          className="image-class"
          src="https://placehold.co/600x400.png"
          alt=""
        />
        <div className="decriptions">
          <h2>Welcome to KhmerKademy</h2>
          <p>Your new language learning journey starts here</p>
          <button>Start Learning</button>
        </div>
      </div>
      <div className="footer-container">
        <div className="decriptions">
          <h2>Welcome to KhmerKademy</h2>
          <p>Your new language learning journey starts here</p>
        </div>
        <img
          className="image-class"
          src="https://placehold.co/600x400.png"
          alt=""
        />
      </div>
      <div className="footer-container">
        <img
          className="image-class"
          src="https://placehold.co/600x400.png"
          alt=""
        />
        <div className="decriptions">
          <h2>Welcome to KhmerKademy</h2>
          <p>Your new language learning journey starts here</p>
        </div>
      </div>
    </div>
  );
}

import "./Lesson.css";
import { Link, useNavigate } from "react-router-dom";

const Lesson = () => {
  const navigate = useNavigate();
  return (
    <div className="main-lesson">
      <div className="small-unit" onClick={() => navigate("/unit-1")}>
        <div className="">
          <div className="logo">
            <h3>Master the fundamentals!</h3>
          </div>

          <span>It's the beginning your journey</span>
        </div>
        <img
          src="./img/unit_1_khmer.png"
          alt="small-unit"
          className="unit-img"
        />
      </div>
      <div
        className="small-unit"
        onClick={() => navigate("/unit/basic-phrase-1")}
      >
        <div className="">
          <div className="logo">
            <h3>Expand your skill!</h3>
          </div>

          <span>Dive into a comprehensive learning experience</span>
        </div>
        <img src="./img/unit_2_khmer.png" alt="small-unit" />
      </div>
      <div
        className="small-unit"
        onClick={() => navigate("/unit/basic-phrase-1")}
      >
        <div className="">
          <div className="logo">
            <h3>Refine your skills!</h3>
          </div>

          <span>Time to enhance your proficiency with exericses</span>
        </div>
        <img src="./img/unit_3_khmer.png" alt="small-unit" />
      </div>
      <div
        className="small-unit"
        onClick={() => navigate("/unit/basic-phrase-1")}
      >
        <div className="">
          <div className="logo">
            <h3>Recap and reinforce!</h3>
          </div>

          <span>Review Unit 1 to 3 with comprehensive exercises</span>
        </div>
        <img src="./img/unit_4_khmer.png" alt="small-unit" />
      </div>
    </div>
  );
};

export default Lesson;

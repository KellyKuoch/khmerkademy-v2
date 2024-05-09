import "./EachUnit.css";
import { Link, useNavigate } from "react-router-dom";
const UnitTwo = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* <h3>Unit 1</h3> */}
      <div className="main-unit">
        {/* <Link to="/unit/consonants">Consonants</Link> */}

        <div class="progress-circle">
          <div class="circle">
            <div class="mask full">
              <div class="fill"></div>
            </div>
            <div class="mask half">
              <div class="fill"></div>
            </div>
            <div
              className="inside-circle"
              onClick={() => navigate("/unit/conversation-2")}
            >
              Conversation 2
            </div>
          </div>
        </div>

        <div class="progress-circle">
          <div class="circle">
            <div class="mask full">
              <div class="fill"></div>
            </div>
            <div class="mask half">
              <div class="fill"></div>
            </div>
            <div
              className="inside-circle"
              onClick={() => navigate("/unit/basic-phrase-2")}
            >
              Basic Phrase 2
            </div>
          </div>
        </div>
        <div class="progress-circle">
          <div class="circle">
            <div class="mask full">
              <div class="fill"></div>
            </div>
            <div class="mask half">
              <div class="fill"></div>
            </div>
            <div
              className="inside-circle"
              onClick={() => navigate("/unit/flashcard")}
            >
              Days in Khmer
            </div>
          </div>
        </div>

        <div class="progress-circle">
          <div class="circle">
            <div class="mask full">
              <div class="fill"></div>
            </div>
            <div class="mask half">
              <div class="fill"></div>
            </div>
            <div
              className="inside-circle"
              onClick={() => navigate("/exercise/quiz")}
            >
              Quiz
            </div>
          </div>
        </div>
        <div class="progress-circle">
          <div class="circle">
            <div class="mask full">
              <div class="fill"></div>
            </div>
            <div class="mask half">
              <div class="fill"></div>
            </div>
            <div
              className="inside-circle"
              onClick={() => navigate("/exercise/sentence-reorder")}
            >
              Sentence Reordering
            </div>
          </div>
        </div>
        <div class="progress-circle">
          <div class="circle">
            <div class="mask full">
              <div class="fill"></div>
            </div>
            <div class="mask half">
              <div class="fill"></div>
            </div>
            <div
              className="inside-circle"
              onClick={() => navigate("/exercise/matching-pair")}
            >
              Matching Pair
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UnitTwo;

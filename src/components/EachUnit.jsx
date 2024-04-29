import "./EachUnit.css";
import { Link } from "react-router-dom";
const EachUnit = () => {
  return (
    <div className="main-unit">
      <h3>Unit 1</h3>
      <Link to="/unit/consonants">Consonants</Link>
      <Link to="/unit/vowels">Vowels</Link>
      <Link to="/unit/conversation-1">Conversation-1</Link>
      <Link to="/unit/basic-phrase-1">Basic Phrase-1</Link>
      <Link to="/unit/conversation-2">Conversation-2</Link>
      <Link to="/unit/basic-phrase-2">Basic Phrase-2</Link>
      <Link to="/exercise/quiz">Quiz</Link>
    </div>
  );
};

export default EachUnit;

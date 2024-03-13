import { Outlet, Link } from "react-router-dom";
import "./Culture.culture-topic.css"
const Culture = () => {
  return (
    <div className="fun-fact-style">
      <h2>Fun Facts</h2>
      <div className="small-topic-culture">
        <img src="https://placehold.co/600x400.png" alt="topic1" className="culture-img"/>
        <h3>Khmer New Year</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="small-topic-culture">
        <img src="https://placehold.co/600x400.png" alt="topic1" className="culture-img"/>
        <h3>Pchum Ben</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  );
};

export default Culture;

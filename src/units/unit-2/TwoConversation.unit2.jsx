import Conversation from "../Conversation.unit";
import twoConversation from "./twoConversation.json";
import { useNavigate } from "react-router-dom";
const TwoConversation = () => {
  const navigate = useNavigate();
  const handleNext = () => {
    navigate("/exercise/flashcard");
  };
  return (
    <div className="">
      <Conversation data={twoConversation} handleNext={handleNext} />
    </div>
  );
};
export default TwoConversation;

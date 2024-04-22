import Conversation from "../Conversation.unit";
import oneConversationA from "./oneConvoA.json";
import { useNavigate } from "react-router-dom";
const OneConversation = () => {
  const navigate = useNavigate();
  const handleNext = () => {
    navigate("/exercise/fill-the-blank");
  };
  return (
    <div className="">
      <Conversation data={oneConversationA} handleNext={handleNext} />
    </div>
  );
};
export default OneConversation;

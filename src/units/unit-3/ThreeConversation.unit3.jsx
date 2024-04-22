import Conversation from "../Conversation.unit";
import threeConversation from "./threeConversation.json";
const ThreeConversation = () => {
  return (
    <div className="">
      <Conversation data={threeConversation} />
    </div>
  );
};
export default ThreeConversation;

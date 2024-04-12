import Conversation from "../Conversation.unit";
import twoConversation from "./twoConversation.json";
const TwoConversation = () => {
  return (
    <div className="">
      <Conversation data={twoConversation} />
    </div>
  );
};
export default TwoConversation;

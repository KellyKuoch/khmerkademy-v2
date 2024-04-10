import Conversation from "../Conversation.unit";
import oneConversationA from "./oneConvoA.json";
const OneConversation = () => {
  return (
    <div className="">
      <Conversation data={oneConversationA} />
    </div>
  );
};
export default OneConversation;

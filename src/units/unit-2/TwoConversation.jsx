import Conversation from "../Conversation.unit";
import twoConversation from "./oneConvoB.json";
const TwoConversation = () => {
  return (
    <div className="">
      <Conversation data={twoConversation} />
    </div>
  );
};
export default TwoConversation;

import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navigation from "./navigation/Navigation";
import Homepage from "./components/Homepage.component";
import Exercise from "./components/Exercises.component";
import DailyPhrase from "./components/DailyPhrase.component";
import MatchingPair from "./content/MatchingPair.content";
import Profile from "./authentication/Profile.authentication";
import Unit from "./units/Unit.units";
import Culture from "./culture-topic/Culture.culture-topic";
// import Vocabulary from "./units/Vocabulary.unit";
// import Conversatoin from "./units/Conversation.unit";
import Consonants from "./units/unit-1/Consonants";
import Vowels from "./units/unit-1/Vowels";
import OneConversation from "./units/unit-1/OneConversation";
import TwoConversation from "./units/unit-2/TwoConversation.unit2";
import OneVocabulary from "./units/unit-1/OneVocabulary";
import OnePhrases from "./units/unit-1/OnePhrases.unit1";
import TwoVocabulary from "./units/unit-2/TwoVocabulary";
import TwoPhrases from "./units/unit-2/TwoPhrases.unit2";
import Number from "./units/unit-2/Number.unit-2";
import Grammar from "./units/unit-2/Grammar";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Homepage />} />
        <Route path="home" element={<Homepage />} />
        <Route path="daily-phrase" element={<DailyPhrase />} />
        <Route path="fun-facts" element={<Culture />} />
        <Route path="exercise" element={<Exercise />} />
        <Route path="exercise/matching-pair" element={<MatchingPair />} />
        {/* <Route path="lessons" element={<Learn />} /> */}
        <Route path="lessons" element={<Unit />} />
        <Route path="unit/consonants" element={<Consonants />} />
        <Route path="unit/vowels" element={<Vowels />} />
        <Route path="unit/basic-phrase-1" element={<OnePhrases />} />
        <Route path="unit/basic-phrase-2" element={<TwoPhrases />} />
        <Route path="unit/vocabulary-1" element={<OneVocabulary />} />
        <Route path="unit/vocabulary-2" element={<TwoVocabulary />} />
        <Route path="unit/number" element={<Number />} />
        <Route path="unit/conversation-1" element={<OneConversation />} />
        <Route path="unit/conversation-2" element={<TwoConversation />} />
        <Route path="unit/grammar-1" element={<Grammar />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
};

export default App;

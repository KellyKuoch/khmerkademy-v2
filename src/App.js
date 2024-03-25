import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navigation from "./navigation/Navigation";
import Homepage from "./components/Homepage.component";
import Exercise from "./components/Exercises.component";
import DailyPhrase from "./components/DailyPhrase.component";
import MatchingPair from "./content/MatchingPair.content";
import Learn from "./content/Learn.content";
import Profile from "./authentication/Profile.authentication";
import Unit from "./units/Unit.units";
import Culture from "./culture-topic/Culture.culture-topic";
import Vocabulary from "./units/Vocabulary.unit";
import Conversatoin from "./units/Conversation.unit";

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
        <Route path="lessons" element={<Learn />} />
        <Route path="learn/section-1" element={<Unit />} />
        <Route path="unit/vocabulary" element={<Vocabulary />} />
        <Route path="unit/conversation" element={<Conversatoin />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
};

export default App;

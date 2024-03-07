import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navigation from "./navigation/Navigation";
import Homepage from "./components/Homepage.component";
import Exercise from "./components/Exercises.component";
import Lesson from "./components/Lessons.component";
import DailyPhrase from "./components/DailyPhrase.component";
import MatchingPair from "./content/MatchingPair.content";
import Learn from "./content/Learn.content";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Homepage />} />
        <Route path="home" element={<Homepage />} />
        <Route path="exercise" element={<Exercise />} />
        <Route path="exercise/matching-pair" element={<MatchingPair />} />
        <Route path="lesson" element={<Lesson />} />
        <Route path="lesson/daily-phrase" element={<DailyPhrase />} />
        <Route path="lesson/learn" element={<Learn />} />
      </Route>
    </Routes>
  );
};

export default App;

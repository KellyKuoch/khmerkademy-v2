import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navigation from "./navigation/Navigation";
import Homepage from "./components/Homepage.component";
import Exercise from "./components/Exercises.component";
import Lesson from "./components/Lessons.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Homepage />} />
        <Route path="exercise" element={<Exercise />} />
        <Route path="lesson" element={<Lesson />} />
      </Route>
    </Routes>
  );
};

export default App;

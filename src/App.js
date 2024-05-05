import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navigation from "./navigation/Navigation";
import Homepage from "./components/Homepage.component";
// import Exercise from "./components/Exercises.component";
import DailyPhrase from "./components/DailyPhrase.component";
import Quiz from "./content/Quiz.content";
// import Profile from "./authentication/Profile.authentication";
import Unit from "./units/Unit.units";
import Culture from "./culture-topic/Culture.culture-topic";
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
import { useEffect, useState } from "react";
import FillTheBlank from "./content/FillTheBlank";
import Flashcard from "./content/Flashcard";
import ThreeGrammar from "./units/unit-3/ThreeGrammar";
import ThreePhrases from "./units/unit-3/ThreePhrases.unit3";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import AuthDetails from "./components/AuthDetails";
// import { onAuthStateChanged, signOut } from "firebase/auth";
// import { auth } from "./firebase";
import Instructions from "./components/Instruction";
import Instructions2 from "./components/Instruction-2";
import MatchingPair from "./content/MatchingPair.content";
import Lesson from "./components/Lesson";
import EachUnit from "./components/EachUnit";
import SentenceReorder from "./content/SentenceReorder";
import UnitTwo from "./components/UnitTwo";
import UnitThree from "./components/UnitThree";
// import { auth } from "./authentication/firebase-config";
// import SignIn from "./authentication/SignIn";

const App = ({ initialScore = 0, onScoreChange }) => {
  const [score, setScore] = useState(initialScore);
  // const [authUser, setAuthUser] = useState(null);

  //Firebase authentication
  // useEffect(() => {
  //   const unsubscribe = auth().onAuthStateChanged(setUser);
  //   return () => unsubscribe();
  // }, []);

  //Score changes function
  useEffect(() => {
    if (onScoreChange) {
      onScoreChange(score);
    }
  }, [score, onScoreChange]);

  const incrementScore = (points) => {
    setScore((prevScore) => prevScore + points);
  };
  const printTest = () => {
    console.log({ score });
  };
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        {/* <Route index element={user ? <Homepage user={user} /> : <SignIn />} /> */}
        <Route index element={<Homepage />} />
        <Route path="instruction" element={<Instructions />} />
        <Route path="home" element={<Homepage />} />
        <Route path="daily-phrase" element={<DailyPhrase />} />
        <Route path="lesson" element={<Lesson />} />
        <Route path="unit-1" element={<EachUnit />} />
        <Route path="unit-2" element={<UnitTwo />} />
        <Route path="unit-3" element={<UnitThree />} />
        <Route path="fun-facts" element={<Culture />} />
        {/* <Route path="exercise" element={<Exercise />} /> */}
        <Route path="exercise/fill-the-blank" element={<FillTheBlank />} />
        <Route path="exercise/flashcard" element={<Flashcard />} />
        <Route
          path="exercise/quiz"
          element={
            <Quiz
              incrementScore={incrementScore}
              score={score}
              setScore={setScore}
            />
          }
        />
        <Route path="exercise/matching-pair" element={<MatchingPair />} />
        <Route path="exercise/sentence-reorder" element={<SentenceReorder />} />
        {/* <Route path="lessons" element={<Learn />} /> */}
        {/* <Route path="lessons" element={<Unit />} /> */}
        <Route path="unit/consonants" element={<Consonants />} />
        <Route path="unit/vowels" element={<Vowels />} />
        <Route
          path="unit/basic-phrase-1"
          element={
            <OnePhrases
              printTest={printTest}
              incrementScore={incrementScore}
              score={score}
              setScore={setScore}
            />
          }
        />
        <Route
          path="unit/basic-phrase-2"
          element={
            <TwoPhrases
              printTest={printTest}
              incrementScore={incrementScore}
              score={score}
              setScore={setScore}
            />
          }
        />
        <Route
          path="unit/basic-phrase-3"
          element={
            <ThreePhrases
              printTest={printTest}
              incrementScore={incrementScore}
              score={score}
              setScore={setScore}
            />
          }
        />
        <Route path="dictionary" element={<OneVocabulary />} />
        <Route path="unit/vocabulary-2" element={<TwoVocabulary />} />
        <Route path="unit/number" element={<Number />} />
        <Route path="unit/conversation-1" element={<OneConversation />} />
        <Route path="unit/conversation-2" element={<TwoConversation />} />
        <Route path="unit/conversation-3" element={<TwoConversation />} />
        <Route path="unit/grammar-1" element={<Grammar />} />
        <Route path="unit/grammar-3" element={<ThreeGrammar />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="detail" element={<AuthDetails />} />
        <Route path="instruction-2" element={<Instructions2 />} />
        {/* <Route path="profile" element={<Profile />} /> */}
      </Route>
    </Routes>
  );
};

export default App;

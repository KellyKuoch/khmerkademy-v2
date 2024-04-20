import { useState, useEffect } from "react";
const Score = ({ initialScore = 0, onScoreChange }) => {
  const [score, setScore] = useState(initialScore);

  useEffect(() => {
    if (onScoreChange) {
      onScoreChange(score);
    }
  }, [score, onScoreChange]);

  const incrementScore = (points) => {
    setScore((prevScore) => prevScore + points);
  };
};

export default Score;

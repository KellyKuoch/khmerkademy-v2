import useSound from "use-sound";

const Listen = ({ activeConsonant }) => {
  // const [playSound] = useSound("../audio/consonants/con1.mp3");
  const [playSound] = useSound(
    `../audio/consonants/con${activeConsonant.id}.mp3`
  );

  return (
    <div className="audio-container">
      <h3>Learn how to pronoun it correctly</h3>
      <button className="button-8" onClick={playSound}>
        Play
      </button>
    </div>
  );
};
export default Listen;

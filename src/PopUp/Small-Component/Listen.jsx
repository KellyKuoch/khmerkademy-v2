import useSound from "use-sound";

const Listen = ({ activeConsonant }) => {
  // const [playSound] = useSound("../audio/consonants/con1.mp3");
  const [playSound] = useSound(
    `../audio/consonants/con${activeConsonant.id}.mp3`
  );

  return (
    <div>
      <h3>Audio container</h3>
      <button onClick={playSound}>Play Audio</button>
    </div>
  );
};
export default Listen;

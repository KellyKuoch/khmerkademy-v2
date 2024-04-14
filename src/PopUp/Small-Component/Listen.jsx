import useSound from "use-sound";

const Listen = () => {
  const [playSound] = useSound("../audio/con1.mp3");

  return (
    <div>
      <h3>Audio container</h3>
      <button onClick={playSound}>Play Audio</button>
    </div>
  );
};
export default Listen;

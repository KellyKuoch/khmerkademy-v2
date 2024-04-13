const Read = ({ activeConsonant }) => {
  return (
    <div>
      <h3>What it means?</h3>
      <p>
        {activeConsonant.name} គឺជា {activeConsonant.khmerWord}
      </p>
      <p>
        {activeConsonant.pronoun} is for {activeConsonant.wordPronoun} (
        {activeConsonant.englishWord})
      </p>
    </div>
  );
};
export default Read;

import "./Consonants.css";
const Vowels = () => {
  const vowels = [
    {
      id: 1,
      name: "អ",
      pronoun: "kâ",
    },
    {
      id: 2,
      name: "អា",
      pronoun: "khâ",
    },
    {
      id: 3,
      name: "អិ",
      pronoun: "kô",
    },
    {
      id: 4,
      name: "អី",
      pronoun: "khô",
    },
    {
      id: 5,
      name: "អឹ",
      pronoun: "ngô",
    },
    {
      id: 6,
      name: "អឺ",
      pronoun: "châ",
    },
    {
      id: 7,
      name: "អុ",
      pronoun: "chhâ",
    },
    {
      id: 8,
      name: "អូ",
      pronoun: "chô",
    },
    {
      id: 9,
      name: "អួ",
      pronoun: "chhô",
    },
    {
      id: 10,
      name: "អើ",
      pronoun: "nhô",
    },
    {
      id: 11,
      name: "អឿ",
      pronoun: "dâ",
    },
    {
      id: 12,
      name: "អៀ",
      pronoun: "thâ",
    },
    {
      id: 13,
      name: "អេ",
      pronoun: "dô",
    },
    {
      id: 14,
      name: "អែ",
      pronoun: "thô",
    },
    {
      id: 15,
      name: "អែ",
      pronoun: "nâ",
    },
    {
      id: 16,
      name: "អៃ",
      pronoun: "tâ",
    },
    {
      id: 17,
      name: "អោ",
      pronoun: "thâ",
    },
    {
      id: 18,
      name: "អៅ",
      pronoun: "tô",
    },
    {
      id: 19,
      name: "អុំ",
      pronoun: "thô",
    },
    {
      id: 20,
      name: "អំ",
      pronoun: "nô",
    },
    {
      id: 21,
      name: "អាំ",
      pronoun: "bâ",
    },
    {
      id: 22,
      name: "អះ",
      pronoun: "phâ",
    },
    {
      id: 23,
      name: "អិះ",
      pronoun: "pô",
    },
    {
      id: 24,
      name: "អុះ",
      pronoun: "phô",
    },
    {
      id: 25,
      name: "អេះ",
      pronoun: "mô",
    },
    {
      id: 26,
      name: "អោះ",
      pronoun: "yô",
    },
  ];
  const independentVowels = [
    {
      id: 1,
      name: "ឥ",
      pronoun: "ĕ",
    },
    {
      id: 2,
      name: "ឦ",
      pronoun: "ei",
    },
    {
      id: 3,
      name: "ឧ",
      pronoun: "ŏ",
    },
    {
      id: 4,
      name: "ឩ",
      pronoun: "ou",
    },
    {
      id: 5,
      name: "ឪ",
      pronoun: "âu",
    },
    {
      id: 6,
      name: "ឫ",
      pronoun: "rœ̆",
    },
    {
      id: 7,
      name: "ឬ",
      pronoun: "rœ",
    },
    {
      id: 8,
      name: "ឭ",
      pronoun: "lœ̆",
    },
    {
      id: 9,
      name: "ឮ",
      pronoun: "lœ",
    },
    {
      id: 10,
      name: "ឯ",
      pronoun: "ê",
    },
    {
      id: 11,
      name: "ឰ",
      pronoun: "ai",
    },
    {
      id: 12,
      name: "ឱ",
      pronoun: "aô",
    },
    {
      id: 13,
      name: "ឲ",
      pronoun: "aô",
    },
    {
      id: 14,
      name: "ឳ",
      pronoun: "au",
    },
  ];
  return (
    <div className="main-consonants">
      <div className="consonants-title">
        <h2>Khmer Vowels</h2>
      </div>
      <div className="consonants-boxes">
        {vowels.map((item) => (
          <div className="button-1" style={{ fontSize: "25px" }}>
            <span>
              <strong>{item.name}</strong>
            </span>

            <span>{item.pronoun}</span>
          </div>
        ))}
      </div>
      <div className="consonants-title">
        <h2>Independent Vowels</h2>
      </div>
      <div className="consonants-boxes">
        {independentVowels.map((item) => (
          <div className="button-1" style={{ fontSize: "25px" }}>
            <span>
              <strong>{item.name}</strong>
            </span>
            <span>{item.pronoun}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vowels;

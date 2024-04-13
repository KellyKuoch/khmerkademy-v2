// import "../unit-1/Consonants.css";
const Number = () => {
  const numbers = [
    {
      id: 1,
      name: "១",
      pronoun: "kâ",
      subScript: "្ក",
    },
    {
      id: 2,
      name: "២",
      pronoun: "khâ",
      subScript: "្ខ",
    },
    {
      id: 3,
      name: "៣",
      pronoun: "kô",
      subScript: "្គ",
    },
    {
      id: 4,
      name: "៤",
      pronoun: "khô",
      subScript: "្ឃ",
    },
    {
      id: 5,
      name: "៥",
      pronoun: "ngô",
      subScript: "្ង",
    },
    {
      id: 6,
      name: "៦",
      pronoun: "",
      subScript: "្ច",
    },
    {
      id: 7,
      name: "៧",
      pronoun: "",
      subScript: "្ឆ",
    },
    {
      id: 8,
      name: "៨",
      pronoun: "chô",
      subScript: "្ជ",
    },
    {
      id: 9,
      name: "៩",
      pronoun: "chhô",
      subScript: "្ឈ",
    },
    {
      id: 10,
      name: "១០",
      pronoun: "nhô",
      subScript: "្ញ",
    },
    {
      id: 11,
      name: "១១",
      pronoun: "dâ",
      subScript: "្ដ",
    },
    {
      id: 12,
      name: "២០",
      pronoun: "thâ",
      subScript: "្ឋ",
    },
    {
      id: 13,
      name: "២១",
      pronoun: "dô",
      subScript: "",
    },
    {
      id: 14,
      name: "៣០",
      pronoun: "thô",
      subScript: "្ឍ",
    },
    {
      id: 15,
      name: "៣១",
      pronoun: "nâ",
      subScript: "្ណ",
    },
    {
      id: 16,
      name: "៤០",
      pronoun: "tâ",
      subScript: "្ត",
    },
    {
      id: 17,
      name: "៤១",
      pronoun: "thâ",
      subScript: "្ថ",
    },
    {
      id: 18,
      name: "៥០",
      pronoun: "tô",
      subScript: "្ទ",
    },
    {
      id: 19,
      name: "៥១",
      pronoun: "thô",
      subScript: "្ធ",
    },
    {
      id: 20,
      name: "៦០",
      pronoun: "nô",
      subScript: "្ន",
    },
    {
      id: 21,
      name: "៦១",
      pronoun: "bâ",
      subScript: "្ប",
    },
    {
      id: 22,
      name: "៧០",
      pronoun: "phâ",
      subScript: "្ផ",
    },
    {
      id: 23,
      name: "៧១",
      pronoun: "pô",
      subScript: "្ព",
    },
    {
      id: 24,
      name: "៨០",
      pronoun: "phô",
      subScript: "្ភ",
    },
    {
      id: 25,
      name: "៨១",
      pronoun: "mô",
      subScript: "្ម",
    },
    {
      id: 26,
      name: "៩០",
      pronoun: "yô",
      subScript: "្យ",
    },
    {
      id: 27,
      name: "៩១",
      pronoun: "rô",
      subScript: "្រ",
    },
    {
      id: 28,
      name: "១០០",
      pronoun: "lô",
      subScript: "្ល",
    },
    {
      id: 29,
      name: "១០០០",
      pronoun: "vô",
      subScript: "្វ",
    },
    {
      id: 30,
      name: "១០០០០",
      pronoun: "sâ",
      subScript: "្ស",
    },
    {
      id: 31,
      name: "១០០០០០",
      pronoun: "hâ",
      subScript: "្ហ",
    },
    {
      id: 32,
      name: "១០០០០០០",
      pronoun: "la",
      subScript: "្ឡ",
    },
  ];
  return (
    <div className="main-consonants">
      <div className="consonants-title">
        <h2>Khmer Consonants</h2>
      </div>
      <div className="consonants-boxes">
        {numbers.map((item) => (
          <button className="consonant" style={{ fontSize: "25px" }}>
            <span>
              <strong>{item.name}</strong>
            </span>

            <span>{item.pronoun}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Number;

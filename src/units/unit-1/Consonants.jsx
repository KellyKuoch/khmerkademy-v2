import "./Consonants.css";
const Consonants = () => {
  const consonants = [
    {
      id: 1,
      name: "ក",
      pronoun: "kâ",
      subScript: "្ក",
    },
    {
      id: 2,
      name: "ខ",
      pronoun: "khâ",
      subScript: "្ខ",
    },
    {
      id: 3,
      name: "គ",
      pronoun: "kô",
      subScript: "្គ",
    },
    {
      id: 4,
      name: "ឃ",
      pronoun: "khô",
      subScript: "្ឃ",
    },
    {
      id: 5,
      name: "ង",
      pronoun: "ngô",
      subScript: "្ង",
    },
    {
      id: 6,
      name: "ច",
      pronoun: "châ",
      subScript: "្ច",
    },
    {
      id: 7,
      name: "ឆ",
      pronoun: "chhâ",
      subScript: "្ឆ",
    },
    {
      id: 8,
      name: "ជ",
      pronoun: "chô",
      subScript: "្ជ",
    },
    {
      id: 9,
      name: "ឈ",
      pronoun: "chhô",
      subScript: "្ឈ",
    },
    {
      id: 10,
      name: "ញ",
      pronoun: "nhô",
      subScript: "្ញ",
    },
    {
      id: 11,
      name: "ដ",
      pronoun: "dâ",
      subScript: "្ដ",
    },
    {
      id: 12,
      name: "ឋ",
      pronoun: "thâ",
      subScript: "្ឋ",
    },
    {
      id: 13,
      name: "ឌ",
      pronoun: "dô",
      subScript: "",
    },
    {
      id: 14,
      name: "ឍ",
      pronoun: "thô",
      subScript: "្ឍ",
    },
    {
      id: 15,
      name: "ណ",
      pronoun: "nâ",
      subScript: "្ណ",
    },
    {
      id: 16,
      name: "ត",
      pronoun: "tâ",
      subScript: "្ត",
    },
    {
      id: 17,
      name: "ថ",
      pronoun: "thâ",
      subScript: "្ថ",
    },
    {
      id: 18,
      name: "ទ",
      pronoun: "tô",
      subScript: "្ទ",
    },
    {
      id: 19,
      name: "ធ",
      pronoun: "thô",
      subScript: "្ធ",
    },
    {
      id: 20,
      name: "ន",
      pronoun: "nô",
      subScript: "្ន",
    },
    {
      id: 21,
      name: "ប",
      pronoun: "bâ",
      subScript: "្ប",
    },
    {
      id: 22,
      name: "ផ",
      pronoun: "phâ",
      subScript: "្ផ",
    },
    {
      id: 23,
      name: "ព",
      pronoun: "pô",
      subScript: "្ព",
    },
    {
      id: 24,
      name: "ភ",
      pronoun: "phô",
      subScript: "្ភ",
    },
    {
      id: 25,
      name: "ម",
      pronoun: "mô",
      subScript: "្ម",
    },
    {
      id: 26,
      name: "យ",
      pronoun: "yô",
      subScript: "្យ",
    },
    {
      id: 27,
      name: "រ",
      pronoun: "rô",
      subScript: "្រ",
    },
    {
      id: 28,
      name: "ល",
      pronoun: "lô",
      subScript: "្ល",
    },
    {
      id: 29,
      name: "វ",
      pronoun: "vô",
      subScript: "្វ",
    },
    {
      id: 30,
      name: "ស",
      pronoun: "sâ",
      subScript: "្ស",
    },
    {
      id: 31,
      name: "ហ",
      pronoun: "hâ",
      subScript: "្ហ",
    },
    {
      id: 32,
      name: "ឡ",
      pronoun: "la",
      subScript: "្ឡ",
    },
    {
      id: 33,
      name: "អ",
      pronoun: "lâ",
      subScript: "្អ",
    },
  ];
  return (
    <div className="main-consonants">
      <div className="consonants-title">
        <h2>Khmer Consonants</h2>
      </div>
      <div className="consonants-boxes">
        {consonants.map((item) => (
          <div className="consonant" style={{ fontSize: "25px" }}>
            <p>
              <strong>{item.name}</strong>
            </p>

            <p>{item.pronoun}</p>
          </div>
        ))}
      </div>
      <div className="consonants-title">
        <h2>Consonants with the Subscript Form</h2>
      </div>
      <div className="consonants-boxes">
        {consonants.map((item) => (
          <div className="consonant" style={{ fontSize: "25px" }}>
            <p>
              <strong>{item.name}</strong>
            </p>
            <p>{item.subScript}</p>
            <p>{item.pronoun}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Consonants;

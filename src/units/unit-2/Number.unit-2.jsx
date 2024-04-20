// import "../unit-1/Consonants.css";
const Number = () => {
  const numbers = [
    {
      id: 1,
      name: "១",
      pronoun: "muoy",
      subScript: "្ក",
    },
    {
      id: 2,
      name: "២",
      pronoun: "pi",
      subScript: "្ខ",
    },
    {
      id: 3,
      name: "៣",
      pronoun: "bi",
      subScript: "្គ",
    },
    {
      id: 4,
      name: "៤",
      pronoun: "buon",
      subScript: "្ឃ",
    },
    {
      id: 5,
      name: "៥",
      pronoun: "param",
      subScript: "្ង",
    },
    {
      id: 6,
      name: "៦",
      pronoun: "param-muoy",
      subScript: "្ច",
    },
    {
      id: 7,
      name: "៧",
      pronoun: "param-pel",
      subScript: "្ឆ",
    },
    {
      id: 8,
      name: "៨",
      pronoun: "param-bi",
      subScript: "្ជ",
    },
    {
      id: 9,
      name: "៩",
      pronoun: "param-buon",
      subScript: "្ឈ",
    },
    {
      id: 10,
      name: "១០",
      pronoun: "dob",
      subScript: "្ញ",
    },
    {
      id: 11,
      name: "១១",
      pronoun: "dob-muoy",
      subScript: "្ដ",
    },
    {
      id: 12,
      name: "២០",
      pronoun: "maphei",
      subScript: "្ឋ",
    },
    {
      id: 13,
      name: "២១",
      pronoun: "maphei-muoy",
      subScript: "",
    },
    {
      id: 14,
      name: "៣០",
      pronoun: "samseb",
      subScript: "្ឍ",
    },
    {
      id: 15,
      name: "៣១",
      pronoun: "samseb-muoy",
      subScript: "្ណ",
    },
    {
      id: 16,
      name: "៤០",
      pronoun: "saeseb",
      subScript: "្ត",
    },
    {
      id: 17,
      name: "៤១",
      pronoun: "saeseb-muoy",
      subScript: "្ថ",
    },
    {
      id: 18,
      name: "៥០",
      pronoun: "haseb",
      subScript: "្ទ",
    },
    {
      id: 19,
      name: "៥១",
      pronoun: "haseb-muoy",
      subScript: "្ធ",
    },
    {
      id: 20,
      name: "៦០",
      pronoun: "hokseb",
      subScript: "្ន",
    },
    {
      id: 21,
      name: "៦១",
      pronoun: "hokseb-muoy",
      subScript: "្ប",
    },
    {
      id: 22,
      name: "៧០",
      pronoun: "chetseb",
      subScript: "្ផ",
    },
    {
      id: 23,
      name: "៧១",
      pronoun: "chetseb-muoy",
      subScript: "្ព",
    },
    {
      id: 24,
      name: "៨០",
      pronoun: "paetseb",
      subScript: "្ភ",
    },
    {
      id: 25,
      name: "៨១",
      pronoun: "paetseb-muoy",
      subScript: "្ម",
    },
    {
      id: 26,
      name: "៩០",
      pronoun: "kavseb",
      subScript: "្យ",
    },
    {
      id: 27,
      name: "៩១",
      pronoun: "kavseb-muoy",
      subScript: "្រ",
    },
    {
      id: 28,
      name: "១០០",
      pronoun: "muoy-rouy",
      subScript: "្ល",
    },
    {
      id: 29,
      name: "១០០០",
      pronoun: "muoy-pon",
      subScript: "្វ",
    },
    {
      id: 30,
      name: "១០០០០",
      pronoun: "muoy-mern",
      subScript: "្ស",
    },
    {
      id: 31,
      name: "១០០០០០",
      pronoun: "dob-mern / muoy-saen",
      subScript: "្ហ",
    },
    {
      id: 32,
      name: "១០០០០០០",
      pronoun: "muoy lean",
      subScript: "្ឡ",
    },
  ];
  return (
    <div className="main-consonants">
      <div className="consonants-title">
        <h2>Khmer Number</h2>
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

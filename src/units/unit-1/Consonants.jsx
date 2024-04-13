import { useState } from "react";
import "./Consonants.css";
import Modal from "../../PopUp/PopUpModal";
import Written from "../../PopUp/Small-Component/Written";
import Read from "../../PopUp/Small-Component/Read";
import Figure from "../../PopUp/Small-Component/Figure";
const Consonants = () => {
  const [activeConsonant, setActiveConsonant] = useState(null);
  const [activeComponent, setActiveComponent] = useState("read");
  const popupStyle = activeConsonant
    ? { display: "block" }
    : { display: "none" };

  // Switch function to set active tab
  let ActiveComponent;

  switch (activeComponent) {
    case "write":
      ActiveComponent = Written;
      break;
    case "read":
      ActiveComponent = Read;
      break;
    case "figure":
      ActiveComponent = Figure;
      break;
    default:
      ActiveComponent = Read;
  }

  const consonants = [
    {
      id: 1,
      name: "ក",
      pronoun: "kâ",
      subScript: "្ក",
      khmerWord: "ក្តាម",
      englishWord: "Crab",
      wordPronoun: "kdam",
    },
    {
      id: 2,
      name: "ខ",
      pronoun: "khâ",
      subScript: "្ខ",
      khmerWord: "ខ្លា",
      englishWord: "Tiger",
      wordPronoun: "khla",
    },
    {
      id: 3,
      name: "គ",
      pronoun: "kô",
      subScript: "្គ",
      khmerWord: "គោ",
      englishWord: "Cow",
      wordPronoun: "ko",
    },
    {
      id: 4,
      name: "ឃ",
      pronoun: "khô",
      subScript: "្ឃ",
      khmerWord: "ឃ្មុំ",
      englishWord: "Bees",
      wordPronoun: "khamom",
    },
    {
      id: 5,
      name: "ង",
      pronoun: "ngô",
      subScript: "្ង",
      khmerWord: "ងៀត",
      englishWord: "Dried fish",
      wordPronoun: "ngeat",
    },
    {
      id: 6,
      name: "ច",
      pronoun: "châ",
      subScript: "្ច",
      khmerWord: "",
      englishWord: "",
      wordPronoun: "",
    },
    {
      id: 7,
      name: "ឆ",
      pronoun: "chhâ",
      subScript: "្ឆ",
      khmerWord: "",
      englishWord: "",
      wordPronoun: "",
    },
    {
      id: 8,
      name: "ជ",
      pronoun: "chô",
      subScript: "្ជ",
      khmerWord: "",
      englishWord: "",
      wordPronoun: "",
    },
    {
      id: 9,
      name: "ឈ",
      pronoun: "chhô",
      subScript: "្ឈ",
      khmerWord: "",
      englishWord: "",
      wordPronoun: "",
    },
    {
      id: 10,
      name: "ញ",
      pronoun: "nhô",
      subScript: "្ញ",
      khmerWord: "",
      englishWord: "",
      wordPronoun: "",
    },
    {
      id: 11,
      name: "ដ",
      pronoun: "dâ",
      subScript: "្ដ",
      khmerWord: "",
      englishWord: "",
      wordPronoun: "",
    },
    {
      id: 12,
      name: "ឋ",
      pronoun: "thâ",
      subScript: "្ឋ",
      khmerWord: "",
      englishWord: "",
      wordPronoun: "",
    },
    {
      id: 13,
      name: "ឌ",
      pronoun: "dô",
      subScript: "",
      khmerWord: "",
      englishWord: "",
      wordPronoun: "",
    },
    {
      id: 14,
      name: "ឍ",
      pronoun: "thô",
      subScript: "្ឍ",
      khmerWord: "",
      englishWord: "",
      wordPronoun: "",
    },
    {
      id: 15,
      name: "ណ",
      pronoun: "nâ",
      subScript: "្ណ",
      khmerWord: "",
      englishWord: "",
      wordPronoun: "",
    },
    {
      id: 16,
      name: "ត",
      pronoun: "tâ",
      subScript: "្ត",
      khmerWord: "",
      englishWord: "",
      wordPronoun: "",
    },
    {
      id: 17,
      name: "ថ",
      pronoun: "thâ",
      subScript: "្ថ",
      khmerWord: "",
      englishWord: "",
      wordPronoun: "",
    },
    {
      id: 18,
      name: "ទ",
      pronoun: "tô",
      subScript: "្ទ",
      khmerWord: "",
      englishWord: "",
      wordPronoun: "",
    },
    {
      id: 19,
      name: "ធ",
      pronoun: "thô",
      subScript: "្ធ",
      khmerWord: "",
      englishWord: "",
      wordPronoun: "",
    },
    {
      id: 20,
      name: "ន",
      pronoun: "nô",
      subScript: "្ន",
      khmerWord: "",
      englishWord: "",
      wordPronoun: "",
    },
    {
      id: 21,
      name: "ប",
      pronoun: "bâ",
      subScript: "្ប",
      khmerWord: "",
      englishWord: "",
      wordPronoun: "",
    },
    {
      id: 22,
      name: "ផ",
      pronoun: "phâ",
      subScript: "្ផ",
      khmerWord: "",
      englishWord: "",
      wordPronoun: "",
    },
    {
      id: 23,
      name: "ព",
      pronoun: "pô",
      subScript: "្ព",
      khmerWord: "",
      englishWord: "",
      wordPronoun: "",
    },
    {
      id: 24,
      name: "ភ",
      pronoun: "phô",
      subScript: "្ភ",
      khmerWord: "",
      englishWord: "",
      wordPronoun: "",
    },
    {
      id: 25,
      name: "ម",
      pronoun: "mô",
      subScript: "្ម",
      khmerWord: "",
      englishWord: "",
      wordPronoun: "",
    },
    {
      id: 26,
      name: "យ",
      pronoun: "yô",
      subScript: "្យ",
      khmerWord: "",
      englishWord: "",
      wordPronoun: "",
    },
    {
      id: 27,
      name: "រ",
      pronoun: "rô",
      subScript: "្រ",
      khmerWord: "",
      englishWord: "",
      wordPronoun: "",
    },
    {
      id: 28,
      name: "ល",
      pronoun: "lô",
      subScript: "្ល",
      khmerWord: "",
      englishWord: "",
      wordPronoun: "",
    },
    {
      id: 29,
      name: "វ",
      pronoun: "vô",
      subScript: "្វ",
      khmerWord: "",
      englishWord: "",
      wordPronoun: "",
    },
    {
      id: 30,
      name: "ស",
      pronoun: "sâ",
      subScript: "្ស",
      khmerWord: "",
      englishWord: "",
      wordPronoun: "",
    },
    {
      id: 31,
      name: "ហ",
      pronoun: "hâ",
      subScript: "្ហ",
      khmerWord: "",
      englishWord: "",
      wordPronoun: "",
    },
    {
      id: 32,
      name: "ឡ",
      pronoun: "la",
      subScript: "្ឡ",
      khmerWord: "",
      englishWord: "",
      wordPronoun: "",
    },
    {
      id: 33,
      name: "អ",
      pronoun: "lâ",
      subScript: "្អ",
      khmerWord: "",
      englishWord: "",
      wordPronoun: "",
    },
  ];
  return (
    <div className="main-consonants">
      <div className="consonants-title">
        <h2>Khmer Consonants</h2>
      </div>
      <div className="consonants-boxes">
        {consonants.map((item) => (
          <div
            className="button-1"
            style={{ fontSize: "25px" }}
            onClick={() => setActiveConsonant(item)}
          >
            <span>
              <strong>{item.name}</strong>
            </span>

            <span>{item.pronoun}</span>
          </div>
        ))}
      </div>

      {/* Consonant Modal */}
      <div className="popup" style={popupStyle}>
        {activeConsonant && (
          <Modal
            show={Boolean(activeConsonant)}
            onClose={() => setActiveConsonant(null)}
          >
            <div className="main-popup">
              <div className="garden-content">
                <div className="picture">
                  <img
                    src={`../consonant-img/con${activeConsonant.id}.png`}
                    alt="small-img"
                    className="popup-img"
                  ></img>
                </div>
              </div>
              <div className="garden-care">
                <div className="garden-care-header">
                  <div className="care-guide">
                    <div
                      className="button-8"
                      onClick={() => setActiveComponent("write")}
                    >
                      Write
                    </div>
                  </div>
                  <div className="pic">
                    <div
                      className="button-8"
                      onClick={() => setActiveComponent("read")}
                    >
                      Read
                    </div>
                  </div>
                  <div className="pic">
                    <div
                      className="button-8"
                      onClick={() => setActiveComponent("figure")}
                    >
                      Figure
                    </div>
                  </div>
                </div>
                <div className="garden-care-content">
                  <ActiveComponent activeConsonant={activeConsonant} />
                </div>
              </div>
            </div>
          </Modal>
        )}
      </div>

      <div className="consonants-title">
        <h2>Consonants with its Subscript Form</h2>
      </div>
      <div className="consonants-boxes">
        {consonants.map((item) => (
          <button className="consonant" style={{ fontSize: "25px" }}>
            <span>
              <strong>{item.name}</strong>
            </span>
            <span>{item.subScript}</span>
            <span>{item.pronoun}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Consonants;

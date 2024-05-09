import { useState } from "react";
import "./Consonants.css";
import Modal from "../../PopUp/PopUpModal";
import Written from "../../PopUp/Small-Component/Written";
import Read from "../../PopUp/Small-Component/Read";
import Figure from "../../PopUp/Small-Component/Figure";
import Listen from "../../PopUp/Small-Component/Listen";
import { motion, AnimatePresence } from "framer-motion";
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
    case "listen":
      ActiveComponent = Listen;
      break;
    default:
      ActiveComponent = Read;
  }

  const consonants = [
    {
      id: 1,
      name: "ក",
      pronoun: "ka",
      subScript: "្ក",
      khmerWord: "ក្តាម",
      englishWord: "Crab",
      wordPronoun: "kdam",
    },
    {
      id: 2,
      name: "ខ",
      pronoun: "kha",
      subScript: "្ខ",
      khmerWord: "ខ្លា",
      englishWord: "Tiger",
      wordPronoun: "khla",
    },
    {
      id: 3,
      name: "គ",
      pronoun: "ko",
      subScript: "្គ",
      khmerWord: "គោ",
      englishWord: "Cow",
      wordPronoun: "ko",
    },
    {
      id: 4,
      name: "ឃ",
      pronoun: "kho",
      subScript: "្ឃ",
      khmerWord: "ឃ្មុំ",
      englishWord: "Bees",
      wordPronoun: "khamom",
    },
    {
      id: 5,
      name: "ង",
      pronoun: "ngo",
      subScript: "្ង",
      khmerWord: "ងៀត",
      englishWord: "Dried fish",
      wordPronoun: "ngeat",
    },
    {
      id: 6,
      name: "ច",
      pronoun: "cha",
      subScript: "្ច",
      khmerWord: "ចាប",
      englishWord: "Bird",
      wordPronoun: "Chab",
    },
    {
      id: 7,
      name: "ឆ",
      pronoun: "chha",
      subScript: "្ឆ",
      khmerWord: "ឆ្កែ",
      englishWord: "Dog",
      wordPronoun: "chakae",
    },
    {
      id: 8,
      name: "ជ",
      pronoun: "cho",
      subScript: "្ជ",
      khmerWord: "ជ្រូក",
      englishWord: "Pig",
      wordPronoun: "Chruok",
    },
    {
      id: 9,
      name: "ឈ",
      pronoun: "chho",
      subScript: "្ឈ",
      khmerWord: "ឈ្លូស",
      englishWord: "Deer",
      wordPronoun: "Chhlous",
    },
    {
      id: 10,
      name: "ញ",
      pronoun: "nho",
      subScript: "្ញ",
      khmerWord: "ញញ៉ួរ",
      englishWord: "Hammer",
      wordPronoun: "Nho Nhuor",
    },
    {
      id: 11,
      name: "ដ",
      pronoun: "da",
      subScript: "្ដ",
      khmerWord: "ដំរី",
      englishWord: "Elephant",
      wordPronoun: "Domrei",
    },
    {
      id: 12,
      name: "ឋ",
      pronoun: "tha",
      subScript: "្ឋ",
      khmerWord: "",
      englishWord: "",
      wordPronoun: "",
    },
    {
      id: 13,
      name: "ឌ",
      pronoun: "do",
      subScript: "",
      khmerWord: "ឌុកឌឺ",
      englishWord: "Worm",
      wordPronoun: "Duk Deur",
    },
    {
      id: 14,
      name: "ឍ",
      pronoun: "tho",
      subScript: "្ឍ",
      khmerWord: "ឍាមរ៉ា",
      englishWord: "Dodo",
      wordPronoun: "",
    },
    {
      id: 15,
      name: "ណ",
      pronoun: "nno",
      subScript: "្ណ",
      khmerWord: "រណា",
      englishWord: "Saw",
      wordPronoun: "Ro na",
    },
    {
      id: 16,
      name: "ត",
      pronoun: "ta",
      subScript: "្ត",
      khmerWord: "តា",
      englishWord: "Grandpa",
      wordPronoun: "Ta",
    },
    {
      id: 17,
      name: "ថ",
      pronoun: "tha",
      subScript: "្ថ",
      khmerWord: "ថូផ្កា",
      englishWord: "Vase",
      wordPronoun: "Thho Phka",
    },
    {
      id: 18,
      name: "ទ",
      pronoun: "to",
      subScript: "្ទ",
      khmerWord: "ទា",
      englishWord: "Duck",
      wordPronoun: "Tea",
    },
    {
      id: 19,
      name: "ធ",
      pronoun: "tho",
      subScript: "្ធ",
      khmerWord: "ធ្នូរ",
      englishWord: "Bow",
      wordPronoun: "Tnu",
    },
    {
      id: 20,
      name: "ន",
      pronoun: "no",
      subScript: "្ន",
      khmerWord: "នាគ",
      englishWord: "Dragon",
      wordPronoun: "Neak",
    },
    {
      id: 21,
      name: "ប",
      pronoun: "ba",
      subScript: "្ប",
      khmerWord: "បបែល",
      englishWord: "Stringray",
      wordPronoun: "Bor Bael",
    },
    {
      id: 22,
      name: "ផ",
      pronoun: "pha",
      subScript: "្ផ",
      khmerWord: "ផួយ",
      englishWord: "Blanket",
      wordPronoun: "Phuoy",
    },
    {
      id: 23,
      name: "ព",
      pronoun: "po",
      subScript: "្ព",
      khmerWord: "ពពែរ",
      englishWord: "Goat",
      wordPronoun: "Po Pae",
    },
    {
      id: 24,
      name: "ភ",
      pronoun: "pho",
      subScript: "្ភ",
      khmerWord: "ភេ",
      englishWord: "Seal",
      wordPronoun: "Phe",
    },
    {
      id: 25,
      name: "ម",
      pronoun: "mo",
      subScript: "្ម",
      khmerWord: "មាន់",
      englishWord: "Hen",
      wordPronoun: "Morn",
    },
    {
      id: 26,
      name: "យ",
      pronoun: "yo",
      subScript: "្យ",
      khmerWord: "យក្ស",
      englishWord: "Giant",
      wordPronoun: "Yeak",
    },
    {
      id: 27,
      name: "រ",
      pronoun: "ro",
      subScript: "្រ",
      khmerWord: "រុយ",
      englishWord: "Flies",
      wordPronoun: "Ruy",
    },
    {
      id: 28,
      name: "ល",
      pronoun: "lo",
      subScript: "្ល",
      khmerWord: "លា",
      englishWord: "Donkey",
      wordPronoun: "Lea",
    },
    {
      id: 29,
      name: "វ",
      pronoun: "vo",
      subScript: "្វ",
      khmerWord: "វត្ត",
      englishWord: "Temple",
      wordPronoun: "Wat",
    },
    {
      id: 30,
      name: "ស",
      pronoun: "sa",
      subScript: "្ស",
      khmerWord: "សេះ",
      englishWord: "Horse",
      wordPronoun: "Ses",
    },
    {
      id: 31,
      name: "ហ",
      pronoun: "ho",
      subScript: "្ហ",
      khmerWord: "ហង្ស",
      englishWord: "Pheonix",
      wordPronoun: "Horng",
    },
    {
      id: 32,
      name: "ឡ",
      pronoun: "lo",
      subScript: "្ឡ",
      khmerWord: "ឡាន",
      englishWord: "Car",
      wordPronoun: "Lhan",
    },
    {
      id: 33,
      name: "អ",
      pronoun: "'a",
      subScript: "្អ",
      khmerWord: "អណ្តើក",
      englishWord: "Turtle",
      wordPronoun: "Ourn Derk",
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
        {/* <AnimatePresence> */}
        {activeConsonant && (
          // <motion.div
          //   initial={{ opacity: 0, scale: 0.8 }}
          //   animate={{ opacity: 1, scale: 1 }}
          //   exit={{ opacity: 0, scale: 0.8 }}
          //   transition={{ duration: 0.3 }}
          //   style={{
          //     position: "fixed",
          //     top: "50%",
          //     left: "50%",
          //     transform: "translate(-20%, -20%)",
          //     // width: "200px",
          //   }}
          // >
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
                      onClick={() => setActiveComponent("listen")}
                    >
                      Listen
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
          // </motion.div>
        )}
        {/* </AnimatePresence> */}
      </div>

      <div className="consonants-title">
        <h2>Consonants with its Subscript Form</h2>
      </div>
      <div className="consonants-boxes">
        {consonants.map((item) => (
          <button className="button-1" style={{ fontSize: "25px" }}>
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

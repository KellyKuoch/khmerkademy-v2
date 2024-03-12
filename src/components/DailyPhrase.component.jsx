import { Outlet } from "react-router-dom";
import { useState } from "react";
import "./DailyPhrase.css";
import styles from "./DailyPhrase.css";
const DailyPhrase = () => {
  const categories = [
    {
      id: 1,
      title: "Hello",
      translation: "សួស្តី",
      pronunciation: "suo stei",
      imgaeUrl: "https://placehold.co/600x400.png",
    },
    {
      id: 2,
      title: "How are you?",
      translation: "តើអ្នកសុខសប្បាយទេ?",
      pronunciation: "tae nak sokh sabbay te?",
      imgaeUrl: "https://placehold.co/600x400.png",
    },
    {
      id: 3,
      title: "What is your name?",
      translation: "តើ​អ្នក​មាន​ឈ្មោះ​អ្វី?",
      pronunciation: "tae nak mean chhmoh avei?",
      imgaeUrl: "https://placehold.co/600x400.png",
    },
    {
      id: 4,
      title: "How old are you?",
      translation: "តើអ្នកអាយុប៉ុន្មានហើយ?",
      pronunciation: "tae nak ayou bonman hery?",
      imgaeUrl: "https://placehold.co/600x400.png",
    },
    {
      id: 5,
      title: "See you again soon.",
      translation: "ជួបគ្នាម្តងទៀតឆាប់ៗនេះ",
      pronunciation: "chuobaknea mtong tiet chab chab  nih",
      imgaeUrl: "https://placehold.co/600x400.png",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const showNext = () => {
    if (currentIndex < categories.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const showPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const today = new Date();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayIndex = today.getDay();
  const dayName = days[dayIndex];

  //   useEffect(async () => {
  // const a = await getCategoriesAndDocuments();
  // console.log(a);
  //   }, []);

  const currentCategory = categories[currentIndex];

  return (
    <>
      <header className="header">
        <h1>New Phrases for {dayName}</h1>
      </header>

      <main className="main">
        <section className="categorySection">
          <article className="category">
            <img
              src={currentCategory.imgaeUrl} // Note: Check the spelling of "imgaeUrl"
              alt={currentCategory.title}
              className="categoryImage"
            />
            <h2 className="title">{currentCategory.title}</h2>
            <p className="translation">{currentCategory.translation}</p>
            <p className="pronunciation">{currentCategory.pronunciation}</p>
          </article>
        </section>

        <nav className="Buttom">
          <button
            className="button-8"
            onClick={showPrevious}
            disabled={currentIndex === 0}
          >
            Previous
          </button>
          <button
            className="button-8"
            onClick={showNext}
            disabled={currentIndex === categories.length - 1}
          >
            Next
          </button>
        </nav>
      </main>

      <Outlet />
    </>
  );
};

export default DailyPhrase;

//Fetch data query (incorrect)

//   const [categories, setCategories] = useState([]);
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await firestore
//           .collection("your-collection-name")
//           .get();
//         const data = response.docs.map((doc) => ({
//           id: doc.id,
//           ...doc.data(),
//         }));
//         setCategories(data);
//       } catch (error) {
//         console.error("Error fetching data: ", error);
//       }
//     };

//     fetchData();
//   }, []);

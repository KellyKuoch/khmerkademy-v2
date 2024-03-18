import "./Culture.culture-topic.css";

const festivals = [
  {
    id: 1,
    image: "/culture-img/kh-new-year.jpeg",
    title: "Khmer New Year",
    category: "festival",
    article:
      "Khmer New Year, or Chol Chnam Thmey, is the most significant celebration in Cambodia, marking the end of the harvest season. Held in mid-April, it is a time of joy, feasting, and honoring ancestors.",
    link: "Read more",
  },
  {
    id: 2,
    image: "/culture-img/pchum-ben.jpeg",
    title: "Pchum Ben",
    category: "festival",
    article:
      "Pchum Ben, also known as Ancestors' Day, is a unique 15-day Buddhist festival in Cambodia, culminating in the last three days, which are public holidays.",
    link: "Read more",
  },
  {
    id: 3,
    image: "/culture-img/water-festival.jpeg",
    title: "Water Festival",
    category: "festival",
    article:
      "Bon Om Touk, the Cambodian Water Festival, marks the end of the rainy season with boat races, illuminated boat processions, and cultural performances in Phnom Penh and other parts of Cambodia.",
    link: "Read more",
  },
  {
    id: 4,
    image: "/culture-img/apsara.jpeg",
    title: "The Apsara Dance",
    category: "tradition",
    article:
      'The Apsara Dance, known in Khmer as "Robam Tep Apsara," is a classical dance deeply rooted in Cambodian history and culture. This dance, which embodies the spirit of the golden flowers,',
    link: "Read more",
  },
  {
    id: 5,
    image: "/culture-img/fish-amok.jpeg",
    title: "Khmer Fish Amok",
    category: "food",
    article:
      "One of the most iconic dishes is Fish Amok, which is considered the national dish. It's a creamy curry that typically includes fish steamed in a thick coconut milk sauce with a paste called kroeung, which is a blend of lemongrass",
    link: "Read more",
  },
  {
    id: 6,
    image: "/culture-img/khmer-noodle.jpeg",
    title: "Nom Banh Chok (Khmer Noodle)",
    category: "food",
    article:
      "Nom Banh Chok, commonly known as Khmer noodles, is another beloved dish. It's a breakfast favorite featuring fermented rice noodles topped with a fish-based green curry",
    link: "Read more",
  },
  {
    id: 7,
    image: "/culture-img/lap-khmer.jpeg",
    title: "Lap Khmer (lime-marinated beef salad)",
    category: "food",
    article:
      "Lap Khmer is a lime-marinated beef salad that's akin to ceviche. It features thinly sliced beef that's been marinated in lime juice along with shallots, garlic, and lots of chilies, giving it a refreshing yet spicy flavor profile.",
    link: "Read more",
  },
  {
    id: 8,
    image: "/culture-img/pepper-crab.jpeg",
    title: "Kampot Pepper Crab",
    category: "food",
    article:
      "Kampot Pepper Crab is a must-try, especially if you visit the coastal regions like Kep. Fresh crabs are cooked with a sauce made with garlic and the famous Kampot pepper, which adds a burst of flavor.",
    link: "Read more",
  },
  {
    id: 9,
    image: "/culture-img/somler.jpeg",
    title: "Samlar Machu (Sour Soup)",
    category: "food",
    article:
      "Sour soup is vibrant with its sour broth base and assortment of meats or seafood and vegetables like water spinach, tomatoes, and pineapple. Its sourness typically comes from tamarind or kaffir lime juice.",
    link: "Read more",
  },
];

const Culture = () => {
  return (
    <div className="articles">
      {festivals.map((item) => (
        <article>
          <div className="article-wrapper">
            <figure>
              <img src={item.image} alt="culture-img" />
            </figure>
            <div className="article-body">
              <h2>{item.title}</h2>
              <p>{item.article}</p>
              {/* <a href="#" className="read-more">
              Read more
            </a> */}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Culture;

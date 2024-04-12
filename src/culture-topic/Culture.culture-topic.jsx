import "./Culture.culture-topic.css";
import Article from "./Articles.culture-topic";
import { useState } from "react";

const festivals = [
  {
    id: 1,
    image: "/culture-img/kh-new-year.jpeg",
    title: "Khmer New Year",
    category: "festival",
    article:
      "Khmer New Year, or Chol Chnam Thmey, is the most significant celebration in Cambodia, marking the end of the harvest season. Held in mid-April, it is a time of joy, feasting, and honoring ancestors.",
    link: 'Khmer New Year, or Chol Chnam Thmey, is the most significant celebration in Cambodia, marking the end of the harvest season. Held in mid-April, it is a time of joy, feasting, and honoring ancestors. Key traditions include making offerings to ancestors, preparing and sharing special dishes like "kralan," and engaging in traditional games such as Chol Chhoung and Leak Kanseng. The festival, deeply rooted in Cambodian culture, also involves dressing in traditional garments, especially for temple visits. It embodies a blend of spirituality and community, symbolizing a fresh start and the washing away of the past year\'s misdeeds through specific rituals like cleansing Buddha statues and elders with perfumed water​.',
  },
  {
    id: 2,
    image: "/culture-img/pchum-ben.jpeg",
    title: "Pchum Ben",
    category: "festival",
    article:
      "Pchum Ben, also known as Ancestors' Day, is a unique 15-day Buddhist festival in Cambodia, culminating in the last three days, which are public holidays.",
    link: "Pchum Ben, also known as Ancestors' Day, is a unique 15-day Buddhist festival in Cambodia, culminating in the last three days, which are public holidays. It's a time when Cambodians honor their ancestors up to seven generations back. The festival involves offering food to Buddhist monks to earn merit that benefits the deceased, with specific practices like throwing rice-balls or food into empty fields to \"feed\" the spirits believed to be more active during this period. The festival reflects deep respect for ancestors and the importance of family and community ties​​​. ",
  },
  {
    id: 3,
    image: "/culture-img/water-festival.jpeg",
    title: "Water Festival",
    category: "festival",
    article:
      "Bon Om Touk, the Cambodian Water Festival, marks the end of the rainy season with boat races, illuminated boat processions, and cultural performances in Phnom Penh and other parts of Cambodia.",
    link: "Bon Om Touk, the Cambodian Water Festival, marks the end of the rainy season with boat races, illuminated boat processions, and cultural performances in Phnom Penh and other parts of Cambodia. It celebrates the reversal of the flow of the Tonle Sap River and pays homage to the water's significance in Cambodian life. The festival includes three days of racing by dragon boats from various communities, symbolizing historical and mythological themes, including military victories and spiritual legends. Each evening, the festival is capped off with spectacular fireworks and illuminated boats, making it a major event that draws crowds from across the nation.",
  },
  {
    id: 4,
    image: "/culture-img/apsara.jpeg",
    title: "The Apsara Dance",
    category: "tradition",
    article:
      'The Apsara Dance, known in Khmer as "Robam Tep Apsara," is a classical dance deeply rooted in Cambodian history and culture. This dance, which embodies the spirit of the golden flowers,',
    link: 'The Apsara Dance, known in Khmer as "Robam Tep Apsara," is a classical dance deeply rooted in Cambodian history and culture. This dance, which embodies the spirit of the golden flowers, traces its origins back to the 7th century and is inspired by the celestial dancers of Hindu mythology depicted in the carvings at Angkor Wat. The dancers, representing Apsaras, are adorned in elaborate silk costumes with golden headdresses, symbolizing purity and divine grace. \nThe movements in Apsara Dance are graceful and nuanced, each with specific meaning, contributing to a silent narrative told through dance. Accompanied by the traditional Pinpeat orchestra, the dance is not just an artistic expression but also a storytelling medium, illustrating scenes and tales from Khmer mythology and history. \nThe dance form was nearly lost during the Khmer Rouge regime but was revitalized by Princess Sisowath Kossamak in the 1940s, who trained her granddaughter, Princess Norodom Buppha Devi, an iconic figure in bringing the Apsara Dance to the international stage. Today, the Apsara Dance is a symbol of Cambodian national pride and heritage and was recognized by UNESCO as Intangible Cultural Heritage in 2003. \nYou can witness this enchanting dance during visits to Cambodia at various venues, including performances in Phnom Penh and Siem Reap, where the tradition continues to thrive as a testament to Cambodia\'s rich cultural tapestry​.',
  },
  {
    id: 5,
    image: "/culture-img/fish-amok.jpeg",
    title: "Khmer Fish Amok",
    category: "food",
    article:
      "One of the most iconic dishes is Fish Amok, which is considered the national dish. It's a creamy curry that typically includes fish steamed in a thick coconut milk sauce with a paste called kroeung, which is a blend of lemongrass",
    link: "One of the most iconic dishes is Fish Amok, which is considered the national dish. It's a creamy curry that typically includes fish steamed in a thick coconut milk sauce with a paste called kroeung, which is a blend of lemongrass, galangal, turmeric, and other spices. The dish is often steamed in banana leaves, which imparts a unique flavor.",
  },
  {
    id: 6,
    image: "/culture-img/khmer-noodle.jpeg",
    title: "Nom Banh Chok (Khmer Noodle)",
    category: "food",
    article:
      "Nom Banh Chok, commonly known as Khmer noodles, is another beloved dish. It's a breakfast favorite featuring fermented rice noodles topped with a fish-based green curry",
    link: "Nom Banh Chok, commonly known as Khmer noodles, is another beloved dish. It's a breakfast favorite featuring fermented rice noodles topped with a fish-based green curry gravy, garnished with fresh vegetables like cucumber, banana blossom, and lots of herbs like mint and basil.",
  },
  {
    id: 7,
    image: "/culture-img/lap-khmer.jpeg",
    title: "Lap Khmer (lime-marinated beef salad)",
    category: "food",
    article:
      "Lap Khmer is a lime-marinated beef salad that's akin to ceviche. It features thinly sliced beef that's been marinated in lime juice along with shallots, garlic, and lots of chilies, giving it a refreshing yet spicy flavor profile.",
    link: "Lap Khmer is a lime-marinated beef salad that's akin to ceviche. It features thinly sliced beef that's been marinated in lime juice along with shallots, garlic, and lots of chilies, giving it a refreshing yet spicy flavor profile.",
  },
  {
    id: 8,
    image: "/culture-img/pepper-crab.jpeg",
    title: "Kampot Pepper Crab",
    category: "food",
    article:
      "Kampot Pepper Crab is a must-try, especially if you visit the coastal regions like Kep. Fresh crabs are cooked with a sauce made with garlic and the famous Kampot pepper, which adds a burst of flavor.",
    link: "Kampot Pepper Crab is a must-try, especially if you visit the coastal regions like Kep. Fresh crabs are cooked with a sauce made with garlic and the famous Kampot pepper, which adds a burst of flavor.",
  },
  {
    id: 9,
    image: "/culture-img/somler.jpeg",
    title: "Samlar Machu (Sour Soup)",
    category: "food",
    article:
      "Sour soup is vibrant with its sour broth base and assortment of meats or seafood and vegetables like water spinach, tomatoes, and pineapple. Its sourness typically comes from tamarind or kaffir lime juice.",
    link: "Sour soup is vibrant with its sour broth base and assortment of meats or seafood and vegetables like water spinach, tomatoes, and pineapple. Its sourness typically comes from tamarind or kaffir lime juice.",
  },
];

const Culture = () => {
  const [activeArticle, setActiveArticle] = useState(null);

  const popupStyle = activeArticle ? { display: "block" } : { display: "none" };
  return (
    <div className="articles">
      {festivals.map((item) => (
        <article key={item.id}>
          <div className="article-wrapper">
            <figure>
              <img src={item.image} alt="culture-img" />
            </figure>
            <div className="article-body">
              <h2>{item.title}</h2>
              <p>{item.article}</p>

              <div
                className="button-8"
                onClick={() => {
                  console.log("Opening article: ", item);
                  setActiveArticle(item);
                }}
              >
                Read More
              </div>
            </div>
          </div>
        </article>
      ))}
      <div className="popup" style={popupStyle}>
        {activeArticle && (
          <Article
            item={activeArticle}
            closePopup={() => setActiveArticle(null)}
          />
        )}
      </div>
    </div>
  );
};

export default Culture;

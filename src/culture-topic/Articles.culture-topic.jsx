import "./Article.css";
const Article = ({ item, closePopup }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <span className="close" onClick={closePopup}>
          &times;
        </span>
        <img src={item.image} alt="culture-img" className="image-popup" />
        <h2>{item.title}</h2>
        <p>{item.link}</p>
      </div>
    </div>
  );
};

export default Article;


import "./Culture.culture-topic.css"
const Culture = () => {
  return (
    <div className="articles">
      <article>
        <div className="article-wrapper">
          <figure>
            <img src="/culture-img/royal-palace.jpeg" alt="royalPalace"/>
          </figure>
          <div className="article-body">
            <h2>Royal Palace</h2>
            <p>
              The Royal Palace is located in the city of Phnom Penh. The
              establishment of the Royal Palace in Phnom Penh in 1866 is a
              comparatively recent event in the history of the Khmer and
              Cambodia.{" "}
            </p>
            {/* <a href="#" className="read-more">
              Read more
            </a> */}
          </div>
        </div>
      </article>
      <article>
        <div className="article-wrapper">
          <figure>
            <img src="/culture-img/Angkor-Wat.jpg" alt="angkor"/>
          </figure>
          <div className="article-body">
            <h2>Angkor Wat</h2>
            <p>
              Angkor Wat, located in Phnom Penh, Cambodia, is one of the largest
              and most beautiful archaeological sites in the world. It is a
              UNESCO World Heritage Site.
            </p>
            {/* <a href="#" className="read-more">
              Read more
            </a> */}
          </div>
        </div>
      </article>
    </div>
  );
};

export default Culture;

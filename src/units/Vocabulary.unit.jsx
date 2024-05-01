import { useState } from "react";
import "./Vocabulary.css";
const Vocabulary = ({ data, onSearchChange, searchTerm }) => {
  //Search Function - Filter out words

  return (
    <div className="vocab-main">
      <div className="english-main">
        <h2>Khmer Phrases List</h2>
        <div className="search-box">
          <input
            type="text"
            placeholder="Search..."
            className="input"
            value={searchTerm}
            onChange={onSearchChange}
          />
        </div>
        <div className="vocab-header">
          <div className="header-item">English</div>
          <div className="header-item">Khmer</div>
          <div className="header-item">Phonetic</div>
        </div>
        {data.greeting.map((word) => (
          <div key={word.id} className="each-english">
            <div className="vocab-item">
              <p>{word.english}</p>
            </div>
            <div className="vocab-item">
              <p>{word.word}</p>
            </div>
            <div className="vocab-item">
              <p>{word.phonetic}</p>
            </div>
          </div>
        ))}
        {data.family.map((word) => (
          <div key={word.id} className="each-english">
            <div className="vocab-item">
              <p>{word.english}</p>
            </div>
            <div className="vocab-item">
              <p>{word.word}</p>
            </div>
            <div className="vocab-item">
              <p>{word.phonetic}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vocabulary;

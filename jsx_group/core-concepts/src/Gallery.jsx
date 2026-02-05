import { useState } from "react";
import { sculptureList } from "./data/data";

export const Gallery = () => {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  const handlePreviousClick = () => {
    setIndex((prevIndex) => prevIndex - 1);
  };

  const handleNextClick = () => {
    setIndex((prevIndex) => prevIndex + 1);
  };

  const handleShowMoreClick = () => {
    setShowMore(!showMore);
  };

  let sculpture = sculptureList[index];

  return (
    <>
      <button
        onClick={handlePreviousClick}
        disabled={index === 0 ? true : false}
      >
        Previous
      </button>
      <button
        onClick={handleNextClick}
        disabled={index === sculptureList.length - 1 ? true : false}
      >
        Next
      </button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleShowMoreClick}>
        {showMore ? "Hide" : "Show"} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <div>
        <img src={sculpture.url} alt={sculpture.alt} />
      </div>
    </>
  );
};

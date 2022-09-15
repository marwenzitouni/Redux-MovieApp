import React, { useState } from "react";
import StarRatings from "react-star-ratings";

const Filtre = ({ filtreName, filtreRating }) => {
  const [rating, setRating] = useState(0);
  const changeRating = (newRating, name) => {
    setRating(newRating);
    filtreRating(newRating);
  };
  return (
    <div>
      <input
        placeholder="Search by Name"
        onChange={(e) => filtreName(e.target.value)}
      />

      <StarRatings
        starHoverColor="yellow"
        rating={rating}
        starRatedColor="yellow"
        changeRating={changeRating}
        numberOfStars={5}
        name="rating"
      />
    </div>
  );
};

export default Filtre;

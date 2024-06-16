import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

import { SelectStartdiv } from "./Styled";

const SelectStar = ({ noOfStart }) => {
  const [hover, setHover] = useState(0);
  const [rating, setRating] = useState(0);

  const handleClicked = (currentIndex) => {
    if (rating === currentIndex) {
      setRating(0);
    } else setRating(currentIndex);
  };
  const handleMouseEnter = (currentIndex) => {
    setHover(currentIndex);
  };
  const handleMouseLeave = () => {
    setHover(rating);
  };
  return (
    <SelectStartdiv>
      {[...Array(noOfStart)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            onClick={() => handleClicked(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
            className={index <= (hover || rating) ? "active" : "inactive"}
          />
        );
      })}
    </SelectStartdiv>
  );
};

export default SelectStar;

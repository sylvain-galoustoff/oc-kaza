import { useState } from "react";
import PropTypes from "prop-types";
import arrowPrevious from "../../../../assets/arrow-previous.png";
import arrowNext from "../../../../assets/arrow-next.png";

function Slider({ pictures }) {
  const [currentPicture, setCurrentPicture] = useState(0);

  const changeSlide = (direction) => {
    if (direction === "previous" && currentPicture === 0) {
      setCurrentPicture(pictures.length - 1);
    } else if (direction === "previous") {
      setCurrentPicture(currentPicture - 1);
    }

    if (direction === "next" && currentPicture === pictures.length - 1) {
      setCurrentPicture(0);
    } else if (direction === "next") {
      setCurrentPicture(currentPicture + 1);
    }
  };

  const previousIcon = (
    <div
      className="slider-arrow"
      id="arrow-previous"
      onClick={() => changeSlide("previous")}
    >
      <img src={arrowPrevious} alt="Flèche pour voir l'image précédente" />
    </div>
  );

  const nextIcon = (
    <div
      className="slider-arrow"
      id="arrow-next"
      onClick={() => changeSlide("next")}
    >
      <img src={arrowNext} alt="Flèche pour voir l'image précédente" />
    </div>
  );

  const slideCount = (
    <div id="slide-count">
      {currentPicture + 1} / {pictures.length}
    </div>
  );

  return (
    <div id="slider">
      {pictures.length > 1 && previousIcon}

      <div className="slide">
        <img src={pictures[currentPicture]} />
        {pictures.length > 1 && slideCount}
      </div>

      {pictures.length > 1 && nextIcon}
    </div>
  );
}

Slider.propTypes = {
  pictures: PropTypes.array,
};

export default Slider;

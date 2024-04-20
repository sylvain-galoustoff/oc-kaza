import PropTypes from "prop-types";
import star from "../../../assets/star-active.png";
import emptyStar from "../../../assets/star-inactive.png";

function Rating({ rate }) {
  let fullStars = [];
  for (let i = 1; i <= rate; i++) {
    fullStars.push(<img key={i} src={star} />);
  }

  let emptyStars = [];
  let emptyRate = 5 - rate;

  for (let i = 1; i <= emptyRate; i++) {
    emptyStars.push(<img key={i} src={emptyStar} />);
  }

  return (
    <div id="rating">
      {fullStars}
      {emptyStars}
    </div>
  );
}

Rating.propTypes = {
  rate: PropTypes.string,
};

export default Rating;

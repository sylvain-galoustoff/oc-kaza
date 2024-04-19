import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function LogementCard({ data }) {
  return (
    <Link to={`/logement/${data.id}`} className="card">
      <img src={data.cover} alt={data.title} />
      <div className="layer">
        <h2 className="card-title">{data.title}</h2>
      </div>
    </Link>
  );
}

LogementCard.propTypes = {
  data: PropTypes.object,
};

export default LogementCard;

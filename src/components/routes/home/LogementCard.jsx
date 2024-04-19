import PropTypes from "prop-types";

function LogementCard({ data }) {
  return (
    <div className="card">
      <img src={data.cover} alt={data.title} />
      <div className="layer">
        <h2 className="card-title">{data.title}</h2>
      </div>
    </div>
  );
}

LogementCard.propTypes = {
  data: PropTypes.object,
};

export default LogementCard;

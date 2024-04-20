import PropTypes from "prop-types";

function Tag({ label }) {
  return <span className="tag">{label}</span>;
}

Tag.propTypes = {
  label: PropTypes.string,
};

export default Tag;

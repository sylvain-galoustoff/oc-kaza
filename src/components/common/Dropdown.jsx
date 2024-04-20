import PropTypes from "prop-types";
import chevron from "../../assets/chevron.png";
import { useState } from "react";

function Dropdown({ label, data }) {
  const [isClosed, setIsClosed] = useState(true);

  let formatedData = data;
  if (Array.isArray(data)) {
    formatedData = data.map((item) => <p key={item}>{item}</p>);
  }

  return (
    <div className={`dropdown ${isClosed ? "close" : "open"}`}>
      <div className="dropdown-header" onClick={() => setIsClosed(!isClosed)}>
        <span>{label}</span>
        <img src={chevron} alt="Icone chevron" className="chevron" />
      </div>
      <div className="dropdown-body">{formatedData}</div>
    </div>
  );
}

Dropdown.propTypes = {
  label: PropTypes.string,
  data: PropTypes.any,
};

export default Dropdown;

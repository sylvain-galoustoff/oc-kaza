import PropTypes from "prop-types";

function HostCard({ host }) {
  const firstname = host.name.split(" ")[0];
  const lastname = host.name.split(" ")[1];

  return (
    <div id="host-card">
      <div className="name">
        <p className="firstname">{firstname}</p>
        <p className="lastname">{lastname}</p>
      </div>
      <div className="avatar">
        <img
          src={host.picture}
          alt={`photo de ${host.name}`}
          className="responsive"
        />
      </div>
    </div>
  );
}

HostCard.propTypes = {
  host: PropTypes.object,
};

export default HostCard;

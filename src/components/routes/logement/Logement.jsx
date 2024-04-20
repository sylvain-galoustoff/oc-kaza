import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../../../data/data";
import Tag from "./Tag";
import Rating from "./Rating";
import HostCard from "./HostCard";
import Dropdown from "../../common/Dropdown";

function Logement() {
  const [logement, setLogement] = useState();
  const { id } = useParams();

  useEffect(() => {
    const currentLogement = data.filter((logement) => logement.id === id);
    if (currentLogement.length === 0) {
      console.log("Aucun logement");
    } else if (currentLogement.legth > 1) {
      console.error(`Plusieurs logements ont le même ID ${id}`);
    } else {
      setLogement(currentLogement[0]);
    }
  }, [id]);

  let renderTags;
  if (logement) {
    renderTags = logement.tags.map((tag) => <Tag key={tag} label={tag} />);
  }

  if (logement) {
    return (
      <div className="page container" id="logement">
        <div id="slider">
          <img src={logement.pictures[0]} className="responsive" />
        </div>

        <div id="logement-header">
          <div id="logement-data">
            <h1 className="title">{logement.title}</h1>
            <p className="location">{logement.location}</p>
            <div id="tags">{renderTags}</div>
          </div>

          <div id="host-data">
            <Rating rate={logement.rating} />
            <HostCard host={logement.host} />
          </div>
        </div>

        <div id="logement-body">
          <Dropdown label="description" data={logement.description} />
          <Dropdown label="équipements" data={logement.equipments} />
        </div>
      </div>
    );
  }
}

export default Logement;

import Jumbo from "../../common/Jumbo";
import LogementCard from "./LogementCard";
import data from "../../../data/data";

function Home() {
  const renderCards = data.map((item) => (
    <LogementCard key={item.id} data={item} />
  ));

  return (
    <div className="page container" id="home">
      <Jumbo />
      <div id="logements-list">{renderCards}</div>
    </div>
  );
}

export default Home;

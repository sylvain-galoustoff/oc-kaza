import jumboImg from "../../assets/jumbo/home.jpg";

function Jumbo() {
  return (
    <div id="jumbo" className="container">
      <img className="responsive" src={jumboImg} alt="paysage d'illustration" />
      <div className="layer">
        <h1 id="slogan">Chez vous, partout et ailleurs</h1>
      </div>
    </div>
  );
}

export default Jumbo;

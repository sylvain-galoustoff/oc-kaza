import homeImg from "../../assets/jumbo/home.jpg";
import aboutImg from "../../assets/jumbo/a-propos.jpg";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function Jumbo() {
  const location = useLocation();
  const [imgSrc, setImgSrc] = useState();

  useEffect(() => {
    if (location.pathname === "/a-propos") {
      setImgSrc(aboutImg);
    } else {
      setImgSrc(homeImg);
    }
  }, [setImgSrc, location]);

  return (
    <div id="jumbo" className="container">
      <img className="responsive" src={imgSrc} alt="paysage d'illustration" />
      <div className="layer">
        <h1 id="slogan">Chez vous, partout et ailleurs</h1>
      </div>
    </div>
  );
}

export default Jumbo;

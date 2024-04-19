import logo from "../../assets/logo-black.png";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div id="footer-logo">
          <img src={logo} alt="Logo casa blanc" className="responsive" />
        </div>
        <p id="legal">© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;

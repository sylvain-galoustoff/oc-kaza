import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="page container" id="not-found">
      <p id="big-404">404</p>
      <p id="error-message">
        Oups! La page que vous demandez n&apos;existe pas.
      </p>
      <Link to="/">Retourner sur la page d&apos;accueil</Link>
    </div>
  );
}

export default NotFound;

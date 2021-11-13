import { Link } from "react-router-dom";
import "./Header.scss";

export const Header = () => {
  return (
    <div className="page-header">
      <header>
        <h1 className="header-title">Rick and Morty</h1>
        <Link className="link header-link" to="/characters">
          Characters
        </Link>
        <Link className="link header-link" to="/episodes">
          Episodes
        </Link>
        <Link className="link header-link" to="/locations">
          Locations
        </Link>
        <Link className="link header-link" to="/my-watch-list">
          My watch list
        </Link>
      </header>
    </div>
  );
};

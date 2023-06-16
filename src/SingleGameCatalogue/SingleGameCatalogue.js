import { Link } from "react-router-dom";

export const SingleGameCatalogue = ({ games }) => {
  return (
    <div className="allGames">
      <div className="allGames-info">
        <img src={games.imageUrl} />
        <h6>{games.category}</h6>
        <h2>{games.title}</h2>
        <Link to={`/catalogue/${games._id}`} className="details-button">
          Details
        </Link>
      </div>
    </div>
  );
};

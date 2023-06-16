export const SingleGame = ({games}) => {
  return (
    <div className="game">
      <div className="image-wrap">
        <img src={games.imageUrl} />
      </div>
      <h3>{games.title}</h3>
      <div className="rating">
        <span>☆</span>
        <span>☆</span>
        <span>☆</span>
        <span>☆</span>
        <span>☆</span>
      </div>
      <div className="data-buttons">
        <a href="#" className="btn details-btn">
          Details
        </a>
      </div>
    </div>
  );
};

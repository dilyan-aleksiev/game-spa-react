import { useParams } from "react-router-dom";

export const Details = ({games}) => {
  const params = useParams();
  // console.log(params.gamesId);
  const currentGame = games.find(x => x._id == params.gamesId)
  return (
    <div>
      {" "}
      <section id="game-details">
        <h1>Game Details</h1>
        <div className="info-section">
          <div className="game-header">
            <img className="game-img" src={currentGame.imageUrl} />
            <h1>Bright</h1>
            <span className="levels">{currentGame.maxLevel}</span>
            <p className="type">{currentGame.category}</p>
          </div>
          <p className="text">
           {currentGame.summary}
          </p>
          {/* Bonus ( for Guests and Users ) */}
          <div className="details-comments">
            <h2>Comments:</h2>
            <ul>
              {/* list all comments for current game (If any) */}
              <li className="comment">
                <p>Content: I rate this one quite highly.</p>
              </li>
              <li className="comment">
                <p>Content: The best game.</p>
              </li>
            </ul>
            {/* Display paragraph: If there are no games in the database */}
            <p className="no-comment">No comments.</p>
          </div>
          {/* Edit/Delete buttons ( Only for creator of this game )  */}
          <div className="buttons">
            <a href="#" className="button">
              Edit
            </a>
            <a href="#" className="button">
              Delete
            </a>
          </div>
        </div>
        {/* Bonus */}
        {/* Add Comment ( Only for logged-in users, which is not creators of the current game ) */}
        <article className="create-comment">
          <label>Add new comment:</label>
          <form className="form">
            <textarea
              name="comment"
              placeholder="Comment......"
              defaultValue={""}
            />
            <input
              className="btn submit"
              type="submit"
              defaultValue="Add Comment"
            />
          </form>
        </article>
      </section>
    </div>
  );
};

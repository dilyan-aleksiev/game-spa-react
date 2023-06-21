import { useState } from "react";
import { useParams } from "react-router-dom";

export const Details = ({ games }) => {
  const params = useParams();
  // console.log(params.gamesId);
  const currentGame = games.find((x) => x._id == params.gamesId);
  const [username, setUsername] = useState({ username: "" });
  const [comment, setComment] = useState({ comment: "" });
  // console.log(`username : ${username}`);
  // console.log(`Comment : ${comment}`);

  const addCommentHandler = (e) => {
    e.preventDefault();
    // (state) => {

    // };

    const userNameCommentResult = `${username.username} : ${comment.comment}`;

    // console.log(username);
    // console.log(comment);
    // console.log(userNameCommentResult);
  };

  const onChangeUsername = (e) => {
    setUsername((state) => ({
      ...state,
      username: e.target.value,
    }));
  };

  const onChangeComment = (e) => {
    setComment((state) => ({
      ...state,
      comment: e.target.value,
    }));
  };

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
          <p className="text">{currentGame.summary}</p>
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
                {/* <p>{username}: {comment}.</p> */}
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
          <form className="form" onSubmit={addCommentHandler}>
            <label htmlFor="name">Name: </label>
            <input
              id="name"
              name="username"
              type="text"
              placeholder="Ivan"
              onChange={onChangeUsername}
              value={username.username}
            />

            <textarea
              name="comment"
              placeholder="Comment......"
              // onChange={(e)=>{
              //   setComment(e.target.value)
              // }}
              onChange={onChangeComment}
              value={comment.comment}
            />
            <input className="btn submit" type="submit" value="Add Comment" />
          </form>
        </article>
      </section>
    </div>
  );
};

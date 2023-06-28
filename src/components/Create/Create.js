import { useState } from "react"
export const Create = ({addGame}) => {
  // const [title, setTitle] = useState({ title: "" });
  // const [category, setCategory] = useState({ category: "" });
  // const [level, setLevel] = useState({ level: "" });
  // const [img, setImg] = useState({ img: "" });
  // const [summary, setSummary] = useState({ summary: "" });
  // console.log(title, category, level, img, summary);

  const [a, setA] = useState({
    title: "",
    category: "",
    maxLevel: "",
    imageUrl: "",
    summary: "",
    _id: Math.random().toString()
  });


// console.log(a);


  const addGameButton = (e) => {
    e.preventDefault();
    // console.log(
    //   "title",
    //   title,
    //   "category",
    //   category,
    //   "level",
    //   level,
    //   "img",
    //   img,
    //   "summary",
    //   summary
      
    // );
    console.log(a);
    console.log("ala bala");

   addGame(a)

  };


  return (
    <div>
      {" "}
      <section id="create-page" className="auth">
        <form id="create" onSubmit={addGameButton}>
          <div className="container">
            <h1>Create Game</h1>
            <label htmlFor="leg-title">Legendary title:</label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Enter game title..."
              // onChange={(e) => {
              //   setTitle((state) => ({
              //     ...state,
              //     title: e.target.value,
              //   }));
              // }}
              onChange={(e) => {
                setA((state) => ({
                  ...state,
                title: e.target.value ,
                }));
              }}
              
            />
            <label htmlFor="category">Category:</label>
            <input
              type="text"
              id="category"
              name="category"
              placeholder="Enter game category..."
              onChange={(e) =>
                setA((state) => ({
                  ...state,
                   category: e.target.value ,
                }))
              }
              // onChange={(e) =>
              //   setCategory((state) => ({
              //     ...state,
              //     category: e.target.value,
              //   }))
              // }
            />
            <label htmlFor="levels">MaxLevel:</label>
            <input
              type="number"
              id="maxLevel"
              name="maxLevel"
              min={1}
              placeholder={1}
              // onChange={(e) =>
              //   setLevel((state) => ({
              //     ...state,
              //     level: e.target.value,
              //   }))
              // }
              onChange={(e) =>
                setA((state) => ({
                  ...state,
                 maxLevel: e.target.value ,
                }))
              }
            />
            <label htmlFor="game-img">Image:</label>
            <input
              type="text"
              id="imageUrl"
              name="imageUrl"
              placeholder="Upload a photo..."
              // onChange={(e) =>
              //   setImg((state) => ({
              //     ...state,
              //     img: e.target.value,
              //   }))
              // }
              onChange={(e) =>
                setA((state) => ({
                  ...state,
                 imageUrl: e.target.value,
                }))
              }
            />
            <label htmlFor="summary">Summary:</label>
            <textarea
              name="summary"
              id="summary"
              defaultValue={""}
              // onChange={(e) =>
              //   setSummary((state) => ({
              //     ...state,
              //     summary: e.target.value,
              //   }))
              // }
              onChange={(e) =>
                setA((state) => ({
                  ...state,
                   summary: e.target.value ,
                }))
              }
            />
            <input
              className="btn submit"
              type="submit"
              defaultValue="Create Game"
            />
          </div>
        </form>
      </section>
      {/* Edit Page ( Only for the creator )*/}
      <section id="edit-page" className="auth">
        <form id="edit">
          <div className="container">
            <h1>Edit Game</h1>
            <label htmlFor="leg-title">Legendary title:</label>
            <input type="text" id="title" name="title" defaultValue="" />
            <label htmlFor="category">Category:</label>
            <input type="text" id="category" name="category" defaultValue="" />
            <label htmlFor="levels">MaxLevel:</label>
            <input
              type="number"
              id="maxLevel"
              name="maxLevel"
              min={1}
              defaultValue=""
            />
            <label htmlFor="game-img">Image:</label>
            <input type="text" id="imageUrl" name="imageUrl" defaultValue="" />
            <label htmlFor="summary">Summary:</label>
            <textarea name="summary" id="summary" defaultValue={""} />
            <input
              className="btn submit"
              type="submit"
              defaultValue="Edit Game"
            />
          </div>
        </form>
      </section>
    </div>
  );
};

import "./App.css";
import { Home } from "./components/Home/Home";
import { Header } from "./components/Header/Header";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { Create } from "./components/Create/Create";
import { Catalogue } from "./components/Catalogue/Catalogue";
import { Details } from "./components/Details/Details";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3030/data/games`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setGames(data);
      });
  }, []);

  console.log(games);

  return (
    <div id="box">
      <Header />
      {/* Main Content */}
      <main id="main-content"></main>
      {/*Home Page*/}
      {/* <Home /> */}
      {/* Login Page ( Only for Guest users ) */}
      {/* <Login /> */}
      {/* Register Page ( Only for Guest users ) */}
      {/* <Register /> */}
      {/* Create Page ( Only for logged-in users ) */}
      {/* <Create /> */}

      {/* <Details /> */}

      {/* <Catalogue /> */}

      <Routes>
        <Route path="/" element={<Home games={games} />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/create game" element={<Create />}></Route>
        <Route path="/details" element={<Details />}></Route>
        <Route path="/catalogue" element={<Catalogue />}></Route>
        <Route path="*" element={<h3>not found</h3>}></Route>
      </Routes>
    </div>
  );
}

export default App;

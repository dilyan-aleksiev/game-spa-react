import "./App.css";
import { Home } from "./components/Home/Home";
import { Header } from "./components/Header/Header";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { Create } from "./components/Create/Create";
import { Catalogue } from "./components/Catalogue/Catalogue";
import { Details } from "./components/Details/Details";

function App() {
  return (
    <div id="box">
      <Header />
      {/* Main Content */}
      <main id="main-content"></main>
      {/*Home Page*/}
      <Home />
      {/* Login Page ( Only for Guest users ) */}
      {/* <Login /> */}
      {/* Register Page ( Only for Guest users ) */}
      {/* <Register /> */}
      {/* Create Page ( Only for logged-in users ) */}
      {/* <Create /> */}

      {/* <Details /> */}
   
      {/* <Catalogue /> */}
    </div>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Header from "./components/Home/Shared/Header/Header";
import NavBar from "./components/Home/Shared/NavBar/NavBar";
import Error from "./components/Error/Error";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="*" element={<Error></Error>}></Route>
      </Routes>
    </div>
  );
}

export default App;

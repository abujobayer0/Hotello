import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Header from "./components/Home/Shared/Header/Header";
import NavBar from "./components/Home/Shared/NavBar/NavBar";
import Error from "./components/Error/Error";
import ScrollProgress from "./components/Home/Shared/ScrollProgress/ScrollProgress";
import Rooms from "./components/Rooms/Rooms";
import Services from "./components/Services/Services";
import News from "./components/News/News";
import Gallery from "./components/Gallery/Gallery";
function App() {
  return (
    <div className="App">
      <ScrollProgress></ScrollProgress>

      <Header></Header>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/rooms" element={<Rooms></Rooms>}></Route>
        <Route path="/services" element={<Services></Services>}></Route>
        <Route path="/news" element={<News></News>}></Route>
        <Route path="/gallery" element={<Gallery></Gallery>}></Route>
        <Route path="*" element={<Error></Error>}></Route>
      </Routes>
    </div>
  );
}

export default App;

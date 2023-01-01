import { Route, Routes } from "react-router-dom";
import "./App.css";
import "react-date-range/dist/theme/default.css"; // theme css file
import "react-date-range/dist/styles.css"; // main css file
import Home from "./components/Home/Home";
import Header from "./components/Home/Shared/Header/Header";
import NavBar from "./components/Home/Shared/NavBar/NavBar";
import Error from "./components/Error/Error";
import ScrollProgress from "./components/Home/Shared/ScrollProgress/ScrollProgress";
import Rooms from "./components/Rooms/Rooms";
import Services from "./components/Services/Services";
import News from "./components/News/News";
import Gallery from "./components/Gallery/Gallery";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import RoomDetail from "./components/Rooms/RoomDetail";
import NewsDetail from "./components/News/NewsDetail";
import ServicesDetail from "./components/Services/ServicesDetail";
import CheckOutPage from "./components/CheckOutPage/CheckOutPage";
import Login from "./components/Login/Login";
import ReqireAuth from "./components/Login/ReqireAuth";
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
        <Route
          path="/rooms/:roomsId"
          element={
            <ReqireAuth>
              <RoomDetail></RoomDetail>
            </ReqireAuth>
          }
        ></Route>
        <Route
          path="/news/:newsId"
          element={
            <ReqireAuth>
              <NewsDetail></NewsDetail>
            </ReqireAuth>
          }
        ></Route>
        <Route path="/services" element={<Services></Services>}></Route>
        <Route
          path="/services/:serviceId"
          element={
            <ReqireAuth>
              <ServicesDetail></ServicesDetail>
            </ReqireAuth>
          }
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/news" element={<News></News>}></Route>
        <Route
          path="/checkout/:checkoutId"
          element={
            <ReqireAuth>
              <CheckOutPage></CheckOutPage>
            </ReqireAuth>
          }
        ></Route>
        <Route path="/gallery" element={<Gallery></Gallery>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="*" element={<Error></Error>}></Route>
      </Routes>
    </div>
  );
}

export default App;

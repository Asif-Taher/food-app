import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./Footer/Footer";
import Menu from "./pages/Menu/Menu";
import ContactUs from "./pages/ContactUs/ContactUs";
import MobileApp from "./pages/MobileApp/MobileApp";
import LoginSignUp from "./pages/LoginSignUp/LoginSignUp";
import Login from './components/Login/Login';


function App() {
  return (
    <>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
          <Route path="/menu" element={<Menu></Menu>}></Route>
          <Route path="/order" element={<PlaceOrder></PlaceOrder>}></Route>
          <Route path="/mobile" element={<MobileApp></MobileApp>}></Route>
          <Route path="/contact" element={<ContactUs></ContactUs>}></Route>
          <Route path="/SignIn" element={<LoginSignUp></LoginSignUp>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
        </Routes>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;

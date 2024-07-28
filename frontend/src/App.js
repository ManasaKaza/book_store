import { Navbar } from "./Components/Navbar";
import { Routes, Route } from 'react-router-dom';
import Cart from "./Components/Cart";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Home from "./Components/Home";
import Contact from "./Components/Contact"
import "./App.css";
import Sell from "./Components/Sell";
import Login from "./auth/Login";
import SignUp from "./auth/SignUp";
import LogOut from "./auth/LogOut";
import PageNotFound from "./Components/PageNotFound";


function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='home' element={<Home />}></Route>
        <Route path='about' element={<About />}></Route>
        <Route path='contact' element={<Contact />}></Route>
        <Route path='cart' element={<Cart />}></Route>
        <Route path='sell' element={<Sell/>}></Route>
        <Route path='login' element={<Login/>}></Route>
        <Route path='signup' element={<SignUp/>}></Route>
        <Route path='logout' element={<LogOut/>}></Route>
        <Route path='unauthorized' element={<PageNotFound/>}></Route>
      </Routes>
      <Footer />
      {/* {
        warning && <div className='warning'>Item is already added to your cart</div>
      } */}
    </>
  );
}

export default App;

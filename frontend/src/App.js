import { Navbar } from "./Components/Navbar";
import { Routes, Route } from 'react-router-dom';
import Register from "./Components/Register";
import Cart from "./Components/Cart";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Home from "./Components/Home";
import Contact from "./Components/Contact"
import "./App.css";


function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='home' element={<Home />}></Route>
        <Route path='about' element={<About />}></Route>
        <Route path='contact' element={<Contact />}></Route>
        <Route path='register' element={<Register />}></Route>
        <Route path='cart' element={<Cart />}></Route>
      </Routes>
      <Footer />
      {/* {
        warning && <div className='warning'>Item is already added to your cart</div>
      } */}
    </>
  );
}

export default App;

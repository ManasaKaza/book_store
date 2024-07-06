import About from "./Components/About";
import Home from "./Components/Home";
import { Navbar } from "./Components/Navbar";
import { Routes, Route } from 'react-router-dom';
import Register from "./Components/Register";
import Cart from "./Components/Cart";
import { useState } from 'react';
import Footer from "./Components/Footer";
import "./App.css";
import Contact from "./Components/Contact"

function App() {
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);

  const handleClick = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item._id === product._id)
        isPresent = true;
    });
    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return;
    }
    setCart([...cart, { ...item, quantity: 1 }]);
  };

  const handleChange = (item, d) => {
    const tempArr = cart.map((data) => {
      if (data._id === item._id) {
        return { ...data, quantity: Math.max(1, data.quantity + d) };
      }
      return data;
    });
    setCart(tempArr);
  };

  return (
    <>
      <Navbar size={cart.length} />
      <Routes>
        <Route path='home' element={<Home handleClick={handleClick} />}></Route>
        <Route path='about' element={<About />}></Route>
        <Route path='contact' element={<Contact />}></Route>
        <Route path='register' element={<Register />}></Route>
        <Route path='cart' element={<Cart cart={cart} setCart={setCart} handleChange={handleChange} />}></Route>
      </Routes>
      <Footer />
      {
        warning && <div className='warning'>Item is already added to your cart</div>
      }
    </>
  );
}

export default App;

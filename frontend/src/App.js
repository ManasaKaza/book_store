import About from "./Components/About";
import Home from "./Components/Home";
import { Navbar } from "./Components/Navbar";
import {Routes,Route} from 'react-router-dom';
import Register from "./Components/Register";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='about' element={<About/>}></Route>
    <Route path='contactus' element={<Home/>}></Route> 
    <Route path='register' element={<Register/>}></Route>    
    </Routes>
    <Footer />
    </>
  );
}

export default App;

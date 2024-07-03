import About from "./Components/About";
import Home from "./Components/Home";
import { Navbar } from "./Components/Navbar";
import {Routes,Route} from 'react-router-dom';
import Register from "./Components/Register";

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
    </>
  );
}

export default App;

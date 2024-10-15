import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Cart from './pages/Cart'
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/cart" element={<Cart></Cart>} />
      </Routes>
    </div>
  )
};

export default App;

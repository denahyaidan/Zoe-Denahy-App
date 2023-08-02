import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Paintings from "./Paintings"
import Navbar from "./Navbar";
import About from "./About";
import Contact from "./Contact";

function App() {
  return (
    <div>
      <Navbar/>
      <div className="navbar-block"></div>
      <Routes>
        <Route path="/" element={<Paintings />} />
        <Route path="/paintings" element={<Paintings />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />


      </Routes>
    </div>
  );
}

export default App;

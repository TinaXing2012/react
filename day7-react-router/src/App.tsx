import { Link, Navigate, NavLink, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NoMatch from "./pages/NoMatch";

import './App.css';

export default function App() {
  return (
    <div>
      <nav>
        <NavLink
          to={"/home"}
          style={{ padding: '5px' }}
        >Home</NavLink>
        <NavLink to={"/about"} style={{ padding: '5px' }} end>About</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Navigate to={"/home"} />}></Route>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NoMatch />}></Route>
      </Routes>
    </div>
  )
}

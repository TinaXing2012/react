import { Link, Navigate, NavLink, Route, Routes, useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NoMatch from "./pages/NoMatch";

import './App.css';
import routes from "./routes";

export default function App() {
  const element = useRoutes(routes);

  return (
    <div>
      <nav>
        <NavLink
          to={"/"}
          style={{ padding: '5px' }}
          className={({ isActive, isPending, isTransitioning }) => {
            return [
              isActive ? 'highlighted' : '',
              isPending ? 'pending' : '',
              isTransitioning ? 'transitioning' : ''].join(' ');
          }}
          end>Home</NavLink>
        <NavLink to={"/about"} style={{ padding: '5px' }} end>About</NavLink>
      </nav>
      {element}
    </div>
  )
}

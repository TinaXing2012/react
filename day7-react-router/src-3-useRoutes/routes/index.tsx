import { Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import NoMatch from "../pages/NoMatch";

const routes = [
    {path: "/", element: <Navigate to={"/home"} />},
    {path: "/home", element: <Home />},
    {path: "/about", element: <About />},
    {path: "*", element: <NoMatch />}
];

export default routes;
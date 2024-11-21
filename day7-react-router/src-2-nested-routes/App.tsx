import { Link, Navigate, NavLink, Route, Routes } from "react-router-dom";

import './App.css';
import Posts from "./pages/Posts";
import PostList from "./pages/PostList";
import PostDetails from "./pages/PostDetails";

export default function App() {
  return (
    <div>
      <nav>
        <NavLink to={"/posts"}>Posts</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Navigate to={"/posts"} />} />
        <Route path="/posts" element={<Posts />}>
          <Route index element={<PostList />}></Route>
          <Route path=":slug" element={<PostDetails />}></Route>
        </Route>
      </Routes>
    </div>
  )
}

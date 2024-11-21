import React, { useState } from 'react'
import Login from './pages/Login';
import { User } from './user.types';
import Welcome from './pages/Welcome';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import ProtectedRoute from './routes/ProtectedRoute';


export default function App() {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  const logout = () => {
    setUser(null);
    navigate('/login');
  }
  return (
    <div>
      <div>
        {user && <Link to="/welcome">Welcome</Link>}
        {!user && <Link to={"/login"}>Login</Link>}
        {user && <button onClick={logout}>Logout</button>}
      </div>

      <Routes>
        <Route path='/welcome' element={<ProtectedRoute user={user} ><Welcome/></ProtectedRoute>} />
        <Route path='/login' element={<Login onLogin={setUser} />} />
      </Routes>
    </div>
  )
}

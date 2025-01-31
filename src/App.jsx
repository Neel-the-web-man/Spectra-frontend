import "./App.css";

import Navbar from "./components/navbar.jsx";
import { Route, Routes } from "react-router";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Team from "./components/Team.jsx";
import Login from "./components/Login.jsx";
import Signin from "./components/Signin.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import { useAuth } from "./contexts/authContext.jsx";
import { Navigate } from "react-router";
import Movinfo from "./components/movinfo.jsx";

// export const ws = new WebSocket("ws://localhost:8000");

function App() {
  const { isAuthenticated } = useAuth();
  return (
    <>
      <Navbar />
      <Routes>
        {isAuthenticated
          ? (
            <Route
              path={"/Login"}
              element={<Navigate to="/" replace />}
            />
          )
          : <Route path={"/Login"} element={<Login />} />}
        {isAuthenticated
          ? (
            <Route
              path={"/SignUp"}
              element={<Navigate to="/" replace />}
            />
          )
          : <Route path={"/SignUp"} element={<Signin />} />}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              {" "}
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/About"
          element={
            <ProtectedRoute>
              {" "}
              <About />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Team"
          element={
            <ProtectedRoute>
              {" "}
              <Team />
            </ProtectedRoute>
          }
        />
        <Route
          path="/movie/:id"
          element={
            <ProtectedRoute>
              <Movinfo />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;

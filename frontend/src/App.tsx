// https://www.youtube.com/watch?v=b_52NmIfDr8

import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import "./App.css";
import Chapter1Quiz from "./pages/Chapter1Quiz";
import Home from "./pages/Home";
import Chapter1Home from "./pages/Chapter1Home";
import Login from "./pages/Login";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./config/config";
import AuthRoute from "./components/auth/AuthRoute";

// only called once on app init
export const Firebase = initializeApp(firebaseConfig);

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route
          path="/"
          element={
            <AuthRoute>
              <Home />
            </AuthRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/ch1" element={<Chapter1Home />} />
        <Route path="/ch1/quiz" element={<Chapter1Quiz />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;

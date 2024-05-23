import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import "./App.css";
import Chapter1Quiz from "./pages/Chapter1Quiz";
import Home from "./pages/Home";
import Chapter1Home from "./pages/Chapter1Home";

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ch1" element={<Chapter1Home />} />
        <Route path="/ch1/quiz" element={<Chapter1Quiz />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;

// https://www.youtube.com/watch?v=b_52NmIfDr8

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// https://stackoverflow.com/questions/74168742/how-to-template-jsx-with-createbrowserrouter

// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AuthRoute from "./components/auth/AuthRoute";
// import CustomQuiz from "./pages/CustomQuiz";
import ChapterHome from "./components/ChapterHome";

import Quiz from "./components/Quiz";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthRoute>
        <Home />
      </AuthRoute>
    ),
    children: [],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "chapter/:chapterNumber",
    element: <ChapterHome />,
    children: [],
  },
  {
    path: "chapter/:chapterNumber/quiz",
    element: <Quiz />,
  },
]);

// dynamically generate each chapter's route, then pass in params.id of the proper chapter/pdfURL prop
// lets you dynamically generate the component, hence no need for usestate nor need the props for ChapterHome

function App() {
  return <RouterProvider router={router} />;
}

export default App;

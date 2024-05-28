// https://www.youtube.com/watch?v=b_52NmIfDr8

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

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
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Advice from "./pages/Advice";

const Layout = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
);

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <p>404</p>,
    children: [
      {
        path: "/",
        element: (
          <AuthRoute>
            <Home />
          </AuthRoute>
        ),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "advice",
        element: <Advice />,
      },
      {
        path: "chapter",
        children: [
          {
            path: ":chapterNumber",
            element: (
              <AuthRoute>
                <ChapterHome />,
              </AuthRoute>
            ),
          },
          {
            path: ":chapterNumber/quiz",
            element: (
              <AuthRoute>
                <Quiz />
              </AuthRoute>
            ),
          },
          {
            path: ":chapterNumber/chapterreview",
            element: (
              <AuthRoute>
                <Quiz />
              </AuthRoute>
            ),
          },
        ],
      },
      {
        path: "cumulativereview",
        element: (
          <AuthRoute>
            <Quiz />
          </AuthRoute>
        ),
      },
    ],
  },
]);

// dynamically generate each chapter's route, then pass in params.id of the proper chapter/pdfURL prop
// lets you dynamically generate the component, hence no need for usestate nor need the props for ChapterHome

function App() {
  return <RouterProvider router={router} />;
}

export default App;

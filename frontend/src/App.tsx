// https://www.youtube.com/watch?v=b_52NmIfDr8

import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
  useNavigate,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// https://stackoverflow.com/questions/74168742/how-to-template-jsx-with-createbrowserrouter

// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import "./App.css";
import Chapter1Quiz from "./pages/Chapter1Quiz";
import Home from "./pages/Home";
// import Chapter1Home from "./pages/Chapter1Home";
import Login from "./pages/Login";
import AuthRoute from "./components/auth/AuthRoute";
import CustomQuiz from "./pages/CustomQuiz";
import { useEffect, useState } from "react";
import ChapterHome from "./components/ChapterHome";

import ch1PDF from "./assets/ch1.pdf";
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

// can useState to navigate between different chapters
// have single Quiz component in router that changes questions based on state given in Home
function App() {
  // 0 is review all chapters
  // const [reviewChapter, setReviewChapter] = useState<number>(0);
  // const setChapter = (chapter: number) => {
  //   setReviewChapter(chapter)
  // }

  // const [clickedChapter, setClickedChapter] = useState<number>(0);
  // const setChapter = (c: number) => {
  //   setClickedChapter(c);
  // };

  // console.log("chapter rn");
  // console.log(clickedChapter);

  // const navigate = useNavigate();

  // const { params } = useParams();
  // useEffect(() => {
  //   if (clickedChapter !== 0) {
  //     navigate("/chapter");
  //   }
  // }, [clickedChapter, navigate]);

  // // should run after render
  // useEffect(() => {
  //   if (params !== "" || params !== "login") {
  //     navigate(params);
  //   }
  // }, [params]);

  return (
    // <BrowserRouter>
    //   {/* <Navbar /> */}
    //   <Routes>
    //     <Route
    //       path="/"
    //       element={
    //         <AuthRoute>
    //           <Home handleChapterChange={setChapter} />
    //         </AuthRoute>
    //       }
    //     />
    //     <Route path="/login" element={<Login />} />
    //     <Route
    //       path="/chapter"
    //       element={
    //         <ChapterHome chapter={clickedChapter} reviewPDFURL={ch1PDF} />
    //       }
    //     />
    //     <Route path="/ch1/quiz" element={<Chapter1Quiz />} />
    //     {/* <Route
    //       path="/customquiz"
    //       element={<CustomQuiz reviewChapters={reviewChapter} />}
    //     /> */}
    //   </Routes>
    //   {/* <Footer /> */}
    // </BrowserRouter>
    <RouterProvider router={router} />
  );
}

export default App;

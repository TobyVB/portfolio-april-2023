import "./App.css";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
// Pages
import Homepage from "./components/Homepage";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
// Layouts
import SharedLayout from "./layouts/SharedLayout";

const mainLoader = async () => {
  const projectData = [
    {
      path: "https://user-images.githubusercontent.com/98196156/232417761-58ea5f68-b89e-4b0c-9d47-0841a1f79e1b.png",
      size: "100%",
      title: "Schedule",
      info: "This Schedule app was made to prototype a feature for a company. This is also a Progressive Web App. The instructions are in the github README.md file",
      github: "https://github.com/TobyVB/Schedule-React-PWA",
      demo: "https://coding-helper-51e6b.web.app/",
    },
    {
      path: "https://user-images.githubusercontent.com/98196156/221370173-e6f67b4e-ae06-41b4-8b98-82f5f365e61e.png",
      size: "100%",
      title: "The TalkSpace",
      info: "This is an ongoing project I am working on. It is a social media site inspired by Reddit, Facebook, Myspace, Quora and Github",
      github: "https://github.com/TobyVB/Talkspace",
      demo: "https://fir-practice-cace4.web.app/",
    },
    {
      path: "https://user-images.githubusercontent.com/98196156/221128205-2bbbedc7-b11a-4072-9a97-baa6f2c300cc.jpg",
      size: "40%",
      title: "SuperChat",
      info: "SuperChat is a chatroom web app that utilizes google authentication. I completed this project as a code-along by Fireship",
      github: "https://github.com/TobyVB/SuperChat",
      demo: "https://superchat-aa35f.web.app/",
    },
    {
      path: "https://user-images.githubusercontent.com/98196156/221082488-c0eec32b-a125-489c-9857-64e5014e9118.jpg",
      size: "40%",
      title: "Quiz App",
      info: "This Quiz web app uses an API provided from the Open Trivia website. Users can filter questions by count, type, category, and difficulty. Users are then scored by number of correct selected answers.",
      github: "https://github.com/TobyVB/Quiz-App",
      demo: "https://quiz-app-29f85.web.app/",
    },
    {
      path: "https://user-images.githubusercontent.com/98196156/226163163-48309ea3-a83e-45c9-983d-8087bc28e2b0.png",
      size: "100%",
      title: "Movie DB App",
      info: "This movie database web app uses an API provided from the The Movie Database website.",
      github: "https://github.com/TobyVB/movieDB",
      demo: "https://tobyvb-movie-db.vercel.app/",
    },
  ];
  return projectData;
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<SharedLayout />}
      // loader={mainLoader}
    >
      <Route index element={<Homepage />} />
      <Route path="about" element={<About />} />
      <Route path="projects" element={<Projects />} loader={mainLoader} />
      <Route path="resume" element={<Resume />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

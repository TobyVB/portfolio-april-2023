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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<SharedLayout />}
      // loader={mainLoader}
    >
      <Route index element={<Homepage />} />
      <Route path="about" element={<About />} />
      <Route path="projects" element={<Projects />} />
      <Route path="resume" element={<Resume />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

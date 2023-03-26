import Navbar from "../Navbar";
import Footer from "../Footer";

import { Outlet } from "react-router-dom";

const SharedLayout = () => {
  return (
    <div>
      <Navbar />
      <main
        style={{
          width: "100vw",
        }}
      >
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
export default SharedLayout;

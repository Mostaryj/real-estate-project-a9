import { Outlet } from "react-router-dom";
import Footer from "../pages/footer/Footer";
const Root = () => {
  return (
    <div>
      <div className="max-w-6xl mx-auto">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;

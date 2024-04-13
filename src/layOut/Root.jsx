import { Outlet } from "react-router-dom";
import Footer from "../pages/footer/Footer";
const Root = () => {
  return (
    <div>
      <div className="max-w-6xl mx-auto">
        <Outlet></Outlet>
      
     
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;

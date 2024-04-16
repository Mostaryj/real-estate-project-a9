import { Outlet } from "react-router-dom";
import Footer from "../pages/footer/Footer";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Root = () => {
  
 

  return (
    <div>
      <div className="max-w-6xl mx-auto">
        <Outlet></Outlet>
      
      </div>
      <div>
        <Footer></Footer>
      </div>
      <ToastContainer></ToastContainer>

    </div>
  );
};

export default Root;

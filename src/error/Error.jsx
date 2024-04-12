import { Link } from "react-router-dom";
import Nav from "../pages/shared/Nav";
import Footer from "../pages/footer/Footer";

const Error = () => {
    return (
        <div>
            <Nav></Nav>
           <div className="flex flex-col justify-center items-center">
           <h1 className="text-center font-bold lg:text-5xl mb-4">Page not found <br /> Enter the right path</h1>
             <Link to='/'><button className="btn bg-blue-500 text-white">Go Back</button></Link>
           </div>
            <img src='image/error.jpg' alt="" className="w-[550px] h-[300px] border-2 mt-4 rounded-lg mb-4 mx-auto" />
           <Footer></Footer>
        </div>
    );
};

export default Error;
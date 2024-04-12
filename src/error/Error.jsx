import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div>
           <div className="flex flex-col justify-center items-center">
           <h1 className="text-center font-bold lg:text-5xl mb-4">Page not found <br /> Enter the right path</h1>
             <Link to='/'><button className="btn bg-cyan-500 text-white">Go Back</button></Link>
           </div>
            <img src="image/6325254.jpg" alt="" />
           
        </div>
    );
};

export default Error;
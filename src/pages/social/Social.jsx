import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAuth from "../../Hook/useAuth";


const Social = () => {
    const {googleLogin, githubLogin} = useAuth();
    return (
        <div className="p-4">
               <p className="text-center"> Or, </p>
         <div className="flex flex-col gap-2">

         <button onClick={() => googleLogin()} className="btn btn-outline ">
          <FaGoogle className="text-blue-600"/>
          Login with Google
        </button>

        <button onClick={() => githubLogin()} className="btn btn-outline ">
          <FaGithub />
          Login with Github
        </button>
         </div>
          <p className="text-center p-2">Do not have an account? <Link to='/register'> <span className="text-blue-600">Register Now</span></Link></p>
         
        </div>
    );
};

export default Social;
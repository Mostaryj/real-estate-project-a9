import { Link } from "react-router-dom";
import Nav from "../shared/Nav";
import { Helmet } from "react-helmet-async";
import { FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {
  return (
    <div>
       <Helmet>
        <title>Luxury Retreats | Login</title>
      </Helmet>
      <Nav></Nav>
      <div className="hero h-fit bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            
          </div>
          <div className="card shrink-0 w-full max-w-sm  bg-base-100 ">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              
              </div>
              <div className="form-control mt-6">
                <button className="btn   bg-gradient-to-r from-cyan-400 to-blue-500 text-white">Login</button>
              </div>
            </form>           
          </div>


          <p className="text-center p-2">Do not have an account? <Link to='/register'> <span className="text-blue-600">Register Now</span></Link></p>
          {/* <p>Or, login with</p>
          <p>Google github</p> */}
           <button className="btn btn-outline ">
          <FaGoogle className="text-blue-600"/>
          Login with Google
        </button>
        <button className="btn btn-outline ">
          <FaGithub />
          Login with Github
        </button>
        </div>
       
      </div>
   
    </div>
  );
};

export default Login;

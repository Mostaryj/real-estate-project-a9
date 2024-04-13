import { Link } from "react-router-dom";
import Nav from "../shared/Nav";
import { Helmet } from "react-helmet-async";

const Login = () => {
  return (
    <div>
       <Helmet>
        <title>Luxury Retreats | Login</title>
      </Helmet>
      <Nav></Nav>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
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
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p className="text-center mt-4 p-4">Do not have an account? <Link to='/register'> <span className="text-blue-600">Register Now</span></Link></p>
          </div>
        </div>
      </div>
   
    </div>
  );
};

export default Login;

import Nav from "../shared/Nav";
import { Helmet } from "react-helmet-async";

import { useForm } from "react-hook-form";
import Social from "../social/Social";
import useAuth from "../../Hook/useAuth";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { useState } from "react";

import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { signInUser} = useAuth();
  const [show, setShow] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;
    signInUser(email, password)
      .then((result) => {
         toast.success("Login successful", result);
         navigate(from);

       })
       .catch((error) => {
         toast.error(
           "Failed to login. Please check your email or password.",
           error
         );
       });
  };

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
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={show ? "text" : "password"}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  {...register("password", { required: true })}
                />
                <span
                  onClick={() => setShow(!show)}
                  className="absolute bottom-4 right-2"
                >
                  {show ? <FaEyeSlash /> : <FaEye />}
                </span>
                {errors.password && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="btn   bg-gradient-to-r from-cyan-400 to-blue-500 text-white"
                >
                  Login
                </button>
              </div>

            </form>
          </div>
          <Social></Social>
        </div>
      </div>
    </div>
  );
};

export default Login;

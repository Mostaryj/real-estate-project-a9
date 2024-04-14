import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hook/useAuth";


const Nav = () => {

  const {logOut, user} = useAuth();

  const navLinks = <>
     <li><NavLink to='/'>Home</NavLink></li>
     <li><NavLink to='/'>Update Profile</NavLink></li>
     <li><NavLink to='/'>About</NavLink></li>
     <li><NavLink to='/'>Home</NavLink></li>
  </>
    return (
        <div>
            <div className="navbar bg-base-100 shadow-xl">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost sm:hidden ">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {navLinks}
       
      </ul>
    </div>
    <a className="font-pop font-semibold lg:text-2xl  sm:flex items-center justify-center  bg-gradient-to-r from-cyan-400 to-violet-700  text-transparent bg-clip-text">
      <span><img src="/image/icon.png" alt="" className="w-10 h-10 hidden sm:block " /></span>Luxury Retreats</a>
  </div>
  <div className="navbar-center hidden sm:block md:flex lg:flex">
    <ul className="menu menu-horizontal   px-1 gap-4">
   {navLinks}
    </ul>
  </div>
  <div className="navbar-end gap-4">
  <div className="w-10 ">
          <img className="rounded-full" alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
    <Link to='/login'>
    <button className="btn bg-cyan-500  bg-gradient-to-r from-cyan-400 to-blue-500 text-white">Login</button>
    </Link>
   
  </div>
</div>
        </div>
    );
};

export default Nav;
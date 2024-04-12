import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  const navLinks = <>
     <li><NavLink to='/'>Home</NavLink></li>
     <li><NavLink to='/'>Update Profile</NavLink></li>
     <li><NavLink to='/'>Home</NavLink></li>
     <li><NavLink to='/'>Home</NavLink></li>
  </>
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {navLinks}
       
      </ul>
    </div>
    <a className="font-pop font-semibold text-xl text-cyan-500">Luxury Retreats</a>
  </div>
  <div className="navbar-center hidden md:flex lg:flex">
    <ul className="menu menu-horizontal  px-1 gap-4">
   {navLinks}
    </ul>
  </div>
  <div className="navbar-end gap-4">
  <div className="w-10 ">
          <img className="rounded-full" alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
    <Link to='/login'>
    <button className="btn bg-cyan-500 text-white">Login</button>
    </Link>
   
  </div>
</div>
        </div>
    );
};

export default Nav;
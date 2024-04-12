// import { Link } from "react-router-dom";
// import Marquee from "react-fast-marquee";


const Header = () => {
    return (
        <div>
            <h2 className="text-4xl mt-6 font-pop font-bold text-center">Welcome to <span className="">Luxury Retreats</span></h2>
            <p className="text-center">Indulge in luxury, embrace serenity - welcome to your home away from home at Luxury Retreats. <br /> Book your escape today and experience the epitome of comfort and hospitality.</p>
            {/* <Marquee pauseOnHover={true} speed={100}>
       <Link to="/"> I can be a React component, multiple React components, or just some
        text.</Link>
      </Marquee> */}
        </div>
    );
};

export default Header;
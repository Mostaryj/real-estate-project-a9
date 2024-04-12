 import { Link } from "react-router-dom";
 import Marquee from "react-fast-marquee";
const Slider = () => {
    return (
        <div className="mt-8 text-blue-600 font-bold">
               <Marquee pauseOnHover={false} speed={100}>
       <Link to="/"> Explore our sites & choose your destinations...</Link>
      </Marquee> 
        </div>
    );
};

export default Slider;
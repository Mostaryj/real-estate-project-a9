import { FaRegStar } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";

const Cards = ({ card }) => {
  const {id, image, estate_title, location, price, ratings, area, bedrooms, status } =
    card;
  return (
    <div className="">
      <div className="card  bg-base-100 shadow-xl mt-6   shadow-sky-100">
        <figure>
          <img src={image} alt="Shoes" className="h-[250px] w-full" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-pop">{estate_title}</h2>
          <p className="text-gray-500 flex items-center gap-1"> <span>
              <MdLocationOn />
            </span> {location}</p>
          <p className="font-semibold">
          Area: {area}
           
          </p>
          <p className="font-semibold">Bedrooms: {bedrooms}</p>
          <p className="font-semibold">Price: {price}</p>
          <p className="font-semibold">Status: {status}</p>
          <div className="card-actions justify-end">
            <p className="font-semibold flex items-center gap-2">
              Ratings: {ratings}
              <span className="text-red-400 ">
                <FaRegStar />
              </span>
            </p>
          <Link to={`/details/${id}`}>  <button className="btn    bg-gradient-to-r from-cyan-400 to-blue-500 text-white ">View Property</button>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;

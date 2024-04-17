import { FaRegStar } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { useParams, useLoaderData } from "react-router-dom";
import Nav from "../shared/Nav";
import { Helmet } from "react-helmet-async";

const Details = () => {
  const cards = useLoaderData();
  //  console.log(cards);
  const { id } = useParams();
  console.log(id);
  const card = cards.find((card) => card.id == id);
  console.log(card);
  return (
    <div>
       <Helmet>
        <title>Luxury Retreats | Details</title>
      </Helmet>
      <Nav></Nav>
      <h1 className="sm:text-3xl text-lg font-bold font-pop text-center mt-6 text-cyan-600">
        Details of: {card.estate_title}
      </h1>

      <div className="grid  rounded-md shadow-sm mt-6 gap-0 mb-6  ">
        <div className=" ">
          <img
            src={card.image}
            alt="Shoes"
            className="w-full h-[400px]  rounded-md animate__animated animate__bounceInDown"
          />
        </div>
        <div className="p-8 bg-sky-100 rounded-md border-2 border-sky-500 mt-2 animate__animated animate__bounceInUp">
          <h3 className="text-2xl  font-pop font-semibold">
            Name: {card.estate_title}
          </h3>
          <p>
            <span className="font-bold">Description:</span> {card.description}
          </p>
          <p className="flex items-center gap-2">
            <span className="font-bold">location: </span>
            <MdLocationOn /> {card.location}
          </p>
          <p>
            <span className="font-bold">Area: </span> {card.area}
          </p>
          <p>
            <span className="font-bold">Lot size: </span>
            {card.lot_size}
          </p>
          <p className="font-semibold">Price: {card.price}</p>
          <p>
            <span className="font-bold">Facilities:</span>{" "}
            {card.facilities.map((facility, index) => (
              <li key={index}>{facility}</li>
            ))}
          </p>
          <p className="font-semibold">Bedrooms: {card.bedrooms}</p>
          <p className="font-semibold">Segment Name: {card.segment_name}</p>
          <p className="font-semibold">Status: {card.status}</p>
          <p className="font-semibold">Build Year: {card.year_built}</p>
          <p className="flex items-center gap-1 font-semibold">Ratings: {card.ratings}   <span className="text-red-400 ">
                <FaRegStar />
              </span></p>
        </div>
      </div>

    </div>
  );
};

export default Details;

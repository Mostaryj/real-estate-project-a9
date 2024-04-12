import { FaRegStar } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { useParams, useLoaderData } from "react-router-dom";
import Nav from "../shared/Nav";

const Details = () => {
  const cards = useLoaderData();
  //  console.log(cards);
  const { id } = useParams();
  console.log(id);
  const card = cards.find((card) => card.id == id);
  console.log(card);
  return (
    <div>
      <Nav></Nav>
      <h1 className="text-3xl font-bold font-pop text-center mt-6 text-cyan-600">
        Details of: {card.estate_title}
      </h1>

      <div className="grid lg:grid-cols-2 sm:grid-cols-2  rounded-md shadow-sm mt-6 gap-0">
        <div className="bg-sky-100 ">
          <img
            src={card.image}
            alt="Shoes"
            className="w-[550px] h-full  rounded-l-md "
          />
        </div>
        <div className="p-4 bg-sky-100 rounded-r-md">
          <h3 className="text-xl  font-pop font-semibold">
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
          <p>Bedrooms: {card.bedrooms}</p>
          <p>Segment Name: {card.segment_name}</p>
          <p>Status: {card.status}</p>
          <p>Build Year: {card.year_built}</p>
          <p className="flex items-center gap-1 ">Ratings: {card.ratings}   <span className="text-red-400 ">
                <FaRegStar />
              </span></p>
        </div>
      </div>

      <p></p>
    </div>
  );
};

export default Details;

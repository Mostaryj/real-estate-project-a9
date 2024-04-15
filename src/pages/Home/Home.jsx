import Banner from "../Banner/Banner";
import Cards from "../Cards/Cards";
import Header from "../shared/Header";
import Nav from "../shared/Nav";
import Slider from "../shared/Slider";
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Leaflet from "../leaflet/Leaflet";
  //  import useAuth from "../../Hook/useAuth";


const Home = () => {


   const cards = useLoaderData();

//   const {  loading } = useAuth();
//  if(loading){
//     return <div className="flex justify-center mt-10 items-center"><span className="loading loading-spinner loading-lg "></span></div>

//   }

  // console.log(cards);
  return (
    <div>
      <Helmet>
        <title>Luxury Retreats | Home</title>
      </Helmet>
        <Nav></Nav>
        <Header></Header>
    <Slider></Slider>
      <Banner></Banner>
     


      <h1 className="text-center font-semibold font-pop text-3xl mt-8">Some of our places</h1>
        <p className="text-center">In these photos, you can choose your places. Click view details to know more about this place</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {
      cards.map(card => <Cards key={card.id}
      card={card}></Cards>)
     }
        </div>
   

      <Leaflet></Leaflet>
    
    
    

     
    
     </div>
  );
};

export default Home;

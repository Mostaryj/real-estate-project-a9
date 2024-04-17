import GoogleMapReact from "google-map-react";
import { googleAPIKey } from "./googleAPIKey";
import { MdLocationOn } from "react-icons/md";
const AnyReactComponent = ({ text }) => (
  <div style={{ color: "red" }}>
    {" "}
    <MdLocationOn style={{ fontSize: "32px" }} />
    {text}
  </div>
);

const defaultProps = {
  center: {
    lat: 23.8041,
    lng: 90.415,
  },
  zoom: 11,
};

const Leaflet = () => {
  return (
    <div className="">
      <div className="bg-sky-50 rounded-lg  border-2 border-sky-400 mt-6 bg-no-repeat "
       style={{ backgroundImage: "url(image/extra2.jpg)", backgroundSize: "cover", width: "100%",height:"100%"}}
      >
        <div className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10">
          <h1 className="md:text-5xl text-3xl font-pop antialiased font-semibold leading-none text-center text-white">
            Get Our Updates
          </h1>
          <p className="pt-2 pb-8  antialiased text-center text-white">
            Find out about events and other news
          </p>
          <div className="flex flex-row">
            <input
              type="text"
              placeholder="example@email.com"
              className="w-3/5 p-3 rounded-l-lg sm:w-2/3 border-2 border-blue-400"
            />
            <button
              type="button"
              className="w-2/5 p-3 font-semibold rounded-r-lg border-r-2 border-t-2 border-b-2 border-blue-400 sm:w-1/3 bg-cyan-600 text-gray-50"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <h2 className="text-center mt-8 font-pop font-bold text-3xl">
        Our Main Office Location
      </h2>
      <p className="text-center mb-6">
        If you want to visit our office, here is the location
      </p>

      <div style={{ height: "400px", width: "full" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: googleAPIKey }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent
            lat={defaultProps.center.lat}
            lng={defaultProps.center.lng}
            text="Our Office"
          />
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default Leaflet;

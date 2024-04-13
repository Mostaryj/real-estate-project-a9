import GoogleMapReact from 'google-map-react';
import { googleAPIKey } from './googleAPIKey';
import { MdLocationOn } from 'react-icons/md';
const AnyReactComponent = ({ text }) => <div style={{color: "red"}}> <MdLocationOn style={{fontSize: '32px'}}/>{text}</div>;


const defaultProps = {
    center: {
      lat: 23.8041,
      lng: 90.4150
    },
    zoom: 11
  };


const Leaflet = () => {
    return (
        <div className=''>
            <h2 className="text-center mt-8 font-pop font-bold text-3xl">Our Main Office Location</h2>
            <p className="text-center mb-6">If you want to visit our office, here is the location</p>
           
    <div style={{ height: '400px', width: "full" }}>
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
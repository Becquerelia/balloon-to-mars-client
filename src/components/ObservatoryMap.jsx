//!IMPORTS:
import {GoogleMap, LoadScript, Marker} from "@react-google-maps/api";

//!MAIN FUNCTION:
function ObservatoryMap() {

  //CONSTANTS:
  const locations = [
      { name: "Iron Observatory", location: {lat: 40.572998, lng: -3.898421}}
    ]
  const mapStyles = {height: "35vh", width: "30vw"}
  const defaultCenter = {lat: 40.572998, lng: -3.898421}

  //RENDER VIEW:  
  return (
    <div className="map-container" >
        <LoadScript googleMapsApiKey = {process.env.GOOGLE_API_KEY}>
            <GoogleMap 
                mapContainerStyle={mapStyles}
                zoom = {16}
                center={defaultCenter}
            > 
                {locations.map((eachLocation)=>{
                    return (
                        <Marker key={eachLocation.name} position={eachLocation.location} />
                    )
                })}
            </GoogleMap>

        </LoadScript>
    </div>
  )
}

export default ObservatoryMap
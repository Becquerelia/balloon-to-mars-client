import {GoogleMap, LoadScript, Marker, InfoWindow} from "@react-google-maps/api"

function ObservatoryMap() {

    const locations = [
        { name: "Iron Observatory", location: {lat: 40.572998, lng: -3.898421}}
    ]

    const mapStyles = {height: "35vh", width: "30vw"}

    const defaultCenter = {lat: 40.572998, lng: -3.898421}

    
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
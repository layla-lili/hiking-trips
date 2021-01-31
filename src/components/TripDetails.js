// Components

// Styling
import { DetailWrapper } from "../styles";

import {useParams, Redirect} from "react-router-dom";



const TripDetails = (props) => {
 
  const citySlug =useParams().citySlug;

  // console.log(useParams());
  // console.log(productSlug);
  const trip = props.trips.find((trip => trip.city === citySlug));
   if(!trip) return <Redirect to="/trips" />;
  return (
    
    <DetailWrapper className="text-left">
     
  
     <p> {trip.name}</p>
      <img src={trip.image} alt={trip.name} />
      <p> {trip.city}</p>
      <p> {trip.difficulty} </p>
      <p> {trip.length} KM</p>
      <p> {trip.rating}/5</p> 


   {/* go back button */}
{/* <button className="btn btn-outline-info"  >
      Go Back Home
</button> */}

   
    </DetailWrapper>
  );
};

export default TripDetails;

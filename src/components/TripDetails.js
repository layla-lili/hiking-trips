// Styling
import { DetailWrapper } from "../styles";
import { useParams } from "react-router-dom";
import RecomendedTrips from "./RecomendedTrips";

const TripDetails = (props) => {
  const citySlug = useParams().citySlug;
  const trip = props.trips.find((trip) => trip.city === citySlug);

  return (
    <>
      <DetailWrapper className="text-left">
        <p> {trip.name}</p>
        <img src={trip.image} alt={trip.name} />
        <p> {trip.city}</p>
        <p> {trip.difficulty} </p>
        <p> {trip.length} KM</p>
        <p> {trip.rating}/5</p>
      </DetailWrapper>

      <RecomendedTrips trips={props.trips} trip={trip} />
    </>
  );
};

export default TripDetails;

// Styling
import { DetailWrapper } from "../styles";
import { useParams, Redirect } from "react-router-dom";
import RecomendedTrips from "./RecomendedTrips";

const TripDetails = (props) => {
  const citySlug = useParams().citySlug;
  const trip = props.trips.find((trip) => trip.city === citySlug);
  if (!trip) return <Redirect to="/trips" />;

  // const recommendedTrips = props.trips
  //   .filter((recoTrip) => recoTrip.rating >= trip.rating)
  //   .map((trip) => (
  //     <Trip currentMeasure={currentMeasure} trip={trip} key={trip.id} />
  //   ));

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

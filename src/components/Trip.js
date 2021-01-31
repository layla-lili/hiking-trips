import { Link } from "react-router-dom";
import { TripWrapper } from "../styles";

const Trip = (props) => {
  const trip = props.trip;

  return (
    <TripWrapper>
      <p> {trip.name}</p>
      <Link to={`/trips/${trip.city}`}>
        <img src={trip.image} alt={trip.name} />
      </Link>
      <p> {trip.rating}/5</p>
      {/* <p> {trip.city}</p>
      <p> {trip.difficulty} </p>
      <p> {trip.length} KM</p>
      <p> {trip.rating}/5</p> */}
    </TripWrapper>
  );
};

export default Trip;

import { Link } from "react-router-dom";
import { TripWrapper } from "../styles";

const Trip = (props) => {
  const trip = props.trip;
  const currentMeasure = props.currentMeasure;

  const show =
    currentMeasure === "km" ? (
      <p>{trip.length} KM</p>
    ) : (
      <p> {parseInt(trip.length * 0.621371)} Mile</p>
    );

  return (
    <TripWrapper>
      <p> {trip.name}</p>
      <Link to={`/${trip.city}`}>
        <img src={trip.image} alt={trip.name} />
      </Link>
      <p>{show}</p>
    </TripWrapper>
  );
};

export default Trip;

// Styling
import { ListWrapper } from "../styles";

// Components
import Trip from "./Trip";
const RecomendedTrips = (props) => {
  const trips = props.trips;
  const lastTrip = props.trip;

  const tripList = trips
    .filter(
      (trip) =>
        trip.rating >= lastTrip.rating &&
        trip.name !== lastTrip.name &&
        trip.difficulty === lastTrip.difficulty
    )
    .map((trip) => <Trip currentMeasure="km" trip={trip} key={trip.id} />);

  return (
    <>
      <ListWrapper>{tripList}</ListWrapper>
    </>
  );
};

export default RecomendedTrips;

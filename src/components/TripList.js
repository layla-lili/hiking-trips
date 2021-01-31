// Styling
import { ListWrapper, ThemeButton } from "../styles";
// Components
import Trip from "./Trip";
import SearchBar from "./SearchBar";
import { useState } from "react";

const TripList = (props) => {
  const [query, setQuery] = useState("");
  const [currentMeasure, setMeasure] = useState("km");

  const tripList = props.trips
    .filter((trip) => trip.name.toLowerCase().includes(query.toLowerCase()))
    .map((trip) => (
      <Trip currentMeasure={currentMeasure} trip={trip} key={trip.id} />
    ));

  const convert = () => {
    if (currentMeasure === "km") {
      setMeasure("mile");
    } else {
      setMeasure("km");
    }
  };

  return (
    <>
      <ThemeButton onClick={convert}>Convert</ThemeButton>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{tripList}</ListWrapper>
    </>
  );
};

export default TripList;

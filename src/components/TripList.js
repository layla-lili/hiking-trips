// Styling
import { ListWrapper, ThemeButton } from "../styles";

// Components
import Trip from "./Trip";
import SearchBar from "./SearchBar";
import { useState } from "react";
import { Range, getTrackBackground } from "react-range";
import { useParams, Redirect, useHistory, withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import DropDown from "./DropDown";

const Menu = withRouter(DropDown);

const TripList = (props) => {
  const [query, setQuery] = useState("");
  const [currentMeasure, setMeasure] = useState("km");
  const [length, setLength] = useState({ values: [10] });
  const [difficulty, setDifficulty] = useState("");

  const difficultySlug = useParams().difficultySlug;
  const history = useHistory();

  const STEP = 1;
  const MIN = 1;
  const MAX = 10;

  const tripList = props.trips
    .filter((trip) => trip.name.toLowerCase().includes(query.toLowerCase()))
    .filter((trip) => trip.length <= parseInt(length.values[0].toFixed(1)))
    .filter((trip) => trip.difficulty.includes(difficulty))
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

  const handleChange = (e) => {
    // if (difficultySlug === "easy") {
    //   setDifficulty(difficultySlug);
    // }
    setDifficulty(e.target.value);
    // <Redirect to={`/trips/${e.target.value}`} />;

    console.log("1" + history.location.pathname);
    // history.push(`/${e.target.value}`);
  };

  return (
    <>
      <ThemeButton onClick={convert}>Convert</ThemeButton>
      <SearchBar setQuery={setQuery} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <Range
          values={length.values}
          step={STEP}
          min={MIN}
          max={MAX}
          onChange={(values) => setLength({ values })}
          renderMark={({ props, index }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: "16px",
                width: "5px",
                backgroundColor:
                  index * STEP < length.values[0] ? "#548BF4" : "#ccc",
              }}
            />
          )}
          renderTrack={({ props, children }) => (
            <div
              onMouseDown={props.onMouseDown}
              onTouchStart={props.onTouchStart}
              style={{
                ...props.style,
                height: "36px",
                display: "flex",
                width: "100%",
              }}
            >
              <div
                ref={props.ref}
                style={{
                  height: "5px",
                  width: "100%",
                  borderRadius: "4px",
                  background: getTrackBackground({
                    values: length.values,
                    colors: ["#548BF4", "#ccc"],
                    min: MIN,
                    max: MAX,
                  }),
                  alignSelf: "center",
                }}
              >
                {children}
              </div>
            </div>
          )}
          renderThumb={({ props, isDragged }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: "42px",
                width: "42px",
                borderRadius: "4px",
                backgroundColor: "#FFF",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "0px 2px 6px #AAA",
              }}
            >
              <div
                style={{
                  height: "16px",
                  width: "5px",
                  backgroundColor: isDragged ? "#548BF4" : "#CCC",
                }}
              />
            </div>
          )}
        />
        <output style={{ marginTop: "30px" }}>
          {parseInt(length.values[0].toFixed(1))}
        </output>
      </div>
      <DropDown handleChange={handleChange} />
      <ListWrapper>{tripList}</ListWrapper>
    </>
  );
};

export default TripList;

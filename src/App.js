// Styling
import { GlobalStyle } from "./styles";
import React, { useState } from "react";
import { withRouter } from "react-router-dom";

// Components
import TripDetails from "./components/TripDetails";
import TripList from "./components/TripList";

// Data
import trips from "./trips";
import { Route, Switch } from "react-router";

function App() {
  const [_trips, setTrips] = useState(trips);

  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route path="/trips/:difficultySlug">
          <TripList trips={_trips} />
        </Route>

        <Route path="/:citySlug">
          <TripDetails trips={_trips} />
        </Route>

        <Route path="/">
          <TripList trips={_trips} />
        </Route>
      </Switch>
    </>
  );
}

export default App;

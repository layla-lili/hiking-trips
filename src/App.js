
// Styling
import { GlobalStyle} from "./styles";
import React, { useState } from "react";



// Components
import TripDetails from "./components/TripDetails";
import TripList from "./components/TripList";

// Data
import trips from "./trips";
import { Route, Switch } from "react-router";



function App() {
  const [_trips, setTrips] = useState(trips);


  // const deleteProduct = (productId) => {
  //   const updatedProducts = _products.filter(
  //     (product) => product.id !== +productId
  //   );

  //   setProducts(updatedProducts);
   
  // };

  return (
<>
      <GlobalStyle />
     
      <Switch>
          
        <Route path="/trips/:citySlug">
          <TripDetails trips={_trips} />

        </Route>
      
        <Route  path="/trips">
             <TripList
                trips={_trips}
      
             />
        </Route>

        <Route exact path="/">
         
        </Route>
      </Switch>
</>
 
  );

}

export default App;

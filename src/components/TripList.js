// Styling
import { ListWrapper } from "../styles";
// Components
import Trip from "./Trip";
import SearchBar from "./SearchBar";
import { useState } from "react";



const TripList = (props) => {
  const [query, setQuery] = useState("");



//   const show = product ? (
//     <ProductDetail
//       product={product}
//       setProduct={setProduct}
//       deleteProduct={deleteProduct}
//     />
//   ) : (
//     <ProductList
//       products={_products}
//       setProduct={setProduct}
//       deleteProduct={deleteProduct}
//     />
//   );

  const tripList = props.trips
    .filter((trip) =>
      trip.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((trip) => (
      <Trip
        trip={trip}
        key={trip.id}
       
      />
    ));

  return (
   <>

      <SearchBar setQuery={setQuery} />
      <ListWrapper>{tripList}</ListWrapper>
    </>
  );
};

export default TripList;

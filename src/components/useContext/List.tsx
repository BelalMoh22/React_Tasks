import { places } from "../../data/places";
import { Place } from "./Place";
import { placeContext } from "../../contexts/placeContext";

export function List() {
  const listItems = places.map((place) => (
    <placeContext.Provider value={place}>
      <li key={place.id}>
        <Place />
      </li>
    </placeContext.Provider>
  ));
  return <ul>{listItems}</ul>;
}

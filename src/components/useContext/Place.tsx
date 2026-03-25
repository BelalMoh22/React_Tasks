import { PlaceImage } from "./PlaceImage";
import { useContext } from "react";
import { placeContext } from "../../contexts/placeContext";
export function Place() {
  const place = useContext(placeContext);
  return (
    <>
      <PlaceImage place={place} />
      <p>
        {place.name} : {place.description}
      </p>
      ;
    </>
  );
}

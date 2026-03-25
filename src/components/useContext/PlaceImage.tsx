import { useContext } from "react";
import { sizeContext } from "../../contexts/placeContext";
export function PlaceImage({ place }) {
  const size = useContext(sizeContext);
  return (
    <img src={place.imageUrl} alt={place.name} width={size} height={size} />
  );
}

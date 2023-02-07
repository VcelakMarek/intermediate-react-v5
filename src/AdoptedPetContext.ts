import { createContext } from "react";
import { Pet } from "./APIResponsesTypes";

const AdoptedPetContext = createContext<[Pet, (adoptedPet: Pet) => void]>([
  {
    id: 1337,
    name: "fido",
    animal: "dog",
    description: "Lorem ipsum",
    breed: "Beagle",
    image: [],
    city: "Seatle",
    state: "WA",
  },
  () => {},
]);

export default AdoptedPetContext;

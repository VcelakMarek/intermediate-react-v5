import { useQuery } from "@tanstack/react-query";
import fetchBreedList from "./fetchBreedList";

export default function useBreedList(animal) {
    const results = useQuery(["breeds", animal], fetchBreedList);

    return [results?.data?.breeds ?? [], results.status];   //if i dont have results yet, give me an empty arra
}
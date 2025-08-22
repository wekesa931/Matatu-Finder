import { Place, places, MatatuRoute, matatuRoutes } from "@/data";
import { useEffect, useState } from "react";

// Mock API calls
const getPlaces = () => {
  return new Promise(resolve => {
    const data = places;
    setTimeout(() => {
      resolve(data);
    }, 3000);
  });
};

const getRoutes = () => {
  return new Promise(resolve => {
    const data = matatuRoutes;
    setTimeout(() => {
      resolve(data);
    }, 3000);
  });
};


const useApi = () => {
    const [places, setPlaces] = useState<Place[]>([]);
    const [routes, setRoutes] = useState<MatatuRoute[]>([]);
    const [popularPlaces, setPopularPlaces] = useState<Place[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        getPlaces().then((data) => setPlaces(data as Place[])).catch((error) => setError(error as string)).finally(() => setLoading(false));
        getRoutes().then((data) => setRoutes(data as MatatuRoute[])).catch((error) => setError(error as string)).finally(() => setLoading(false));
    }, []);

    useEffect(() => {
        setPopularPlaces(places.filter((place) => place.popular));
    }, [places]);



    return { places, routes, popularPlaces, loading, error };
}

export default useApi;
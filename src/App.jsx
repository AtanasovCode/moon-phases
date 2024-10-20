import { useEffect, useRef } from "react";
import { useMoonStore } from "./useMoonStore";

import Hero from "./sections/Hero";
import MoonPhase from "./sections/MoonPhase";


const App = () => {

  const moonRef = useRef(null);

  const {
    setLoading,
    setMoonPhase,
    setDays,
    moonPhase,
    dataHasBeenFetched,
    setDataHasBeenFetched
  } = useMoonStore();

  const fetchData = async () => {
    try {
      setLoading(true);
      setDataHasBeenFetched(false);

      const data = await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Berlin?unitGroup=us&include=current&key=N98UUEZWJCFKVHRPUJNY28T7R&contentType=json");

      if (!data.ok) {
        throw new Error(`Error: ${data.status} - ${data.statusText}`)
      }

      const response = await data.json();

      return response;
    } catch (error) {
      console.error(error.message);
    }
  }

  const getMoonPhase = async () => {
    try {
      const response = await fetchData();

      if (!response) return;

      setMoonPhase(response.currentConditions.moonphase);
      setDays(response.days);
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
      setDataHasBeenFetched(true);
    }
  }

  useEffect(() => {
    if(dataHasBeenFetched) {
      moonRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [dataHasBeenFetched])

  return (
    <div className="w-full min-h-[100dvh] bg-black font-sans">
      <Hero getMoonPhase={getMoonPhase} />
      { dataHasBeenFetched && <MoonPhase moonRef={moonRef} /> }
    </div>
  );
}

export default App;
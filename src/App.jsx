import { useEffect } from "react";
import { useMoonStore } from "./useMoonStore";
import Hero from "./sections/Hero";


const App = () => {

  const {
    loading, 
    setLoading, 
    setMoonPhase,
  } = useMoonStore();

  const fetchData = async () => {
    try {
      setLoading(true);

      const data = await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Skopje?unitGroup=us&include=current&key=N98UUEZWJCFKVHRPUJNY28T7R&contentType=json");

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

      if(!response) return;

      setMoonPhase(response.currentConditions.moonphase);
      console.log(response.currentConditions.moonphase);
    } catch(error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full min-h-[100dvh] bg-black font-sans">
      <Hero getMoonPhase={getMoonPhase} />
    </div>
  );
}

export default App;
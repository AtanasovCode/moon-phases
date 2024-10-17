import { useEffect } from "react";
import { useMoonStore } from "./useMoonStore";
import Hero from "./sections/Hero";


const App = () => {
  //api https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Skopje?unitGroup=us&include=current&key=N98UUEZWJCFKVHRPUJNY28T7R&contentType=json

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
    });
  }, [])

  return (
    <div className="w-full min-h-[100dvh] bg-black font-sans">
      <Hero />
    </div>
  );
}

export default App;
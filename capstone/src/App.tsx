import WindCard, { type WindSpot } from "./components/WindCard";
import { useState } from "react";

function App() {
  const [windData, setWindData] = useState<WindSpot[]>([
    {
      location: "San Francisco",
      windSpeedKnots: 15,
      directionDeg: 120,
      gustKnots: 25,
    },
    {
      location: "Boston",
      windSpeedKnots: 11,
      directionDeg: 140,
      gustKnots: 18,
    },
    {
      location: "New York",
      windSpeedKnots: 10,
      directionDeg: 50,
    },
    {
      location: "Chicago",
      windSpeedKnots: 23,
      directionDeg: 42,
      gustKnots: 0,
    },
  ]);

  const removeWindCard = (location: string) => {
    setWindData((prevData) =>
      prevData.filter((data) => data.location !== location),
    );
  };

  return (
    <div className="flex flex-col gap-4">
      {windData.map((data) => (
        <WindCard
          key={data.location}
          {...data}
          onRemove={() => removeWindCard(data.location)}
        />
      ))}
    </div>
  );
}

export default App;

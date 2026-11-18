import WindCard, { type WindCardProps } from "./components/WindCard";

function App() {
  const windData: WindCardProps[] = [
    {
      location: "San Francisco",
      windSpeedKnots: 15,
      directionDeg: 120,
    },
    {
      location: "New York",
      windSpeedKnots: 10,
      directionDeg: -50,
    },
    {
      location: "Chicago",
      windSpeedKnots: 20,
      directionDeg: 42,
    },
  ];

  return (
    <>
      <WindCard
        location={windData[0].location}
        windSpeedKnots={windData[0].windSpeedKnots}
        directionDeg={windData[0].directionDeg}
      />
      <WindCard
        location={windData[1].location}
        windSpeedKnots={windData[1].windSpeedKnots}
        directionDeg={windData[1].directionDeg}
      />
      <WindCard
        location={windData[2].location}
        windSpeedKnots={windData[2].windSpeedKnots}
        directionDeg={windData[2].directionDeg}
      />
    </>
  );
}

export default App;

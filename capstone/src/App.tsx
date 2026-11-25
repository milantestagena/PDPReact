import WindCard, { type WindSpot } from "./components/WindCard";
import { useState } from "react";
import { INITIAL_SPOTS } from "./constants/WindSpot";
import { STRONG_WIND_KNOTS } from "./constants/WindCard";

function App() {
  const [windData, setWindData] = useState<WindSpot[]>(INITIAL_SPOTS);
  const [strongWindOnly, setStrongWindOnly] = useState(false);

  const removeWindCard = (location: string) => {
    setWindData((prevData) =>
      prevData.filter((data) => data.location !== location),
    );
  };

  const reset = () => {
    setWindData(INITIAL_SPOTS);
    setStrongWindOnly(false);
  };

  return (
    <>
      <div className="flex w-full items-center justify-end p-4">
        <button
          type="button"
          className="mb-4 inline-flex items-center justify-center rounded-lg bg-sky-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-sky-700 active:bg-sky-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
          onClick={() => setStrongWindOnly((showStrongOnly) => !showStrongOnly)}
        >
          {strongWindOnly ? "Show all spots" : "Show strong wind only"}
        </button>
      </div>
      <div className="flex flex-col gap-4">
        {windData
          .filter(
            (data) =>
              !strongWindOnly || data.windSpeedKnots >= STRONG_WIND_KNOTS,
          )
          .map((data) => (
            <WindCard
              key={data.location}
              {...data}
              onRemove={() => removeWindCard(data.location)}
            />
          ))}
      </div>
      <div className="flex w-full items-center justify-end p-4">
        <button
          type="button"
          className="mb-4 inline-flex items-center justify-center rounded-lg bg-sky-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-sky-700 active:bg-sky-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </>
  );
}

export default App;

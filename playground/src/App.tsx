import { useState } from "react";

function App() {
  const [cities, setCities] = useState([
    { id: 1, name: "SF" },
    { id: 2, name: "NY" },
    { id: 3, name: "Chicago" },
  ]);

  const addBoston = () => {
    const newCity = { id: 4, name: "Boston" };
    setCities((prevCities) => [newCity, ...prevCities]);
  };

  return (
    <>
      <div className="flex flex-col gap-4 border-solid border-2 border-slate-200 p-4">
        <div className="items-center justify-between  border-solid border-2 border-slate-200 p-4">
          City List Test Array Index
          <ol className="grid grid-cols-2 list-decimal list-inside">
            {cities.map((city, index) => (
              <li key={index}>
                {city.name} <input type="text" className="border-2 border-gray-400" />
              </li>
            ))}
          </ol>
        </div>
        <div className="items-center justify-between  border-solid border-2 border-slate-200 p-4">
          City List Test Element ID
          <ol className="grid grid-cols-2 list-decimal list-inside">
            {cities.map((city) => (
              <li key={city.id}>
                {city.name} <input type="text" className="border-2 border-gray-400" />
              </li>
            ))}
          </ol>
        </div>
      </div>

      <input
        type="button"
        value="Add Boston"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={addBoston}
      />
    </>
  );
}

export default App;

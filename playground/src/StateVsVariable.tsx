/* eslint-disable react-hooks/immutability */
import { useState } from "react";

function Counter() {
  let count = 0;
  const [clicks, setClicks] = useState(0);

  const updateCounters = () => {
    setClicks((previousClicks) => previousClicks + 1);
    count += 1;
    console.log(`Count: ${count} | Clicks: ${clicks}`);
  };

  return (
    <>
      Count: {count} | Clicks: {clicks}
      <input  type="button" onClick={updateCounters} value="Add" />
    </>
  );
}
export default Counter;

import { useState, useEffect, useRef } from "react";
import "./App.css";
import { Tooltip, initTWE, Ripple, Collapse } from "tw-elements";
import Navbar from "./components/Navbar";
import Card from "./components/Card";

function App() {
  const [height, setHeight] = useState(0);
  const [Time, setTime] = useState(0);

  const heightRef = useRef();

  useEffect(() => {
    heightRef.current.focus();
  });
  useEffect(() => {
    initTWE({ Tooltip });
  }, []);

  return (
    <>
      <Navbar />
      <Card />
      <label htmlFor="height">Height</label>
      <input
        name="height"
        id="height"
        type="number"
        ref={heightRef}
        onChange={(e) => setHeight(parseInt(e.target.value))}
      />

      <button
        onClick={() => {
          let calTime = Math.sqrt((2 * height) / 9.8);
          setTime(calTime);
        }}
      >
        Clal
      </button>

      <h2>Output</h2>
      <p>Time Taken : {Time}</p>

      <div className="mt-16 flex justify-center">
        <p className="text-lg">
          Hover the link to see the
          <a
            href="#"
            className="text-primary ps-1 transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
            data-twe-toggle="tooltip"
            title="Hi! I'm tooltip"
          >
            tooltip
          </a>
        </p>
      </div>
    </>
  );
}

export default App;

import React from "react";
import useToggle from "./useToggle";

const App = function () {
  const [value, toggleValue] = useToggle(false);

  return (
    <React.Fragment>
      <div>{value.toString()}</div>
      <button onClick={toggleValue}>Toggle</button>
      <button onClick={() => toggleValue(true)}>Make True</button>
      <button onClick={() => toggleValue(false)}>Make False</button>
    </React.Fragment>
  );
};

export default App;

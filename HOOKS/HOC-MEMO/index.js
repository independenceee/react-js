import React, { useState, memo } from "react";
import Content from "./Contents";

// 1. memo() -> HOC
// xử lý component để tránh tình huống render không cần thiết
// nhận vào components => check ít nhất props xem có bị thay đổi hay không bằng toán tử ===

const App = function () {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const handleIncrement = function () {
    setCounter(counter + 1);
  };
  const handleIncrement2 = function () {
    setCounter2(counter2 + 1);
  };

  return (
    <>
      <Content counter={counter} />
      <div>{counter}</div>
      <div>{counter2}</div>
      <button onClick={handleIncrement}>Click me !</button>
      <button onClick={handleIncrement2}>Click me !</button>
    </>
  );
};

export default App;

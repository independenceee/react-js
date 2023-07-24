import { useEffect } from "react";
import useTimeout from "../02_USE-TIMEOUT/useTimeout";

export default function useDebounce(callback, delay, dependencies) {
  const { reset, clear } = useTimeout(callback, delay);
  useEffect(reset, [...dependencies, reset]);
  useEffect(clear, []);
}



//


import { useState, useEffect } from "react";
const useDebounces = function ({ value, delay }) {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(function () {
      return setDebounceValue(value);
    }, delay);

    return function () {
      clearTimeout(handler);
    };
  }, [value]);

  return debounceValue;
};

export { useDebounces };

import React, { useState } from "react";

const useToggle = function (defaultValue) {
  const [value, setValue] = useState(defaultValue);

  const toggleValue = function (value) {
    setValue(function (currentValue) {
      return typeof value == "boolean" ? value : !currentValue;
    });
  };

  return [value, toggleValue];
};

export default useToggle;

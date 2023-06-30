import React, { memo } from "react";

function Contents({ counter }) {
  return <div>{counter}</div>;
}

export default memo(Contents);

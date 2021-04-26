import React from "react";

import { Ripple, Text, Circle } from "./styles";
export default function Loader() {
  return (
    <div>
      <Text>The force is loading your page...</Text>
      <Ripple>
        <Circle></Circle>
        <Circle></Circle>
      </Ripple>
    </div>
  );
}

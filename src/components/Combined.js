import React from "react";
import Gender from "./gender";
import { useState } from "react";
import Floor from "./Floor";
import ChooseHostel from "./ChooseHostel";

export default function Combined() {
  const [task, setTask] = useState(<Gender />);
  return <>{task}</>;
}

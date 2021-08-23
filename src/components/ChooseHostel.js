import React from "react";
import "./ChooseHostel.css";
import firebase from "firebase";
import { useHistory } from "react-router-dom";

export default function ChooseHostel() {
  const history = useHistory();
  const handleClick = () => history.push("/Floor");
  let z = firebase.auth().gender;
  let g = "";
  if (z === "male") g = "B";
  else g = "G";
  return (
    <div
      onClick={(event) => {
        if (event.target.innerText === "table") return;
        // setFloor(true);
        // setHostel(false);
        handleClick();
        firebase.auth().hostel = event.target.innerText;
        console.log(event);
      }}
    >
      <div className="grid-cont" id={"table"}>
        <div className="grid-i">{g}1</div>
        <div className="grid-i">{g}2</div>
        <div className="grid-i">{g}3</div>
        <div className="grid-i">{g}4</div>
        <div className="grid-i">{g}5</div>
        <div className="grid-i">{g}6</div>
      </div>
    </div>
  );
}

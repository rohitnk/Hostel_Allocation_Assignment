import React, { useState } from "react";
import firebase from "firebase";
import { useHistory } from "react-router-dom";
import "./Floor.css";

const arr = [1, 2, 3, 4, 10, "", "", 5, 9, 8, 7, 6];

export default function Floor() {
  const [floor, setFloor] = useState(1);
  const history = useHistory();
  const handleClick = () => history.push("/Final");
  let selectValChange = false;
  return (
    <div>
      <form className={"main"}>
        <div>
          <label htmlFor={"floor"}>Floor</label>
          <select
            defaultValue={"1"}
            id={"floor"}
            required
            onChange={(event) => {
              selectValChange = true;
              console.log(selectValChange);
              firebase.auth().floor = event.target.value;
              console.log(firebase.auth().floor + " .........................");
              setFloor(event.target.value);
              console.log("Floor = " + floor);
            }}
          >
            <option disabled> -- select an option -- </option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </div>
        <br></br>
        <div
          className="grid-container"
          onClick={(event) => {
            console.log("checking value");
            console.log(selectValChange + "  hahaa");
            // if (selectValChange === false) {
            //   alert("plese select Floor");
            //   return;
            // }
            firebase.auth().room = event.target.innerText;
            handleClick();
            // firebase.auth().floor = floor;
            console.log("setcomp true");
          }}
        >
          <Grid floor={floor} />
        </div>
      </form>
    </div>
  );
}

function Grid({ floor }) {
  return arr.map((el, i) => (
    <div
      key={i}
      className={`grid-item ${el === "" && "white"} ${
        el !== "" && onFloorChange(floor, el)
      }`}
    >
      {el}
    </div>
  ));
}

function onFloorChange(floor, el) {
  console.log(parseInt(floor));
  if (localStorage.getItem("hostelStorage")) {
    // console.log(JSON.parse(localStorage.getItem("hostelStorage")));
    console.log("user ");
    console.log(firebase.auth());
    var hostelStorage = JSON.parse(localStorage.getItem("hostelStorage"));
    const user = firebase.auth();
    if (hostelStorage[user.gender][user.hostel][parseInt(floor)][el])
      return "green";
    else return "red";
  }
  return "green";
}

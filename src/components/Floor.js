import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { user } from "./Combined";

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
            defaultValue={1}
            id={"floor"}
            required
            onChange={(event) => {
              console.log("onchange happened");
              selectValChange = true;
              console.log(selectValChange);
              user.floor = event.target.value;
              console.log(user.floor + " .........................");
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
            console.log(user);
            console.log(selectValChange + "  hahaa");
            // if (selectValChange === false) {
            //   alert("plese select Floor");
            //   return;
            // }
            user.room = event.target.innerText;
            handleClick();
            // user.floor = floor;
            // console.log("setcomp true");
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
      key={`${el}${i}`}
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
    // console.log(user);
    var hostelStorage = JSON.parse(localStorage.getItem("hostelStorage"));
    // const user = user;
    if (hostelStorage[user.gender][user.hostel][parseInt(floor)][el])
      return "green";
    else return "red";
  }
  return "green";
}

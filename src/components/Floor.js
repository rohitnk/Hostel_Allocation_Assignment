import React from "react";
import firebase from "firebase";

import "./Floor.css";
export default function Floor({ setComp, setFloor }) {
  let selectValChange = false;
  return (
    <div>
      <form className={"main"}>
        <div>
          <label htmlFor={"floor"}>Floor</label>
          <select
            value={"-- select an option --"}
            id={"floor"}
            required
            onChange={(event) => {
              selectValChange = true;
              firebase.auth().floor = event.target.value;
            }}
          >
            <option disabled> -- select an option -- </option>
            <option value={"1"}>1</option>
            <option value={"2"}>2</option>
            <option value={"3"}>3</option>
            <option value={"4"}>4</option>
            <option value={"5"}>5</option>
            <option value={"6"}>6</option>
            <option value={"7"}>7</option>
            <option value={"8"}>8</option>
            <option value={"9"}>9</option>
            <option value={"10"}>10</option>
          </select>
        </div>
        <br></br>
        <div
          className="grid-container"
          onClick={(event) => {
            if (selectValChange === false) {
              alert("plese select Floor");
              return;
            }
            firebase.auth().room = event.target.innerText;
            setFloor(false);
            setComp(true);

            console.log("setcomp true");
          }}
        >
          <div className="grid-item">1</div>
          <div className="grid-item">2</div>
          <div className="grid-item">3</div>
          <div className="grid-item">4</div>
          <div className="grid-item">10</div>
          <div className="grid-item white"></div>
          <div className="grid-item white"></div>
          <div className="grid-item">5</div>
          <div className="grid-item">9</div>
          <div className="grid-item">8</div>
          <div className="grid-item">7</div>
          <div className="grid-item">6</div>
        </div>
      </form>
    </div>
  );
}

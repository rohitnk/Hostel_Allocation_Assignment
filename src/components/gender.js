import React from "react";
import { useState } from "react";
import ChooseHostel from "./ChooseHostel";
import firebase from "firebase";
function Gender({ setTask }) {
  return (
    <div>
      <button
        onClick={(event) => {
          firebase.auth().gender = "male";
          setTask(<ChooseHostel />);
          console.log(firebase.auth().gender);
        }}
      >
        Male
      </button>
      <br></br>
      <button
        onClick={(event) => {
          firebase.auth().gender = "female";
          console.log(firebase.auth().gender);
          setTask(<ChooseHostel />);
        }}
      >
        Female
      </button>
    </div>
  );
}

export default Gender;

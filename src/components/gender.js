import React from "react";
import firebase from "firebase";
import { useHistory } from "react-router-dom";
import girl from "../img/girl.png";
import boy from "../img/boy.png";
import "./img.css";

function Gender() {
  const history = useHistory();
  const handleClick = () => history.push("/Hostel");

  return (
    <div className={"contain"}>
      <img
        src={girl}
        alt="girl"
        className="img"
        onClick={(event) => {
          firebase.auth().gender = "female";
          handleClick();
          console.log(event);
        }}
      ></img>
      <img
        src={boy}
        alt="boy"
        className="img"
        onClick={(event) => {
          firebase.auth().gender = "male";
          handleClick();
          console.log(event);
        }}
      ></img>
      {/* <button
        onClick={(event) => {
          firebase.auth().gender = "male";
          handleClick();
          console.log(event);
        }}
      >
        Male
      </button>
      <br></br>
      <button
        onClick={() => {
          firebase.auth().gender = "female";
          handleClick();
        }}
      >
        Female
      </button> */}
    </div>
  );
}

export default Gender;

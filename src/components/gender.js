import React from "react";
import { useHistory } from "react-router-dom";
import girl from "../img/girl.png";
import boy from "../img/boy.png";
import { user } from "./Combined";
// import "../App.scss";

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
          user.gender = "female";
          handleClick();
          console.log(event);
        }}
      ></img>
      <img
        src={boy}
        alt="boy"
        className="img"
        onClick={(event) => {
          user.gender = "male";
          handleClick();
          console.log(event);
        }}
      ></img>
      {/* <button
        onClick={(event) => {
         user.gender = "male";
          handleClick();
          console.log(event);
        }}
      >
        Male
      </button>
      <br></br>
      <button
        onClick={() => {
         user.gender = "female";
          handleClick();
        }}
      >
        Female
      </button> */}
    </div>
  );
}

export default Gender;

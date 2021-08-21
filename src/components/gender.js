import React from "react";
import firebase from "firebase";
function Gender({ setHostel, setgender }) {
  function clicked() {
    setgender(false);
    setHostel(true);
  }
  return (
    <div>
      <button
        onClick={(event) => {
          firebase.auth().gender = "male";
          clicked();
        }}
      >
        Male
      </button>
      <br></br>
      <button
        onClick={() => {
          firebase.auth().gender = "female";
          clicked();
        }}
      >
        Female
      </button>
    </div>
  );
}

export default Gender;

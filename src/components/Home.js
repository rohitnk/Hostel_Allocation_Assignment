import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import firebase from "firebase";

export default function Home({ renderButton }) {
  const history = useHistory();
  const handleClick = () => history.push("/gender");
  return (
    <>
      <h1>Welcome to hostel booking </h1>
      {renderButton && (
        <button
          onClick={(event) => {
            event.target.hidden = true;
            handleClick();
          }}
        >
          Click to start
        </button>
      )}
    </>
  );
}

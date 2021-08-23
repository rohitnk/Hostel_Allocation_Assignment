import React from "react";
import { useHistory } from "react-router-dom";

export default function Home() {
  const history = useHistory();
  const handleClick = () => history.push("/gender");
  //   handleClick();
  return (
    <>
      <h1>Company Name</h1>
      <h1>Welcome to hostel booking </h1>

      <header></header>
      <button
        onClick={(event) => {
          event.target.hidden = true;
          handleClick();
        }}
      >
        Click to start
      </button>
    </>
  );
}

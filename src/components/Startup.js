import React from "react";

export default function Startup() {
  return (
    <form>
      <label for={"username"}>Username</label>
      <input type={"username"} id={"username"}></input>
      <br></br>
      <label for={"password"}>password</label>
      <input type={"password"} id={"password"}></input>
      <br></br>
      <button type={"submit"}>Submit</button>
    </form>
  );
}

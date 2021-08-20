import React from "react";
import "./ChooseHostel";
export default function Floor() {
  return (
    <div>
      <form className={"main"}>
        <div>
          <label for={"floor"}>Floor</label>
          <select id={"floor"}>
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
        <div class="grid-container">
          <div class="grid-item">1</div>
          <div class="grid-item">2</div>
          <div class="grid-item">3</div>
          <div class="grid-item">4</div>
          <div class="grid-item">10</div>
          <div class="grid-item white"></div>
          <div class="grid-item white"></div>
          <div class="grid-item">5</div>
          <div class="grid-item">9</div>
          <div class="grid-item">8</div>
          <div class="grid-item">7</div>
          <div class="grid-item">6</div>
        </div>
      </form>
    </div>
  );
}

import React from "react";
import firebase from "firebase";
import { user } from "./Combined";
const hs = () => {
  var hostelStorage;
  if (localStorage.getItem("hostelStorage")) {
    hostelStorage = JSON.parse(localStorage.getItem("hostelStorage"));
  } else {
    hostelStorage = {
      male: {
        B1: new Array(6).fill().map(() => new Array(11).fill(true)),
        B2: new Array(6).fill().map(() => new Array(11).fill(true)),
        B3: new Array(6).fill().map(() => new Array(11).fill(true)),
        B4: new Array(6).fill().map(() => new Array(11).fill(true)),
        B5: new Array(6).fill().map(() => new Array(11).fill(true)),
        B6: new Array(6).fill().map(() => new Array(11).fill(true)),
      },
      female: {
        G1: new Array(6).fill().map(() => new Array(11).fill(true)),
        G2: new Array(6).fill().map(() => new Array(11).fill(true)),
        G3: new Array(6).fill().map(() => new Array(11).fill(true)),
        G4: new Array(6).fill().map(() => new Array(11).fill(true)),
        G5: new Array(6).fill().map(() => new Array(11).fill(true)),
        G6: new Array(6).fill().map(() => new Array(11).fill(true)),
      },
    };
    console.log("step hostelStorage var created");
    console.log(hostelStorage);
    localStorage.setItem("hostelStorage", JSON.stringify(hostelStorage));
  }
  return hostelStorage;
};
const Final = () => {
  var hostelStorage = hs();
  console.log("before booking and when a component is mounted");
  console.log(hostelStorage);

  if (
    localStorage.getItem(`HostelUserInfo${firebase.auth().currentUser.email}`)
  ) {
    console.log(
      localStorage.getItem(`HostelUserInfo${firebase.auth().currentUser.email}`)
    );
    let data = JSON.parse(
      localStorage.getItem(`HostelUserInfo${firebase.auth().currentUser.email}`)
    );
    // console.log(data);
    return (
      <>
        <h1>WELCOME {data.displayName}</h1>
        <h1>You already Booked a room</h1>
        <h1>Your Room details are as follows:</h1>
        <h1>Room No. -{data.room}</h1>
        <h1>Room Floor - {data.floor}</h1>
        <h1>Hostel -{data.hostel}</h1>
      </>
    );
  } else {
    let data = {
      email: firebase.auth().currentUser.email,
      complete: true,
      room: user.room,
      floor: user.floor,
      hostel: user.hostel,
      displayName: firebase.auth().currentUser.displayName,
    };
    if (
      !localStorage.getItem(
        `HostelUserInfo${firebase.auth().currentUser.email}`
      )
    ) {
      localStorage.setItem(
        `HostelUserInfo${firebase.auth().currentUser.email}`,
        JSON.stringify(data)
      );
    }

    const room = user.room;
    const fl = user.floor;
    const hos = user.hostel;
    const gen = user.gender;

    hostelStorage[gen][hos][fl][room] = false;

    console.log("gender = " + user.gender);
    console.log("hostel = " + user.hostel);
    console.log("floor = " + user.floor);
    console.log("room = " + user.room);
    console.log(hostelStorage[user.gender][user.hostel][user.floor][user.room]);
    console.log(
      "......................................................................................"
    );
    console.log("after booking");
    console.log("printing hostelStorage");
    console.log(hostelStorage);
    localStorage.setItem("hostelStorage", JSON.stringify(hostelStorage));
    return (
      <>
        <h1> {firebase.auth().currentUser.displayName}</h1>
        <h1>
          Your Room has been booked successfully.<br></br> Your Room details are
          as follows:
        </h1>{" "}
        <h1>Hostel -{user.hostel}</h1>
        <h1>Room No. -{user.room}</h1>
        <h1>Room Floor - {user.floor}</h1>
      </>
    );
  }
};
export default Final;

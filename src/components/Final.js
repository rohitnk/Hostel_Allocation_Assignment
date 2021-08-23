import React from "react";
import firebase from "firebase";

if (localStorage.getItem("hostelStorage")) {
  var hostelStorage = JSON.parse(localStorage.getItem("hostelStorage"));
} else {
  hostelStorage = {
    male: {
      B1: Array(6).fill(Array(11).fill(true)),
      B2: Array(6).fill(Array(11).fill(true)),
      B3: Array(6).fill(Array(11).fill(true)),
      B4: Array(6).fill(Array(11).fill(true)),
      B5: Array(6).fill(Array(11).fill(true)),
      B6: Array(6).fill(Array(11).fill(true)),
    },
    female: {
      G1: Array(6).fill(Array(11).fill(true)),
      G2: Array(6).fill(Array(11).fill(true)),
      G3: Array(6).fill(Array(11).fill(true)),
      G4: Array(6).fill(Array(11).fill(true)),
      G5: Array(6).fill(Array(11).fill(true)),
      G6: Array(6).fill(Array(11).fill(true)),
    },
  };
  localStorage.setItem("hostelStorage", JSON.stringify(hostelStorage));
}

export default function Final() {
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
      room: firebase.auth().room,
      floor: firebase.auth().floor,
      hostel: firebase.auth().hostel,
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
    hostelStorage[firebase.auth().gender][firebase.auth().hostel][
      firebase.auth().floor
    ][firebase.auth().room] = false;
    const user = firebase.auth();
    console.log("gender = " + user.gender);
    console.log("hostel = " + user.hostel);
    console.log("floor = " + user.floor);
    console.log("room = " + user.room);
    console.log(
      hostelStorage[firebase.auth().gender][firebase.auth().hostel][
        firebase.auth().floor
      ][firebase.auth().room]
    );
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
        <h1>Hostel -{firebase.auth().hostel}</h1>
        <h1>Room No. -{firebase.auth().room}</h1>
        <h1>Room Floor - {firebase.auth().floor}</h1>
      </>
    );
  }
}

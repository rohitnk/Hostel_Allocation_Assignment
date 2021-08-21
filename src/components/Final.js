import React from "react";
import firebase from "firebase";
export default function Final() {
  if (localStorage.getItem(`HostelUserInfo${firebase.auth().displayName}`)) {
    console.log("hahaha");
    console.log(
      localStorage.getItem(`HostelUserInfo${firebase.auth().displayName}`)
    );
    let data = JSON.parse(
      localStorage.getItem(`HostelUserInfo${firebase.auth().displayName}`)
    );
    console.log(data);
    return (
      <>
        <h1> {data.displayName}</h1>
        <h1>
          You Booked a room<br></br> The details are
        </h1>
        <h1>Room No. -{data.room}</h1>
        <h1>Room Floor - {data.floor}</h1>
        <h1>Hostel -{data.hostel}</h1>
      </>
    );
  } else {
    let data = {
      complete: true,
      room: firebase.auth().room,
      floor: firebase.auth().floor,
      hostel: firebase.auth().hostel,
      displayName: firebase.auth().currentUser.displayName,
    };
    if (!localStorage.getItem(`HostelUserInfo${firebase.auth().displayName}`)) {
      localStorage.setItem(
        `HostelUserInfo${firebase.auth().displayName}`,
        JSON.stringify(data)
      );
    }

    return (
      <>
        <h1> {firebase.auth().currentUser.displayName}</h1>
        <h1>
          You Booked a room<br></br> The details are
        </h1>
        <h1>Room No. -{firebase.auth().room}</h1>
        <h1>Room Floor - {firebase.auth().floor}</h1>
        <h1>Hostel -{firebase.auth().hostel}</h1>
      </>
    );
  }
}

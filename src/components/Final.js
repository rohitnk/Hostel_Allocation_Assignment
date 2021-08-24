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

const Final = ({ isfirst }) => {
  var hostelStorage = hs();
  console.log("before booking and when a component is mounted");
  console.log(hostelStorage);

  if (
    localStorage.getItem(`HostelUserInfo${firebase.auth().currentUser.email}`)
  ) {
    let data = JSON.parse(
      localStorage.getItem(`HostelUserInfo${firebase.auth().currentUser.email}`)
    );

    return <Torender isfirst={isfirst} data={data} />;
  } else {
    let data = {
      email: firebase.auth().currentUser.email,
      complete: true,
      room: user.room,
      floor: user.floor,
      hostel: user.hostel,
      displayName: firebase.auth().currentUser.displayName,
    };

    localStorage.setItem(
      `HostelUserInfo${firebase.auth().currentUser.email}`,
      JSON.stringify(data)
    );

    hostelStorage[user.gender][user.hostel][user.floor][user.floor] = false;
    localStorage.setItem("hostelStorage", JSON.stringify(hostelStorage));
    return <Torender isfirst={isfirst} data={data} />;
  }
};

function Torender({ isfirst, data }) {
  return (
    <div className={"cente"}>
      <div className={"innerdiv"}>
        <div className={"innerchild"}>
          {isfirst && (
            <>
              <h1>Success</h1>
              <br />
              <h3>Your Room has been booked successfully.</h3>
            </>
          )}
        </div>
        <div>
          {/* <h1>WELCOME {data.displayName}</h1> */}
          {!isfirst && (
            <div className={"grandchild"}>
              <h1>WELCOME {data.displayName}</h1>{" "}
              <h3>You have already Booked a room</h3>
            </div>
          )}
          <h2>Your Room details are as follows:</h2>
          <h3>Hostel No. -{data.hostel}</h3> <h3>Room No. -{data.room}</h3>
          <h3>Floor No. - {data.floor}</h3>
        </div>
      </div>
    </div>
  );
}
export default Final;

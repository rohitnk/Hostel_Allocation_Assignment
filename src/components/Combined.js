import React from "react";
import Gender from "./gender";
import { useState } from "react";
import Floor from "./Floor";
import ChooseHostel from "./ChooseHostel";
import firebase from "firebase";
import Final from "./Final";

export default function Combined() {
  console.log(firebase.auth().gender);
  const [gender, setgender] = useState(true);
  const [hostel, setHostel] = useState(false);
  const [floor, setFloor] = useState(false);
  const [comp, setComp] = useState(false);
  let print = () => {
    console.log("worked");
  };
  if (localStorage.getItem(`HostelUserInfo${firebase.auth().displayName}`))
    return <Final />;
  else
    return (
      <>
        {comp ? (
          <Final />
        ) : (
          <div>
            {gender && <Gender setgender={setgender} setHostel={setHostel} />}
            {hostel && (
              <ChooseHostel
                setFloor={setFloor}
                setHostel={setHostel}
                print={print}
              />
            )}
            {floor && <Floor setFloor={setFloor} setComp={setComp} />}
          </div>
        )}
      </>
    );
}

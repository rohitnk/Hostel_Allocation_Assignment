import React from "react";
import Gender from "./gender";
import Floor from "./Floor";
import ChooseHostel from "./ChooseHostel";
import firebase from "firebase";
import Final from "./Final";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
// import "./App.scss";

let user = {};

export default function Combined() {
  if (
    localStorage.getItem(`HostelUserInfo${firebase.auth().currentUser.email}`)
  ) {
    console.log("user already exist");
    return <Final />;
  } else
    return (
      <div>
        <Router>
          <Home path="/" component={Home} />
          <div>
            <Switch>
              <Route path="/gender" component={Gender} />
              <Route path="/Hostel" component={ChooseHostel} />
              <Route path="/Floor" component={Floor} />
              <Route path="/Final" component={Final} />
            </Switch>
          </div>
        </Router>
      </div>
    );
}
export { user };
// export default function Combined() {
//   console.log(firebase.auth().gender);
//   const [gender, setgender] = useState(true);
//   const [hostel, setHostel] = useState(false);
//   const [floor, setFloor] = useState(false);
//   const [comp, setComp] = useState(false);
//   let print = () => {
//     console.log("worked");
//   };
//   if (localStorage.getItem(`HostelUserInfo${firebase.auth().displayName}`))
//     return <Final />;
//   else
//     return (
//       <>
//         {comp ? (
//           <Final />
//         ) : (
//           <div>
//             {gender && <Gender setgender={setgender} setHostel={setHostel} />}
//             {hostel && (
//               <ChooseHostel
//                 setFloor={setFloor}
//                 setHostel={setHostel}
//                 print={print}
//               />
//             )}
//             {floor && <Floor setFloor={setFloor} setComp={setComp} />}
//           </div>
//         )}
//       </>
//     );
// }

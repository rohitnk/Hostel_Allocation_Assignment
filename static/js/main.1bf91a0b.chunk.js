(this["webpackJsonphostel-booking-app"]=this["webpackJsonphostel-booking-app"]||[]).push([[0],{40:function(e,t,n){},49:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var r=n(4),o=n.n(r),c=n(27),a=n.n(c),i=(n(40),n(28)),l=n(29),s=n(35),j=n(33),d=n(9),h=n.p+"static/media/girl.983d0276.png",u=n.p+"static/media/boy.32968b95.png",b=n(2);var g=function(){var e=Object(d.f)(),t=function(){return e.push("/Hostel")};return Object(b.jsxs)("div",{className:"contain",children:[Object(b.jsx)("img",{src:h,alt:"girl",className:"img",onClick:function(e){I.gender="female",t(),console.log(e)}}),Object(b.jsx)("img",{src:u,alt:"boy",className:"img",onClick:function(e){I.gender="male",t(),console.log(e)}})]})},f=n(34),m=[1,2,3,4,10,"","",5,9,8,7,6];function O(){var e=Object(r.useState)(1),t=Object(f.a)(e,2),n=t[0],o=t[1],c=Object(d.f)(),a=!1;return Object(b.jsx)("div",{children:Object(b.jsxs)("form",{className:"main",children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{htmlFor:"floor",children:"Floor"}),Object(b.jsxs)("select",{defaultValue:1,id:"floor",required:!0,onChange:function(e){console.log("onchange happened"),a=!0,console.log(a),I.floor=e.target.value,console.log(I.floor+" ........................."),o(e.target.value),console.log("Floor = "+n)},children:[Object(b.jsx)("option",{disabled:!0,children:" -- select an option -- "}),Object(b.jsx)("option",{value:1,children:"1"}),Object(b.jsx)("option",{value:2,children:"2"}),Object(b.jsx)("option",{value:3,children:"3"}),Object(b.jsx)("option",{value:4,children:"4"}),Object(b.jsx)("option",{value:5,children:"5"})]})]}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{className:"grid-container",onClick:function(e){console.log("checking value"),console.log(I),console.log(a+"  hahaa"),I.room=e.target.innerText,c.push("/Final")},children:Object(b.jsx)(p,{floor:n})})]})})}function p(e){var t=e.floor;return m.map((function(e,n){return Object(b.jsx)("div",{className:"grid-item ".concat(""===e&&"white"," ").concat(""!==e&&x(t,e)),children:e},"".concat(e).concat(n))}))}function x(e,t){return console.log(parseInt(e)),localStorage.getItem("hostelStorage")?(console.log("user "),JSON.parse(localStorage.getItem("hostelStorage"))[I.gender][I.hostel][parseInt(e)][t]?"green":"red"):"green"}n(49);function v(){var e=Object(d.f)(),t="";return t="male"===I.gender?"B":"G",Object(b.jsx)("div",{onClick:function(t){"table"!==t.target.innerText&&(e.push("/Floor"),I.hostel=t.target.innerText,console.log(t))},children:Object(b.jsxs)("div",{className:"grid-cont",id:"table",children:[Object(b.jsxs)("div",{className:"grid-i",children:[t,"1"]}),Object(b.jsxs)("div",{className:"grid-i",children:[t,"2"]}),Object(b.jsxs)("div",{className:"grid-i",children:[t,"3"]}),Object(b.jsxs)("div",{className:"grid-i",children:[t,"4"]}),Object(b.jsxs)("div",{className:"grid-i",children:[t,"5"]}),Object(b.jsxs)("div",{className:"grid-i",children:[t,"6"]})]})})}var y=n(12);function S(e){var t=e.isfirst,n=e.data;return Object(b.jsx)("div",{className:"cente",children:Object(b.jsxs)("div",{className:"innerdiv",children:[Object(b.jsx)("div",{className:"innerchild",children:t&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{children:"Success"}),Object(b.jsx)("br",{}),Object(b.jsx)("h3",{children:"Your Room has been booked successfully."})]})}),Object(b.jsxs)("div",{children:[!t&&Object(b.jsxs)("div",{className:"grandchild",children:[Object(b.jsxs)("h1",{children:["WELCOME ",n.displayName]})," ",Object(b.jsx)("h3",{children:"You have already Booked a room"})]}),Object(b.jsx)("h2",{children:"Your Room details are as follows:"}),Object(b.jsxs)("h3",{children:["Hostel No. -",n.hostel]})," ",Object(b.jsxs)("h3",{children:["Room No. -",n.room]}),Object(b.jsxs)("h3",{children:["Floor No. - ",n.floor]})]})]})})}var w=function(e){var t=e.isfirst,n=function(){var e;return localStorage.getItem("hostelStorage")?e=JSON.parse(localStorage.getItem("hostelStorage")):(e={male:{B1:new Array(6).fill().map((function(){return new Array(11).fill(!0)})),B2:new Array(6).fill().map((function(){return new Array(11).fill(!0)})),B3:new Array(6).fill().map((function(){return new Array(11).fill(!0)})),B4:new Array(6).fill().map((function(){return new Array(11).fill(!0)})),B5:new Array(6).fill().map((function(){return new Array(11).fill(!0)})),B6:new Array(6).fill().map((function(){return new Array(11).fill(!0)}))},female:{G1:new Array(6).fill().map((function(){return new Array(11).fill(!0)})),G2:new Array(6).fill().map((function(){return new Array(11).fill(!0)})),G3:new Array(6).fill().map((function(){return new Array(11).fill(!0)})),G4:new Array(6).fill().map((function(){return new Array(11).fill(!0)})),G5:new Array(6).fill().map((function(){return new Array(11).fill(!0)})),G6:new Array(6).fill().map((function(){return new Array(11).fill(!0)}))}},console.log("step hostelStorage var created"),console.log(e),localStorage.setItem("hostelStorage",JSON.stringify(e))),e}();if(console.log("before booking and when a component is mounted"),console.log(n),localStorage.getItem("HostelUserInfo".concat(y.a.auth().currentUser.email))){var r=JSON.parse(localStorage.getItem("HostelUserInfo".concat(y.a.auth().currentUser.email)));return Object(b.jsx)(S,{isfirst:t,data:r})}var o={email:y.a.auth().currentUser.email,complete:!0,room:I.room,floor:I.floor,hostel:I.hostel,displayName:y.a.auth().currentUser.displayName};return localStorage.setItem("HostelUserInfo".concat(y.a.auth().currentUser.email),JSON.stringify(o)),n[I.gender][I.hostel][I.floor][I.room]=!1,localStorage.setItem("hostelStorage",JSON.stringify(n)),Object(b.jsx)(S,{isfirst:t,data:o})},A=n(18);function N(e){var t=e.renderButton,n=Object(d.f)();return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{children:"Welcome to hostel booking "}),t&&Object(b.jsx)("button",{onClick:function(e){e.target.hidden=!0,n.push("/gender")},children:"Click to start"})]})}var I={};function k(){return localStorage.getItem("HostelUserInfo".concat(y.a.auth().currentUser.email))?(console.log("user already exist"),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(N,{renderButton:!1}),Object(b.jsx)(w,{isfirst:!1})]})):Object(b.jsx)("div",{children:Object(b.jsxs)(A.a,{children:[Object(b.jsx)(N,{path:"/",renderButton:!0}),Object(b.jsx)("div",{children:Object(b.jsxs)(d.c,{children:[Object(b.jsx)(d.a,{path:"/gender",component:g}),Object(b.jsx)(d.a,{path:"/Hostel",component:v}),Object(b.jsx)(d.a,{path:"/Floor",component:O}),Object(b.jsx)(d.a,{path:"/Final",children:Object(b.jsx)(w,{isfirst:!0})})]})})]})})}var C=n(31),F=n.n(C);y.a.initializeApp({apiKey:"AIzaSyBMitzZRVHSCT7et6-wCASei8N4dbKywhU",authDomain:"hostel-booking-app-968e5.firebaseapp.com"});var B=function(e){Object(s.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={isSignedIn:!1},e.uiConfig={signInFlow:"popup",signInOptions:[y.a.auth.GoogleAuthProvider.PROVIDER_ID,y.a.auth.FacebookAuthProvider.PROVIDER_ID],callbacks:{signInSuccess:function(){return!1}}},e.componentDidMount=function(){y.a.auth().onAuthStateChanged((function(t){e.setState({isSignedIn:!!t}),console.log("this state signin"),console.log(e.state.isSignedIn)}))},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("header",{children:[Object(b.jsx)("h1",{children:"Company Name"}),this.state.isSignedIn&&Object(b.jsx)("button",{onClick:function(){y.a.auth().signOut(),window.location.href="https://stupefied-rosalind-8c156b.netlify.app/"},children:"Logout"})]}),Object(b.jsx)("div",{className:"App",children:this.state.isSignedIn?Object(b.jsx)("div",{children:Object(b.jsx)(k,{})}):Object(b.jsxs)("div",{className:"firebaseui-container",children:[Object(b.jsxs)("div",{className:"cente",children:[Object(b.jsx)("h3",{children:"Hostel Allocation"}),Object(b.jsx)("h3",{children:"please Sign-in:"})]}),Object(b.jsx)(F.a,{uiConfig:this.uiConfig,firebaseAuth:y.a.auth()})]})})]})}}]),n}(r.Component);y.a;var U=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(B,{})})};a.a.render(Object(b.jsx)(o.a.StrictMode,{children:Object(b.jsx)(U,{})}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.1bf91a0b.chunk.js.map
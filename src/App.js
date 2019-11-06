import React, { useState } from "react";
import "./App.css";

import Switch from "./Switch";

function App() {
  let [ck1, setCheck1] = useState(false);
  let [ck2, setCheck2] = useState(true);
  let [ck3, setCheck3] = useState(false);

  // console.log(ck1, ck2, ck3);
  return (
    <div className="App">
      <Switch
        lib="FAST"
        color="#B5696E"
        checked={ck1}
        onHandle={() => {
          setCheck1(!ck1);
          if (ck2 && ck3) {
            setCheck3(false);
          }
        }}
      />
      <Switch
        lib="GOOD"
        color="#8FBF70"
        checked={ck2}
        onHandle={() => {
          setCheck2(!ck2);
          if (ck1 && ck3) {
            setCheck1(false);
          }
        }}
      />
      <Switch
        lib="CHEAP"
        color="#6A84C0"
        checked={ck3}
        onHandle={() => {
          // console.log("click CHEAP");
          setCheck3(!ck3);
          if (ck2 && ck1) {
            setCheck2(false);
          }
        }}
      />
    </div>
  );
}

export default App;

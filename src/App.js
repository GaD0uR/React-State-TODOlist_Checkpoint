import React from "react";
import Profile from "./Profile/Component/Profile";
import developer from "./developer.jpg";

import "./App.css";
import "./Profile/Component/Profile.css";

function App() {
  const handleNamee = (x) => {
    alert(x);
  };
  return (
    <div className="App">
      <h1 className="font" style={{ color: "red" }}>
        Checkpoint React Props
      </h1>
      <img src={developer} />
      <Profile
        className="font"
        name="Gadour Bessaâdi"
        bio="Practice makes perfect."
        job="Engineer"
        handleNamee={handleNamee}
      />
    </div>
  );
}

export default App;

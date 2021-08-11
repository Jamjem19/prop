import React from "react";
import Profilec from "./Profile/Profilec";
import Web from "./Web.jpg";

function App() {
  const name = "houssem";
  const last = "zouabi";
  const age = 27;
  const bio = "math professor";
  const profession = "developer";
  const alertme = () => {
    alert("jamjem");
  };
  return (
    <div className="App">
      <Profilec
        className="back"
        n={name}
        l={last}
        a={age}
        b={bio}
        p={profession}
        alert={alertme}
      >
        <img className="pic" height="500" src={Web} alt="pic"></img>
      </Profilec>
    </div>
  );
}

export default App;

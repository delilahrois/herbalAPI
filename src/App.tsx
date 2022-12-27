import { useState } from "react";
import "./App.css";

export const App = () => {
  const [msg, setMsg] = useState("");

  const getHerbs = () => {
    fetch("http://localhost:4000/herbs/")
      .then((res) => res.text())
      .then((data) => setMsg(data))
      .catch((error) => console.log(error));
  };

  return (
    <div className="App">
      <button onClick={() => getHerbs()}>welcome!</button>
      <p>{msg}</p>
    </div>
  );
};

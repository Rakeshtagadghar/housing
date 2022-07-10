import React, { useEffect, useState } from "react";
import Cards from "./Components/Cards";
import "./index.scss";

export default function App() {
  const [getapi, setapi] = useState(null);
  const [chars, setChars] = useState(null);
  const api = "https://rickandmortyapi.com/api";

  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((x) => setapi(x))
      .catch((x) => console.log(x));
  }, []);

  useEffect(() => {
    if (getapi?.characters) {
      fetch(getapi?.characters)
        .then((res) => res.json())
        .then((x) => setChars(x))
        .catch((x) => console.log(x));
    }
  }, [getapi]);

  console.log(chars);
  return (
    <div className="container-fluid">
      <Cards data={chars} />
    </div>
  );
}

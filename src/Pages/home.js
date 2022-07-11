import React, { useEffect, useState } from "react";
import Cards from "../Components/Cards";
import Pages from "../Components/Pagination";
import Header from "../Components/Header";
import MadeBy from "../Components/MadeBy";
import api from "../services/api";
import "../index.scss";

export default function App() {
  const [getapi, setapi] = useState(null);
  const [chars, setChars] = useState(null);
  const [page, setPage] = React.useState(1);
  const [loading, setLoading] = useState(false);

  const handleChange = (_, value) => {
    setPage(value);
    setLoading(true);
  };

  console.log(api);
  useEffect(() => {
    setLoading(true);
    fetch(api)
      .then((res) => res.json())
      .then((x) => setapi(x))
      .catch((x) => console.log(x));
  }, []);

  useEffect(() => {
    if (getapi?.characters) {
      fetch(`${getapi?.characters}/?page=${page}`)
        .then((res) => res.json())
        .then((x) => {
          setChars(x);
          setLoading(false);
        })
        .catch((x) => console.log(x));
    }
  }, [getapi, page]);

  console.log(chars);
  return (
    <div className="container-fluid">
      <Header />
      <Pages
        page={page}
        handleChange={handleChange}
        count={chars?.info?.pages}
      />
      <Cards data={chars} loading={loading} />
      <Pages
        page={page}
        handleChange={handleChange}
        count={chars?.info?.pages}
      />
      <MadeBy />
    </div>
  );
}

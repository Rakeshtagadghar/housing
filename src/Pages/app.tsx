import React, { useEffect, useState } from "react";
import Cards from "../Components/Cards";
import Pages from "../Components/Pagination";
import Header from "../Components/Header";
import MadeBy from "../Components/MadeBy";
import api from "../services/api";
import "../index.scss";

export default function App() {
  const [getapi, setapi] = useState<any>(null);
  const [chars, setChars] = useState<any>(null);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (_: any, value: number) => {
    setPage(value);
    setLoading(true);
  };

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

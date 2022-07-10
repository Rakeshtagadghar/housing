import React from "react";
import Card from "../Card";

const Cards = ({ data }) => {
  return (
    <div className="row mx-0 movies">
      {data &&
        data?.results?.length > 0 &&
        data?.results?.map((x) => {
          return <Card data={x} key={x?.id} />;
        })}
    </div>
  );
};

export default Cards;

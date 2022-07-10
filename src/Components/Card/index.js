import React from "react";
import "./index.scss";

const Cards = ({ data }) => {
  return (
    <div className="col-sm-12 col-md-4 p-3">
      <div className="rick">
        <div
          className="movie f8 m-0"
          style={{
            background: `transparent url(${data.image}) no-repeat`,
          }}
        ></div>
        <div>
          <h2> Name: {data?.name}</h2>
          <h2>Species: {data?.species}</h2>
          <p>Gender: {data?.gender}</p>
          <p>Status:{data?.status}</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;

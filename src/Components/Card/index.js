import React from "react";
import styled from "styled-components";
import Skeleton from "@mui/material/Skeleton";

const StyledCard = styled.div`
  border-radius: 0.5rem;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
  display: flex;
`;

const StyledName = styled.h2`
  font-family: fantasy, sans-serif;
`;

const StyledImage = styled.div`
  margin: 0;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
  opacity: 1;
  height: 300px;
  width: 300px;
  min-width: 300px;
  background-size: cover;
  background: transparent url(${(props) => props?.x.image}) no-repeat;
`;

const StyledID = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  p {
    margin-bottom: 0;
    font-family: fantasy, sans-serif;
    padding: 10px;
    font-size: 24px;
  }
`;

const StyledBox = styled.div`
  width: fill-available;
  position: relative;
`;

const Cards = ({ data, loading }) => {
  return (
    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-4 p-3">
      <StyledCard>
        {loading ? (
          <Skeleton
            animation="wave"
            variant="rectangular"
            width="100%"
            height="300px"
            sx={{ bgcolor: "grey.900" }}
          />
        ) : (
          <>
            <StyledImage x={data}></StyledImage>
            <StyledBox className="p-2">
              <StyledID>
                {" "}
                <p>{data?.id}</p>
              </StyledID>

              <StyledName className="ricxk-name">{data?.name}</StyledName>
              <p className="mb-2">
                Species: {data?.species}{" "}
                {data?.species === "Human" ? (
                  <i className="fa-solid fa-face-grin-wide"></i>
                ) : (
                  <i className="fa-solid fa-skull"></i>
                )}{" "}
                - {data?.status}
              </p>
              <p className="mb-2">
                Gender:{" "}
                {data?.gender === "Male" ? (
                  <i className=" fa-solid fa-person"></i>
                ) : (
                  <i className="fa-solid fa-person-dress"></i>
                )}
              </p>
              <p className="mb-2">First apperance: {data?.origin?.name}</p>
              <p className="mb-2">Last seen on: {data?.location?.name}</p>
            </StyledBox>
          </>
        )}
      </StyledCard>
    </div>
  );
};

export default Cards;

import React from "react"
import styled from "styled-components"
import Skeleton from "@mui/material/Skeleton"
import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFaceGrinWide,
  faPerson,
  faPersonDress,
  faSkull,
} from "@fortawesome/free-solid-svg-icons"

const StyledCard = styled.div`
  border-radius: 12px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
  display: flex;
  @media (max-width: 767px) {
    flex-direction: column;
  }
  @media (min-width: 1200px) and (max-width: 1700px) {
    flex-direction: column;
  }
`

const StyledName = styled.h2`
  font-family: fantasy, sans-serif;
`

interface ImageProps {
  data: any
}

const StyledImage = styled.div<ImageProps>`
  margin: 0;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
  opacity: 1;
  height: 300px;
  width: 300px;
  min-width: 300px;
  background-size: cover;
  border-radius: 12px;
  background: transparent url(${(props: any) => props?.data.image}) no-repeat;
  @media (max-width: 767px) {
    background-size: cover;
    height: 400px;
    width: auto;
  }
  @media (min-width: 1200px) and (max-width: 1700px) {
    background-size: cover;
    height: 400px;
    width: auto;
  }
`

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
`

const StyledBox = styled.div`
  width: fill-available;
  position: relative;
`

const Cards = (props: any) => {
  const navigate = useNavigate()
  const { data, loading, getapi } = props
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
            <StyledImage data={data}></StyledImage>
            <StyledBox className="p-2">
              <StyledID>
                {" "}
                <p>{data?.id}</p>
              </StyledID>

              <StyledName className="ricxk-name">{data?.name}</StyledName>
              <p className="mb-2">
                {data?.species}{" "}
                {data?.species === "Human" ? (
                  <FontAwesomeIcon icon={faFaceGrinWide} />
                ) : (
                  <FontAwesomeIcon icon={faSkull} />
                )}{" "}
                - {data?.status}
              </p>
              <p className="mb-2">
                {data?.gender}{" "}
                {data?.gender === "Male" ? (
                  <FontAwesomeIcon icon={faPerson} />
                ) : (
                  <FontAwesomeIcon icon={faPersonDress} />
                )}{" "}
              </p>
              <p className="mb-2">First apperance: {data?.origin?.name}</p>
              <p className="mb-2">Last seen on: {data?.location?.name}</p>
              <button
                type="button"
                className="btn btn-success"
                onClick={() => navigate("/character", { state: { data, getapi } })}
              >
                More info
              </button>
            </StyledBox>
          </>
        )}
      </StyledCard>
    </div>
  )
}

export default Cards

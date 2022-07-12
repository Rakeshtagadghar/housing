import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFaceGrinWide,
  faPerson,
  faPersonDress,
  faSkull,
} from "@fortawesome/free-solid-svg-icons"
import { useLocation, useNavigate } from "react-router-dom"
import Header from "../Components/Header"
import Episodes from "../Components/Episodes"
import OriginComp from "../Components/Origin"
import LocationComp from "../Components/Location"

const StyledName = styled.h1`
  font-family: fantasy;
`
const StyledP = styled.p`
  font-family: fantasy;
  font-size: 20px;
`
export const StyledLocation = styled.h2`
  font-family: fantasy;
`
export const StyledCard = styled.div`
  border-radius: 12px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
  display: flex;
  padding:20px;
  flex-direction: column;
  margin-bottom: 20px;
  }
`
const StyledDiv = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: row;
  // margin-bottom: 20px;
  @media (max-width: 767px) {
    flex-direction: column;
  }
  img {
    border-radius: 12px;
  }
`
const StyledDivs = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: row;
  @media (max-width: 767px) {
    flex-direction: column;
  }
`

function Character() {
  const location: any = useLocation()
  const navigate = useNavigate()
  const [origin, setOrigin] = useState<any>(null)
  const [locate, setlocate] = useState<any>(null)
  const [episodes, setEpisodes] = useState<any>(null)
  useEffect(() => {
    if (location.state?.data?.origin?.url) {
      fetch(location.state?.data?.origin?.url)
        .then((res) => res.json())
        .then((x) => {
          setOrigin(x)
        })
        .catch((x) => console.log(x))
    }

    if (location.state?.data?.location?.url) {
      fetch(location.state?.data?.location?.url)
        .then((res) => res.json())
        .then((x) => {
          setlocate(x)
        })
        .catch((x) => console.log(x))
    }

    const epi =
      location?.state.data?.episode &&
      location?.state.data?.episode.length > 0 &&
      location?.state.data?.episode.map((x: string) => x.split("episode/")[1])

    if (epi.length > 0) {
      fetch(`${location.state?.getapi?.episodes}/${epi.join(",")}`)
        .then((res) => res.json())
        .then((x) => {
          setEpisodes(x)
        })
        .catch((x) => console.log(x))
    }
  }, [location.state])

  return (
    <div className="container-fluid">
      <Header />
      <div className="p-3 text-right">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => navigate("/")}
        >
          Back{" "}
        </button>
      </div>

      <StyledCard>
        <StyledName>Character Information</StyledName>
        <StyledDiv>
          <img
            src={location?.state?.data?.image}
            alt={location?.state?.data?.name}
            height={300}
            width={300}
          />
          <div className="mx-3">
            <StyledP>Name: {location?.state?.data?.name}</StyledP>
            <p>Chracter ID: {location?.state?.data?.id}</p>
            <p className="mb-2">
              {location?.state?.data?.species}{" "}
              {location?.state?.data?.species === "Human" ? (
                <FontAwesomeIcon icon={faFaceGrinWide} />
              ) : (
                <FontAwesomeIcon icon={faSkull} />
              )}{" "}
              - {location?.state?.data?.status}
            </p>
            <p className="mb-2">
              {location?.state?.data?.gender}{" "}
              {location?.state?.data?.gender === "Male" ? (
                <FontAwesomeIcon icon={faPerson} />
              ) : (
                <FontAwesomeIcon icon={faPersonDress} />
              )}{" "}
            </p>
            <p className="mb-2">
              First apperance: {location?.state?.data?.origin?.name}
            </p>
            <p className="mb-2">
              Last seen on: {location?.state?.data?.location?.name}
            </p>
          </div>
        </StyledDiv>
      </StyledCard>

      <OriginComp location={location} origin={origin} />
      <LocationComp location={location} locate={locate} />
      {episodes && (
        <StyledCard>
          <StyledLocation>Featured in following episodes</StyledLocation>
          <Episodes episodes={episodes} />
        </StyledCard>
      )}
    </div>
  )
}

export default Character

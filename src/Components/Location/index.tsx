import React from "react"
import { StyledCard, StyledLocation } from "../../Pages/character"

const Location = (props: any) => {
  const { location, locate } = props
  return (
    <>
      {location.state?.data?.location?.url === "" && (
        <StyledCard>
          {" "}
          <StyledLocation>Location</StyledLocation>
          <h3>Unknown</h3>
        </StyledCard>
      )}
      {locate && (
        <StyledCard>
          <StyledLocation>Location</StyledLocation>
          <h3>{locate?.name}</h3>
          <p>Residents: {locate?.residents?.length}</p>
          <p>Dimentsion: {locate?.dimension}</p>
          <p>Type: {locate?.type}</p>
        </StyledCard>
      )}
    </>
  )
}

export default Location

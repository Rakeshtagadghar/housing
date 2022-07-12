import React from "react"
import { StyledCard, StyledLocation } from "../../Pages/character"

const Origin = (props: any) => {
  const { location, origin } = props
  return (
    <>
      {location.state?.data?.origin?.url === "" && (
        <StyledCard>
          {" "}
          <StyledLocation>Origin Information</StyledLocation>
          <h3>Unknown</h3>
        </StyledCard>
      )}
      {origin && (
        <StyledCard>
          {" "}
          <StyledLocation>Origin Information</StyledLocation>
          <h3>{origin?.name}</h3>
          <p>Residents: {origin?.residents?.length}</p>
          <p>Dimentsion: {origin?.dimension}</p>
          <p>Type: {origin?.type}</p>
        </StyledCard>
      )}
    </>
  )
}

export default Origin

import React from "react"
import styled from "styled-components"

const StyledName = styled.h2`
  font-family: fantasy, sans-serif;
`
const StyledCard = styled.div`
  border-radius: 12px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
  display: flex;
  padding: 20px;
  flex-direction: column;
  @media (max-width: 767px) {
    flex-direction: column;
  }
  @media (min-width: 1200px) and (max-width: 1700px) {
    flex-direction: column;
  }
`

const Episodes = (props: any) => {
  const { episode } = props
  console.log(episode)
  return (
    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-4 p-3">
      <StyledCard>
        {" "}
        <StyledName>
          {episode?.id}.{episode?.name}
        </StyledName>
        <p>Episode: {episode?.episode}</p>
        <p>Air date: {episode?.air_date}</p>
        <p>Number of characters in episode: {episode?.characters?.length}</p>
      </StyledCard>
    </div>
  )
}

export default Episodes

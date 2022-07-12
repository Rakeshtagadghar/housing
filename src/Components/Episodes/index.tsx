import React from "react"
import styled from "styled-components"
import Episode from "../Episode"

const StyledCards = styled.div`
  list-style-type: none;
  padding: 2rem 0;
  margin: 0;
`

const Episodes = (props: any) => {
  const { episodes, loading } = props
  return (
    <StyledCards className="row">
      {episodes &&
        episodes?.length > 0 &&
        episodes?.map((x: any) => {
          return <Episode episode={x} key={x?.id} loading={loading} />
        })}

        {episodes?.name && <Episode episode={episodes} key={episodes?.id} loading={loading} />}
    </StyledCards>
  )
}

export default Episodes

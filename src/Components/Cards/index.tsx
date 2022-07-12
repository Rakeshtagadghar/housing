import React from "react"
import styled from "styled-components"
import Card from "../Card"

const StyledCards = styled.div`
  list-style-type: none;
  padding: 2rem 0;
  margin: 0;
`

const Cards = (props: any) => {
  const { data, loading, getapi } = props
  return (
    <StyledCards className="row">
      {data &&
        data?.results?.length > 0 &&
        data?.results?.map((x: any) => {
          return <Card data={x} key={x?.id} loading={loading} getapi={getapi} />
        })}
    </StyledCards>
  )
}

export default Cards

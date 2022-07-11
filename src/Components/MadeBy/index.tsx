import React from "react"
import styled from "styled-components"

const StyledP = styled.p`
  font-family: fantasy, sans-serif;
  color: white;
  font-size: 20px;
`
const StyledA = styled.a`
  font-family: fantasy, sans-serif;
  color: white;
  font-size: 20px;
  :hover {
    color: white;
  }
`
const MadeBy = () => {
  return (
    <>
      <StyledP>
        Made by: Rakesh Tagadghar,{" "}
        <StyledA href="https://github.com/Rakeshtagadghar/housing">
          {" "}
          Github Link
        </StyledA>
      </StyledP>
    </>
  )
}

export default MadeBy

import React from "react"
import styled from "styled-components"
import Center from "../../Styles"

const StyledH1 = styled.h1`
  font-family: fantasy;
`

const Header = () => {
  return (
    <Center>
      <StyledH1>Rick and Morty universe characters</StyledH1>
    </Center>
  )
}
export default Header

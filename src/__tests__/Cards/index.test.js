import "@testing-library/jest-dom"
import * as React from "react"
import { render, screen } from "@testing-library/react"
import Cards from "../../Components/Cards/index.tsx"
import { testData } from "../Card/index.test"

test("shows null when data is not present", () => {
  const testMessage = "First apperance"
  render(<Cards data={null} loading />)

  // query* functions will return the element or null if it cannot be found
  // get* functions will return the element or throw an error if it cannot be found
  expect(screen.queryByText(testMessage)).toBeNull()
})

test("shows all cards when data is present", () => {
  const testMessage = "First apperance"
  render(<Cards data={testData} loading={false} />)

  // query* functions will return the element or null if it cannot be found
  // get* functions will return the element or throw an error if it cannot be found
  expect(screen.queryByText(testMessage)).toBeNull()
})

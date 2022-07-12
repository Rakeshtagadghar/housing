import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "../Pages/app"
import Character from "../Pages/character"

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character" element={<Character />} />
      </Routes>
    </>
  )
}

export default Routing

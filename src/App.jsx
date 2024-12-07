import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Hotel from "./pages/Hotel"
import Hotels from "./pages/Hotels"

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/hotels' element={<Hotels />} />
        <Route path='/hotels/:id' element={<Hotel />} />
      </Routes>
    </Router>
  )
}

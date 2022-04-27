import React from 'react'
import Games from '../pages/Games'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

const RoutesManager = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Games/>}/>
      </Routes>
    </Router>
  )
}

export default RoutesManager
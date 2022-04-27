import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Styles from './styled'
import Header from '../components/Header'
import Games from '../pages/Games'
import News from '../pages/News'
import Contact from '../pages/Contact'
const RoutesManager = () => {
  return (
    <Styles>
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Games/>}/>
        <Route path='/news' element={<News/>}/>
        <Route path='/contact' element={<Contact/>}/>

      </Routes>
    </Router>
    </Styles>

  )
}

export default RoutesManager
import { useState } from 'react'
import { BrowserRouter as Router, NavLink, Route, Routes } from 'react-router-dom'

import Navigation from './Components/Navigation/Navigation'
import Advertisement from './Components/Advertisement/Advertisement'
import AboutUs from './Components/AboutUs/AboutUs'
import News from './Components/News/News'

import Home from './Pages/Home'
import  Profile  from './Pages/Profile'
import  Error404  from './Pages/Error404'

import './style/App.scss'

function App() {


  return (
    <>
      <Router>
        <header>
          <Navigation />
        </header>
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='*' element={<Error404 />} />
          </Routes>
        </main>
        <footer>

        </footer>
      </Router>


    </>
  )
}

export default App

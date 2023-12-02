import { useState } from 'react'
import { BrowserRouter as Router, NavLink, Route, Routes } from 'react-router-dom'

import Navigation from './Components/Navigation/Navigation.jsx'
import Footer from './Components/Footer/Footer.jsx'


import Home from './Pages/Home/Home.jsx'
import Saves from './Pages/Saves/Saves.jsx'
import Status from './Pages/Status/Status.jsx'
import Profile from './Pages/Profile/Profile.jsx'
import Cart from './Pages/Cart/Cart.jsx'
// import  Profile  from './Pages/Profile.jsx'
// import  Error404  from './Pages/Error404.jsx'

import './style/App.scss'

function App() {





  return (
    <>
      <Router>
        <header>
          <Navigation/>
        </header>
        <main>
          <Routes>
            <Route path='/' element={<Home  />} />
            <Route path='/saves' element={<Saves />} />
            <Route path='/status' element={<Status />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </Router>


    </>
  )
}

export default App

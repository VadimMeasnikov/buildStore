import { useState } from 'react'
import { BrowserRouter as Router, NavLink, Route, Routes } from 'react-router-dom'

import Navigation from './Components/Navigation/Navigation.jsx'
import Footer from './Components/Footer/Footer.jsx'

import Home from './Pages/Home/Home.jsx'
import Saves from './Pages/Saves/Saves.jsx'
import Status from './Pages/Status/Status.jsx'
import Profile from './Pages/Profile/Profile.jsx'
import Cart from './Pages/Cart/Cart.jsx'
import Contacts from './Pages/Contacts/Contacts.jsx'

import usersData from './data/users.json'

import { arrAllCatalog } from './data/arrAllCatalog.js'

import './style/App.scss'

function App() {

  const [allArrCards, setAllArrCards] = useState(arrAllCatalog);
  const [basket, setBasket] = useState([]);
  const [sumPriceNum, setSumPriceNum] = useState(0)
  const [users, setUsers] = useState(usersData)
  const arrUsers = { users, setUsers }
  const arrCardsState = { allArrCards, setAllArrCards };
  const arrBasket = { basket, setBasket };
  const sumPrice = { sumPriceNum, setSumPriceNum }

  return (
    <>
      <Router>
        <header>
          <Navigation sumPrice={sumPrice} arrUsers={arrUsers}/>
        </header>
        <main>
          <Routes>
            <Route path='/' element={<Home arrCardsState={arrCardsState} arrBasket={arrBasket} />} />
            <Route path='/saves' element={<Saves />} />
            <Route path='/status' element={<Status />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/cart' element={<Cart arrBasket={arrBasket} />} />
            <Route path='/contacts' element={<Contacts />} />
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

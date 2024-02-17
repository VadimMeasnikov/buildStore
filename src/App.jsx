import { useState, useEffect } from 'react'
import { BrowserRouter as Router, NavLink, Route, Routes } from 'react-router-dom'
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'
// import { auth } from './server/server.js'

import Navigation from './Components/Navigation/Navigation.jsx'
import Footer from './Components/Footer/Footer.jsx'

import Home from './Pages/Home/Home.jsx'
import Catalog from './Pages/Catalog/Catalog.jsx'
import Saves from './Pages/Saves/Saves.jsx'
import Status from './Pages/Status/Status.jsx'
import Profile from './Pages/Profile/Profile.jsx'
import Cart from './Pages/Cart/Cart.jsx'
import Contacts from './Pages/Contacts/Contacts.jsx'
import Order from './Pages/Order/Order.jsx'
import Error404 from './Pages/Error404/Error404.jsx'
import Product from './Pages/Product/Product.jsx'
import NewCards from './Pages/New/NewCards.jsx'

import usersData from './data/users.json'

import { arrAllCatalog } from './data/arrAllCatalog.js'

import './style/App.scss'

function App() {

  const [allArrCatalog, setAllArrCatalog] = useState(arrAllCatalog);
  const [basket, setBasket] = useState([]);
  const [sumPriceNum, setSumPriceNum] = useState(0)
  const [users, setUsers] = useState(usersData)
  const [saves, setSaves] = useState([])
  const arrUsers = { users, setUsers }
  const products = { allArrCatalog, setAllArrCatalog };
  const arrBasket = { basket, setBasket };
  const sumPrice = { sumPriceNum, setSumPriceNum }
  const arrSaves = { saves, setSaves }

  //cart
  const [overallPrice, setOverallPrice] = useState(0)
  const [discount, setDiscount] = useState(7);
  const [totalPrice, setTotalPrice] = useState(0)
  const product_pay = {
    overallPrice, setOverallPrice,
    discount, setDiscount,
    totalPrice, setTotalPrice
  }

  //registration
  const [isRegistration, setIsRegistration] = useState(false)
  const [isRegFormValid, setIsRegFormValid] = useState(false)

  const [userNameReg, setUserNameReg] = useState('')
  const [userNameRegDirty, setUserNameRegDirty] = useState(false)
  const [userNameRegError, setUserNameRegError] = useState('Это поле обязательно!')

  const [userSurnameReg, setUserSurnameReg] = useState('')
  const [userSurnameRegDirty, setUserSurnameRegDirty] = useState(false)
  const [userSurnameRegError, setUserSurnameRegError] = useState('Это поле обязательно!')

  const [userTelReg, setUserTelReg] = useState('')
  const [userTelRegDirty, setUserTelRegDirty] = useState(false)
  const [userTelRegError, setUserTelRegError] = useState('Это поле обязательно!')

  const [userEmailReg, setUserEmailReg] = useState('')
  const [userEmailRegDirty, setUserEmailRegDirty] = useState(false)
  const [userEmailRegError, setUserEmailRegError] = useState('Email не может быть пустым!')

  const [userPasswordReg, setUserPasswordReg] = useState('')
  const [userPasswordRegDirty, setUserPasswordRegDirty] = useState(false)
  const [userPasswordRegError, setUserPasswordRegError] = useState('Пароль не может быть пустым!')

  const [userPasswordConfirmationReg, setUserPasswordConfirmationReg] = useState('');
  const [userPasswordConfirmationRegDirty, setUserPasswordConfirmationRegDirty] = useState(false)
  const [userPasswordConfirmationRegError, setUserPasswordConfirmationRegError] = useState('Это поле обязательно!')


  const registration = {
    isRegistration, setIsRegistration,
    isRegFormValid, setIsRegFormValid,

    userNameReg, setUserNameReg,
    userNameRegDirty, setUserNameRegDirty,
    userNameRegError, setUserNameRegError,

    userSurnameReg, setUserSurnameReg,
    userSurnameRegDirty, setUserSurnameRegDirty,
    userSurnameRegError, setUserSurnameRegError,

    userTelReg, setUserTelReg,
    userTelRegDirty, setUserTelRegDirty,
    userTelRegError, setUserTelRegError,

    userEmailReg, setUserEmailReg,
    userEmailRegDirty, setUserEmailRegDirty,
    userEmailRegError, setUserEmailRegError,

    userPasswordReg, setUserPasswordReg,
    userPasswordRegDirty, setUserPasswordRegDirty,
    userPasswordRegError, setUserPasswordRegError,

    userPasswordConfirmationReg, setUserPasswordConfirmationReg,
    userPasswordConfirmationRegDirty, setUserPasswordConfirmationRegDirty,
    userPasswordConfirmationRegError, setUserPasswordConfirmationRegError
  }

  //authorization
  const [isAuthorization, setIsAuthorization] = useState(false)
  const [isAuthorizationValid, setIsAuthorizationValid] = useState(false);
  const [authorizationEmail, setAuthorizationEmail] = useState('')
  const [authorizationPassword, setAuthorizationPassword] = useState('')



  const authorization = {
    isAuthorization, setIsAuthorization,
    isAuthorizationValid, setIsAuthorizationValid,

    authorizationEmail, setAuthorizationEmail,
    authorizationPassword, setAuthorizationPassword
  }


  function addToSaves(product, category) {
    setSaves((prevSaves) => [...prevSaves, product]);
  }

  function deleteFromSaves(item) {
    setSaves((prev) => prev.filter((itemDel) => itemDel.id !== item.id))
  }

  function addToBasket(product, category) {

    if (product.availability === false) {
      alert('К сожалению, данного товара нет в наличии')
      return 
    } else {
      setBasket([...basket, {
        product,
        count: 1,
        category: category
      }])
      return
    }

   
  }

  function deleteProductBasket(item) {
    setBasket((prev) =>
      prev.filter((itemDel) => itemDel.product.id !== item.id)
    );


  }
  let arrCardFunctions = { addToBasket, addToSaves, deleteFromSaves, deleteProductBasket }



  return (
    <>
      <Router>
        <header>
          <Navigation
            sumPrice={sumPrice}
            arrUsers={arrUsers}
            authorization={authorization}
            registration={registration}
            arrBasket={arrBasket}
            products={products}
            product_pay={product_pay}
            arrSaves={arrSaves}
          />
        </header>
        <main>
          <Routes>
            <Route path='/' element={<Home products={products} arrBasket={arrBasket} arrSaves={arrSaves} arrCardFunctions={arrCardFunctions} />} />
            <Route path='/saves' element={<Saves arrSaves={arrSaves} arrBasket={arrBasket} arrCardFunctions={arrCardFunctions} />} />
            <Route path='/status' element={<Status />} />
            <Route path='/profile' element={<Profile arrUsers={arrUsers}  registration={registration} authorization={authorization} />} />
            <Route path='/cart' element={<Cart arrBasket={arrBasket} products={products} product_pay={product_pay} arrCardFunctions={arrCardFunctions} />} />
            <Route path='/contacts' element={<Contacts />} />
            <Route path='/order' element={<Order />} />
            <Route path='*' element={<Error404 />} />
            <Route path='/newcards' element={<NewCards products={products} arrCardFunctions={arrCardFunctions} />} />
            <Route path='/catalog' element={<Catalog products={products} arrCardFunctions={arrCardFunctions}/>} />
            <Route path='/product/:id'element={<Product/>} />
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

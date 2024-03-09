import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from 'firebase/auth';



import ProfileData from '../../Components/ProfileData/ProfileData'
import Registration from '../../Components/Registration/Registration'

import adv_1 from '../../img/adv1.png'
import adv_2 from '../../img/adv2.png'

import './profile.scss'

export default function Profile({ arrUsers, registration, authorization }) {

  const [isOrdersState, setIsOrdersState] = useState(true)
  const [isProfileState, setIsProfileState] = useState(false)
  const [activeUser, setActiveUser] = useState(false)
  const [reg, setIsReg] = useState(true)


  const auth = getAuth()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setActiveUser(user);
        registration.isRegistration(false)
        authorization.isAuthorization(false)
        console.log(user);
      } else {
        registration.isRegistration(true)
      }
    })
  }, [onAuthStateChanged])


  function handlePageProfile() {
    setIsOrdersState(false)
    setIsProfileState(true)
  }
  function handlePageOrderHistory() {
    setIsOrdersState(true)
    setIsProfileState(false)
  }


  return (



    <div className='profile'>

      <div className="title"><h2>Личный кабинет</h2></div>
      <div className="profile-container">
        <div className="profile_content1">
          <div className="profile_btn">
            <button onClick={handlePageOrderHistory} className='ordHistory'>История заказов</button>
            <button onClick={handlePageProfile} className='userInfo'>Личный кабинет</button>
          </div>
          <div className="profile_advertisement">
            <Link className='adv_box'>
              <img src={adv_1} alt="" />
            </Link>
            <Link className='adv_box'>
              <img src={adv_2} alt="" />
            </Link>
          </div>
        </div>
        <div className="profile_content2">
          {!isProfileState ? <p>Заказы</p> : <ProfileData arrUsers={arrUsers} registration={registration} authorization={authorization} />}
        </div>
      </div>
    </div>
  )
}

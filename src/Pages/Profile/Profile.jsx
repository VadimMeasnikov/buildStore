import { useState } from 'react'
import { Link } from 'react-router-dom'


import ProfileData from '../../Components/ProfileData/ProfileData'

import adv_1 from '../../img/adv1.png'
import adv_2 from '../../img/adv2.png'

import './profile.scss'

export default function Profile() {

  const [isOrdersState, setIsOrdersState] = useState(true)
  const [isProfileState, setIsProfileState] = useState(false)



  function handlePageProfile() {
    setIsOrdersState((prevIsOrdersState) => !prevIsOrdersState)
    setIsProfileState((prevIsProfileState) => !prevIsProfileState)
  }
  function handlePageOrderHistory() {
    setIsOrdersState((prevIsOrdersState) => !prevIsOrdersState)
    setIsProfileState((prevIsProfileState) => !prevIsProfileState)
  }


  return (

    <div className='profile'>
   
      <div className="title"><h2>Личный кабинет</h2></div>
      <div className="profile-container">
        <div className="profile_content1">
          <div className="profile_btn">
            <button onClick={handlePageProfile} className='ordHistory'>История заказов</button>
            <button onClick={handlePageOrderHistory} className='userInfo'>Личный кабинет</button>
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
          {!isProfileState ? <p>Заказы</p> : <ProfileData arrUsers={arrUsers} />}
        </div>
      </div>
    </div>
  )
}

import React from 'react'
import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './cart.scss'

export default function Cart() {



  return (
    <div className='cart-container'>
      <div className="titleBox">
        <h2 className='title'>Корзина</h2>
        <div className="contBuy"> <Link to='/'>Продолжить покупки</Link></div>
      </div>

      <div className="contentTitle">
        <div className="contentTitle1">
          <h3 className='contentTitleText mainText'>
            Название
          </h3>
        </div>
        <div className="contentTitle2">
          <h3 className='contentTitleText'>
            Стоимость
          </h3>
          <h3 className='contentTitleText'>
            Количество
          </h3>
          <h3 className='contentTitleText'>
            Итого
          </h3>
        </div>
      </div>
    </div>
  )
}

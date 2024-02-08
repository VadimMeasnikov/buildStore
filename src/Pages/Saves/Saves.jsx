import React, { useState } from 'react'

import './saves.scss'
// import CardSaves from '../../Components/CardSaves/CardSaves'
import Card from '../../Components/Card/Card'


export default function Saves({ arrSaves, arrBasket, arrCardFunctions }) {

  function getItemCount(arr) {
    if (arr.length == 1) {
      return 'товар'
    } else if (arr.length < 5) {
      return 'товара'
    } else if (arr.length > 4 && arr.length < 21) {
      return 'товаров'
    }
  }



  return (
    <div className='saves'>
      <div className="saves-container">
        <div className="title-box">
          <h2 className='saves-title'>Избранное</h2>
          <p className='item-count'>{arrSaves.saves.length} {getItemCount(arrSaves.saves)} </p>
        </div>
        <div className="items-container">
        {
          arrSaves.saves.map((item) => (
            <Card arrCardFunctions={arrCardFunctions}  item={item} key={item.id} arrSaves={arrSaves} arrBasket={arrBasket}/>
          ))
        }
        </div>
      
      </div>
    </div>
  )
}

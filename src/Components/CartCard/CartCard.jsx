import React from 'react'
import './cart_card.scss'

export default function CartCard(props) {
  return (
    <div className='cartCard'>
        <div className="mainContent">
            <div className="image">
                <img src={props.image} alt="" />
            </div>
            <div className="title">
                <p className='category'></p>
                <p>{props.title}</p>
            </div>
        </div>
        <div className="priceContent">
            <button>-</button>
            <p>1</p>
            <button>+</button>
        </div>
        <div className="sumPrice">
            <p>{countFunction}</p>
        </div>
        <div className="deleteCard">
            <button><img src="../../img/close.png" alt="" /></button>
        </div>
    </div>
  )
}

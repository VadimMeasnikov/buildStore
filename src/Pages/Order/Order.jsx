
import React from 'react'
import './order.scss'

export default function Order() {
  return (
    <div className='order'>
        <h2 className='order-title'>Оформление заказа</h2>
        <div className="order-container">
            <div className="userData_content">

            </div>
            <div className="price_container">
                <div className="price_box"></div>
                <div className="box"></div>
            </div>
        </div>
    </div>
  )
}

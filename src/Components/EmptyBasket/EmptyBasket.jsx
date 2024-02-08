import React from 'react'
import { Link } from 'react-router-dom'
import './emptyBasket.scss'

export default function EmptyBasket() {
    return (
        <div className='emptyBasket'>
            <div className="emptyBasket-container">
                <div className="emptyBasket-content_box">
                    <p className='emptyBasket-title'>Ваша корзина пуста!</p>
                    <Link className='emptyBasket-link' to='/'>На главную</Link>
                </div>
            </div>
        </div>
    )
}

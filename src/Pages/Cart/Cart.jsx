import React from 'react'
import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'

import BasketProduct from '../../Components/BasketProduct/BasketProduct'
import EmptyBasket from '../../Components/EmptyBasket/EmptyBasket'

import line from '../../img/cart_line.png'

import './cart.scss'

export default function Cart({ arrBasket, product_pay, arrCardFunctions}) {

  if (arrBasket.basket.length == 0) {
    return <EmptyBasket />
  }


  function handlePlusProduct(id) {
    arrBasket.setBasket(prev => prev.map((item) => {
      if (item.product.id === id) {
        return { ...item, count: item.count + 1 }
      }
      return item
    }))
  }
  function handleMinusProduct(id) {
    arrBasket.setBasket(prev => prev.map((item) => {
      if (item.product.id === id && item.count > 1) {
        return { ...item, count: item.count - 1 }
      }
      return item
    }))
  }


  const basketItemFunctions = {
    handlePlusProduct, handleMinusProduct
  }

  function getTotalPrice() {
    let sum = 0
    let discount = 0.009
    let discountResult = 0
    let result = 0
    arrBasket.basket.map((item) => (
      sum += item.product.price * item.count
    ))
    discountResult += sum * discount
    result = sum - discountResult

    product_pay.setOverallPrice(sum);
    product_pay.setDiscount(discountResult)
    product_pay.setTotalPrice(result)
  }


  useEffect(() => {
    getTotalPrice()
  })

  return (
    <div className="cart">
      <div className='cart-container'>
        <div className="titleBox">
          <h2 className='title'>Корзина</h2>
          <Link to='/' className="toCatalog">Продолжить покупки</Link>
        </div>

        <div className="contentTitle">
          <div className="contentTitle1">
            <h3 className='contentTitleText mainText'>
              Название
            </h3>
          </div>
          <div className="contentTitle-container">
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
        <div className="products_container">
          {arrBasket.basket.map((item) => (
            <BasketProduct  arrCardFunctions={ arrCardFunctions } basketItemFunctions={basketItemFunctions} product_pay={product_pay} arrBasket={arrBasket} key={item.product.id} item={item} />
          ))}
        </div>

        <div className="cart_total_price">
          <div className="cart_total_price_container">
            <div className="overall_price">
              <p className='cart_text_content'>Стоимость </p>
              <p className='cart_text_content'> {product_pay.overallPrice} ₽</p>
            </div>
            <div className="discount">
              <p className='cart_text_content'>Скидка !</p>
              <p className='cart_text_content'>-{(product_pay.discount).toFixed(1)} ₽</p>
            </div>
            <div className="total_price">
              <p className='cart_text_content'>К оплате </p>
              <p className='total_price_text'>{(product_pay.totalPrice).toFixed(1)}  ₽</p>
            </div>

            <Link to='/order' className='cart_finish_link'>Перейти к оформлению</Link>
          </div>
        </div>
      </div>
    </div>

  )
}

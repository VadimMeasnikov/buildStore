import React from 'react'
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { useState } from 'react';

import deleteImg from '../../img/close.png'

import './basketProduct.scss'


export default function BasketProduct({ item, arrBasket, product_pay, basketItemFunctions,  arrCardFunctions}) {

    const {addToBasket, addToSaves, deleteFromSaves, deleteProductBasket} = arrCardFunctions
    const totalPrice = item.product.price * item.count;

    return (
        <div className='basketProduct'>
            <div className="basketProduct-container">
                <div className="product-logo">
                    <img src={`/src/img/${item.product.image}`} alt="" />
                </div>
                <div className="basket-product-title">
                    <p className='category-title'>{item.product.category}</p>
                    <p className='product-title'>{item.product.title} </p>
                </div>
                <div className="cost">
                    <p className='cost-title'>{item.product.price} руб</p>
                </div>
                <div className="count">
                    <div className="count-container">
                        <AiOutlineMinus onClick={() => {
                            basketItemFunctions.handleMinusProduct(item.product.id);
                        }} className='countProduct_btn' />
                        <p>{item.count}</p>
                        <AiOutlinePlus onClick={() => {
                            basketItemFunctions.handlePlusProduct(item.product.id);
                        }} className='countProduct_btn' />
                    </div>
                </div>
                <div className="totalPrice_content"><p className='totalPrice'>{totalPrice} руб</p></div>
                <div className="deleteProduct">
                    <button onClick={() => { deleteProductBasket(item) }} className='deleteProduct_btn'><img src={deleteImg} alt="" /></button>
                </div>
            </div>
        </div>
    )
}

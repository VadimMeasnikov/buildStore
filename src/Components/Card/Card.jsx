import React from 'react'
import './card.scss'
import { useState } from 'react'
import { createContext, useContext } from 'react'

import whiteHeart from '../../img/whiteHeart.png'
import redHeart from '../../img/redHeart.png'
import cartBefore from '../../img/cartBefore.png'
import cartAfter from '../../img/cartAfter.png'
import weHave from '../../img/weHave.png'

export default function Card(props) {
    const [isHeart, setIsheart] = useState(false)
    const [isCart, setIsCart] = useState(false)
    const [isStatus, setIsStatus] = useState(false)
    const [isStock, setIsStock] = useState(false)

    const [countCart, setCountCart] = useState(0)
    const cartArr = []
    const [countCartArr, setCountCartArr] = useState([])


    function handleHeart() {
        if (isHeart === false) {
            setIsheart((prevIsHeart) => !prevIsHeart)
            let index = 1
            setCountCartArr([...countCartArr])
            setCountCart((prev) => prev + 1)
        } else if (isHeart === true) {
            setIsheart((prevIsHeart) => !prevIsHeart)
            setCountCart((prev) => prev - 1)
            let index = 1
            setCountCartArr([...countCartArr, index])
        }

        console.log('i am arr length ' + countCartArr.length)

    }

    function handleCart() {
        setIsCart((prevIsCart) => !prevIsCart)
        setCountCart((prevCountCart) => prevCountCart + 1)
        console.log(setCountCart)
    }

    // function checkStatus(arr) {
    //     if (arr.stock === true) {
    //         console.log(true)
    //         return (
    //             <div div className="stockBox" >
    //                 <img src={weHave} alt="" />
    //                 <p className='stockText'>в наличии</p>
    //             </div >
    //         )
    //     }
    // }

    return (

        <div className="card">
            <div className="card-container">
                <div className="cardTerminal1">
                    <div className="cardStatus">

                    </div>
                    <div className="cardSaves">
                        {!isHeart ? <img onClick={handleHeart} src={whiteHeart} alt="" /> : <img onClick={handleHeart} src={redHeart}></img>}
                        {/* {!isHeart ?
                            <img onClick={() => { handleHeart; setCountCart((prev) => prev - 1) }} src={whiteHeart} alt="" />
                            :
                            <img onClick={() => { handleHeart; setCountCart((prev) => prev + 1) }} src={redHeart}></img>
                        } */}
                    </div>

                </div>

                <div className="cardContent">
                    <div className="cardImage">
                        <img className='cardImageContent' src={props.img} alt="" />
                    </div>
                    <div className="cardInfo">
                        <p>{props.title} {props.type} {props.material} {props.power} {props.size}  {props.model} {props.volume} {props.color}</p>
                    </div>
                    <div className="cardTerminal2">
                        <div className="cardPrice">
                            <p>{props.price}</p>
                        </div>
                        <div className="cardFunctBox">
                            <div className="cardStatus">
                                <img src={weHave} alt="" />
                                <p>в наличии</p>
                            </div>
                            <div className="cardCart">
                                {!isCart ? <img onClick={handleCart} src={cartBefore} alt="" /> : <img onClick={handleCart} src={cartAfter}></img>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {countCart}
        </div>
    )
}

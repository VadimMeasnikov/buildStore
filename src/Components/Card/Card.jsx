import React from 'react'
import './card.scss'
import { useState, useEffect } from 'react'


import whiteHeart from '../../img/whiteHeart.png'
import redHeart from '../../img/redHeart.png'
import cartBefore from '../../img/cartBefore.png'
import cartAfter from '../../img/cartAfter.png'
import weHave from '../../img/weHave.png'

export default function Card({ item, arrBasket, category, arrSaves, arrCardFunctions }) {

    const { addToBasket, addToSaves, deleteFromSaves, deleteProductBasket } = arrCardFunctions

    const [isHeart, setIsHeart] = useState(false)
    const [isNew, setIsNew] = useState('')
    const [isAviable, setIsAviable] = useState(false)
    const [isCart, setIsCart] = useState(false)
    const [isAddedToCart, setIsAddedToCart] = useState(false);
    const [isCartActivated, setIsCartActivated] = useState(false);
    const [isAddedtoSaves, setIsAddedToSaves] = useState(false);

    useEffect(() => {
        setIsAddedToCart(false);
        setIsAddedToSaves(false)
        setIsCart(false);
        setIsHeart(false)
    }, [item]);


    function checkFor(item) {
        if (item.availability === false) {
            setIsCart(false)
        } else {
            setIsCart(true)
        }
    }

    // function checkProductAvailability(item) {
    //     if (item.availability === true) {
    //         setIsAviable(true)
    //         return

    //     } else {
    //         setIsAviable(false)
    //     }

    // }


    return (

        <div className="card">
            <div className="card-container">
                <div className="cardTerminal1">
                    <div className="cardStatus">
                        {item.new && <div className='new_box'><p>Новинка!</p></div>}
                    </div>
                    <div className="cardSaves">
                        {!isHeart ?
                            (<button onClick={() => {
                                addToSaves(item, category)
                                setIsHeart(true)
                            }} className='addToSaves_btn'>
                                <img src={whiteHeart} alt="" />
                            </button>)
                            :
                            (<button onClick={() => {
                                deleteFromSaves(item);
                                setIsHeart(false)
                            }} className='addToSaves_btn'>
                                <img src={redHeart} alt="" />
                            </button>)
                        }
                    </div>

                </div>

                <div className="cardContent">
                    <div className="cardImage">
                        <img className='cardImageContent' src={`/src/img/${item.image}`} alt="" />
                    </div>
                    <div className="cardInfo">
                        <p>{item.title}  {item.type} {item.material} {item.power} {item.size}  {item.model} {item.volume} {item.color}</p>
                    </div>
                    <div className="cardTerminal2">
                        <div className="cardPrice">
                            <p>{item.price} руб</p>
                        </div>
                        <div className="cardFunctBox">
                            <div className="cardStatus">
                                {item.availability &&
                                    <div className='weHave_box'>
                                        <img src={weHave} alt="" />
                                        <p className='weHave_text'>в наличии</p>
                                    </div>
                                }

                            </div>
                            <div className="cardCart">

                                {!isCart ? (
                                    <button className='basket_btn' onClick={() => {                              
                                        checkFor(item);
                                        deleteFromSaves(item);
                                        addToBasket(item, category);                                
                                    }}>
                                        <img src={cartBefore} alt="" />
                                    </button>
                                ) : (
                                    <button className='basket_btn' onClick={() => {
                                        deleteProductBasket(item)
                                        setIsCart(false)
                                    }}>
                                        <img src={cartAfter} alt="" />
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

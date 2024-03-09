import React from 'react'
import { useState } from 'react'

import whiteHeart from '../../img/whiteHeart.png'
import redHeart from '../../img/redHeart.png'

import './cardInfo.scss'

export default function CardInfo({ item, arrCardFunctions }) {
    console.log(item);
    const { addToBasket, addToSaves, deleteFromSaves, deleteProductBasket } = arrCardFunctions

    const [status, setStatus] = useState(item.availability)
    const [isHeart, setIsHeart] = useState(false)
    const [image, setImage] = useState(`/src/img/${item.image}`)

    function getImage(event, image) {
        setImage(`/src/img/${image}`)
    }

    return (
        <div className='cardInfo'>
            <div className="cardInfo-container">
                <div className="main-content">
                    <div className="cardInfo-content1">
                        <img className='main_item_image' src={`${image}`} alt="" />
                        <div className="secondary_item_image">
                            <img onClick={(e) => getImage(e, item.image_1)} className='secondary_item_image' src={`/src/img/${item.image_1}`} alt="" />
                            <img onClick={(e) => getImage(e, item.image_2)} className='secondary_item_image' src={`/src/img/${item.image_2}`} alt="" />
                            <img onClick={(e) => getImage(e, item.image_3)} className='secondary_item_image' src={`/src/img/${item.image_3}`} alt="" />
                            <img onClick={(e) => getImage(e, item.image_4)} className='secondary_item_image' src={`/src/img/${item.image_4}`} alt="" />
                            <img onClick={(e) => getImage(e, item.image_5)} className='secondary_item_image' src={`/src/img/${item.image_5}`} alt="" />
                        </div>
                    </div>
                    <div className="cardInfo-content2">
                        <h3 className='item_title'>{item.title} {item.brand} {item.appointment}</h3>
                        <div className="item_status">
                            {status ?
                                (<div><p className='item_status_text_true'>В наличии</p></div>)
                                :
                                (<div><p className='item_status_text_false'>Нет в наличии</p></div>)
                            }
                        </div>
                        <div className="item_info">
                            {item.model}  {item.volume} {item.type} {item.material} {item.power} {item.size} {item.color}
                        </div>
                        <div className="item_price">
                            {item.price} ₽
                        </div>
                        <div className="item_funct">
                            <button onClick={() => addToBasket(item)} className='toBasket toCart'>В корзину</button>
                            {!isHeart ?
                                (<button onClick={() => {
                                    addToSaves(item, item.category)
                                    setIsHeart(true)
                                }} className='addToSaves_btn'>
                                    <img className='saves_img' src={whiteHeart} alt="" />
                                </button>)
                                :
                                (<button onClick={() => {
                                    deleteFromSaves(item);
                                    setIsHeart(false)
                                }} className='addToSaves_btn'>
                                    <img className='saves_img' src={redHeart} alt="" />
                                </button>)
                            }
                        </div>
                    </div>
                </div>
                <div className="description-content">
                    <p className='description-title'>Характеристики</p>
                    <div className="description">
                        <div className="description-content1">
                            <div className="item_description_box">
                                <p className="item_description_text">Расход :</p>
                                <p className='item_description_content'>{item.consumption},</p>
                            </div>
                            <div className="item_description_box">
                                <p className="item_description_text">Назанчение :</p>
                                <p className='item_description_content'>{item.typeOfWorks},</p>
                            </div>
                            <div className="item_description_box">
                                <p className="item_description_text">Тип работ :</p>
                                <p className='item_description_content'>{item.appointment},</p>
                            </div>
                            <div className="item_description_box">
                                <p className="item_description_text">Упаковка :</p>
                                <p className='item_description_content'>{item.packing},</p>
                            </div>
                            <div className="item_description_box">
                                <p className="item_description_text">Время высыхания :</p>
                                <p className='item_description_content'>{item.dryingTime},</p>
                            </div>
                        </div>
                        <div className="description-content2">
                            <div className="item_description_box">
                                <p className="item_description_text">Производитель :</p>
                                <p className='item_description_content'>{item.brand},</p>
                            </div>
                            <div className="item_description_box">
                                <p className="item_description_text">Объем :</p>
                                <p className='item_description_content'>{item.volume},</p>
                            </div>
                            <div className="item_description_box">
                                <p className="item_description_text">Тип работ :</p>
                                <p className='item_description_content'>{item.appointment},</p>
                            </div>
                            <div className="item_description_box">
                                <p className="item_description_text">Модель :</p>
                                <p className='item_description_content'>{item.model},</p>
                            </div>
                            <div className="item_description_box">
                                <p className="item_description_text">Тип :</p>
                                <p className='item_description_content'>{item.type},</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

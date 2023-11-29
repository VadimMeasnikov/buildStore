import React from 'react'
import { useState } from 'react'
import {NavLink, Link} from 'react-router-dom'


import logo from '../../img/logo.png'
import saves from '../../img/heart.png'
import cart from '../../img/shopping-cart.png'
import profileImg from '../../img/profile.png'
import burgerImg from '../../img/Бургер.png'
import inst from '../../img/inst.png'
import vk from '../../img/vk.png'
import facebook from '../../img/facebook.png'
import searchImg from '../../img/search.png'
import closeImg from '../../img/close.png'

import './navigation.scss'

export default function () {
    const [isOpenForm, setIsOpenForm] = useState(false)
    const [nameInp, setNameInp] = useState("")
    const [telephoneInp, setTelephoneInp] = useState("")
    const [commentInp, setCommentInp] = useState("")

    function closeForm(nameInp, telephoneInp, commentInp) {
        let info = {
            nameInp,
            telephoneInp,
            commentInp
        }
        console.log(info)
        setIsOpenForm(false)
    }

    return (
        <div className='navBar'>
            {isOpenForm &&
                <div className="formModal" onClick={() => setIsOpenForm(false)}>
                    <div className="formModal-container" onClick={(e) => e.stopPropagation()}>
                        <form className='orderCallForm'>
                            <div className="closeFormBox"><button className='closeFormBtn' onClick={() => setIsOpenForm(false)}><img src={closeImg} alt="" /></button>
                            </div>
                            <h2 className='titleForm'>Заказать звонок</h2>
                            <div className="inpBox1">
                                <label className='lbl'>Имя</label>
                                <input id='userNameInp' type="text" value={nameInp} onChange={(e) => setNameInp(e.target.value)} />
                            </div>
                            <div className="inpBox2">
                                <label className='lbl'>Телефон</label>
                                <input placeholder='+7' id='telephoneInp' type="text" value={telephoneInp} onChange={(e) => setTelephoneInp(e.target.value)} />
                            </div>
                            <div className="inpBox3">
                                <label className='lbl'>Комментарий</label>
                                <input id='commentInp' type="text" value={commentInp} onChange={(e) => setCommentInp(e.target.value)} />
                            </div>
                            <input className='submitInp' type="submit" onClick={() => {
                                closeForm(nameInp, telephoneInp, commentInp);
                                setNameInp('');
                                setTelephoneInp('');
                                setCommentInp('');
                            }
                            }
                            />
                            <p className='textContent'>Нажимая на кнопку вы соглашаетесь на обработку ваших персональных данных</p>
                        </form>
                    </div>
                </div>
            }
            <div className="navigation-content1">
                <div className="navigation-content1-container">
                    <div className="logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="timetable">
                        <p className='time'>Время работы:
                            10:00–20:00</p>
                    </div>
                    <div className="callBox">
                        <p>+7 495 120-32-14</p>
                        <button className='orderCall' onClick={() => setIsOpenForm(true)}>Заказать звонок</button>
                    </div>

                    <div className="functBox">
                        <div className="saves functCard">
                            <img src={saves} alt="" />
                        </div>
                        <div className="status functCard">
                            <img src={cart} alt="" />
                        </div>
                        <div className="profile functCard">
                            <img src={profileImg} alt="" />
                        </div>
                        <div className="profile functCard">
                            <div className="countBox">
                                <p>0</p>
                            </div>
                            <img className='cartImage' src={cart} alt="" />
                        </div>
                    </div>

                    <div className="productsPrice">
                        <p>Товаров на сумму XXXX</p>
                    </div>
                </div>
            </div>


            <div className="navigation-content2">
                <div className="navigation-content2-container">

                    <div className="burger-menu">
                        <button>
                            <img src={burgerImg} alt="" />
                            <p>Каталог товаров</p>
                        </button>
                    </div>
                    <div className="links">
                        <a className='navMainLink' href="#">О компании</a>
                        <a className='navMainLink' href="#">Акции</a>
                        <a className='navMainLink' href="#">Хиты сезона</a>
                        <a className='navMainLink' href="#">Новинки</a>
                    </div>
                    <div className="social">
                        <a className='navLink' href="#"><img style={{ width: "30px" }} src={inst} alt="" /></a>
                        <a className='navLink' href="#"><img style={{ width: "30px" }} src={vk} alt="" /></a>
                        <a className='navLink' href="#"><img style={{ width: "30px" }} src={facebook} alt="" /></a>
                    </div>
                    <div className="search">
                        <img src={searchImg} alt="" />
                        <input className='searchInp' placeholder='Поиск по каталогу' type="text" />
                    </div>
                </div>
            </div>
        </div>
    )
}

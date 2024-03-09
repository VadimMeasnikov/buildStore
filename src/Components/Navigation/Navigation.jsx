import React from 'react'
import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useEffect } from 'react'

import Registration from '../Registration/Registration.jsx'
import Authorization from '../Authorization/Authorization.jsx'

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

export default function Navigation({ sumPrice, arrUsers, registration, authorization, arrBasket, product_pay, arrSaves }) {

    const [isOpenForm, setIsOpenForm] = useState(false)
    const [nameInp, setNameInp] = useState("")
    const [telephoneInp, setTelephoneInp] = useState("")
    const [commentInp, setCommentInp] = useState("")

    const [activeCart, setActiveCart] = useState(false)


    // useEffect(() => {
    //     if (userNameError || userSurnameError || userTelError || userEmailError || userPasswordError || userPasswordConfirmationError) {
    //         setIsRegFormValid(false)
    //     } else {
    //         setIsRegFormValid(true)
    //     }
    // }, [userNameError, userSurnameError, userTelError, userEmailError, userPasswordError, userPasswordConfirmationError])


    // useEffect(() => {
    //     const storedUsers = JSON.parse(localStorage.getItem('users'));
    //     if (storedUsers) {
    //         arrUsers.setUsers(storedUsers);
    //     }
    // }, []);

    // useEffect(() => {
    //     localStorage.setItem('users', JSON.stringify(arrUsers.users));
    // });


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
                    <NavLink to='/' className="logo">
                        <img src={logo} alt="logo" />
                    </NavLink>
                    <div className="timetable">
                        <p className='time'>Время работы:
                            10:00–20:00</p>
                    </div>
                    <div className="callBox">
                        <p>+7 495 120-32-14</p>
                        <button className='orderCall' onClick={() => setIsOpenForm(true)}>Заказать звонок</button>
                    </div>

                    <div className="functBox">
                        <NavLink to='/saves' id='saves' className="functCard">
                            <div className="countBox">
                                <p className='cartText'>{arrSaves.saves.length}</p>
                            </div>
                            <img className='navBar_Image' src={saves} alt="" />

                        </NavLink>
                        <NavLink to='/status' id='status' className="functCard">
                            <img src={cart} alt="" />
                        </NavLink>
                        <NavLink to='/profile' id='profile' className="functCard">
                            <img src={profileImg} alt="" />
                        </NavLink>
                        <NavLink to='/cart' id='cart' className="functCard">
                            <div className="countBox">
                                {activeCart ?
                                    (<p className='activeCartText'>{arrBasket.basket.length}</p>)
                                    :
                                    (<p className='noActiveCartText'>{arrBasket.basket.length}</p>)
                                }


                            </div>
                            <img className='navBar_Image' src={cart} alt="" />
                        </NavLink>
                    </div>

                    <div className="productsPrice">
                        <p>Товаров на сумму {product_pay.overallPrice}</p>
                    </div>
                </div>
            </div>


            <div className="navigation-content2">
                <div className="navigation-content2-container">

                    <div className="link-box">
                        <Link to='/catalog' className='toCatalog_link'>
                            <img src={burgerImg} alt="" />
                            <p>Каталог товаров</p>
                        </Link>
                    </div>
                    <div className="links">
                        <Link className='navMainLink' href="#">О компании</Link>
                        <Link className='navMainLink' href="#">Акции</Link>
                        <Link className='navMainLink' href="#">Хиты сезона</Link>
                        <Link to='/newcards' className='navMainLink' href="#">Новинки</Link>
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

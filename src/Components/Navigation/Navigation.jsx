import React from 'react'
import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useEffect } from 'react'


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

export default function Navigation({ sumPrice, arrUsers }) {

    const [isOpenForm, setIsOpenForm] = useState(false)
    const [nameInp, setNameInp] = useState("")
    const [telephoneInp, setTelephoneInp] = useState("")
    const [commentInp, setCommentInp] = useState("")


    //registration
    const [isRegistration, setIsRegistration] = useState(false)
    const [isRegFormValid, setIsRegFormValid] = useState(false)

    const [userName, setUserName] = useState('')
    const [userNameDirty, setUserNameDirty] = useState(false)
    const [userNameError, setUserNameError] = useState('Это поле обязательно!')

    const [userSurname, setUserSurname] = useState('')
    const [userSurnameDirty, setUserSurnameDirty] = useState(false)
    const [userSurnameError, setUserSurnameError] = useState('Это поле обязательно!')

    const [userTel, setUserTel] = useState('')
    const [userTelDirty, setUserTelDirty] = useState(false)
    const [userTelError, setUserTelError] = useState('Это поле обязательно!')

    const [userEmail, setUserEmail] = useState('')
    const [userEmailDirty, setUserEmailDirty] = useState(false)
    const [userEmailError, setUserEmailError] = useState('Email не может быть пустым!')

    const [userPassword, setUserPassword] = useState('')
    const [userPasswordDirty, setUserPasswordDirty] = useState(false)
    const [userPasswordError, setUserPasswordError] = useState('Пароль не может быть пустым!')

    const [userPasswordConfirmation, setUserPasswordConfirmation] = useState('');
    const [userPasswordConfirmationDirty, setUserPasswordConfirmationDirty] = useState(false)
    const [userPasswordConfirmationError, setUserPasswordConfirmationError] = useState('Это поле обязательно!')

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

    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(arrUsers.users));
    }, [arrUsers.users]);


    function closeForm(nameInp, telephoneInp, commentInp) {
        let info = {
            nameInp,
            telephoneInp,
            commentInp
        }
        console.log(info)
        setIsOpenForm(false)
    }

    function openReg() {
        setIsRegistration(true)
    }
    function blurHandler(event) {
        switch (event.target.name) {
            case 'name':
                setUserNameDirty(true)
                break
            case 'surname':
                setUserSurnameDirty(true)
                break
            case 'tel':
                setUserTelDirty(true)
                break
            case 'email':
                setUserEmailDirty(true)
                break
            case 'password':
                setUserPasswordDirty(true)
                break
        }
    }
    const userNameCheck = (event) => {
        setUserName(event.target.value)
        if (!event.target.value) {
            setUserNameError('Это поле обязательно')
        } else {
            setUserNameError('')
        }
    }
    const userSurnameCheck = (event) => {
        setUserSurname(event.target.value)
        if (!event.target.value) {
            setUserSurnameError('Это поле обязательно')
        } else {
            setUserSurnameError('')
        }
    }
    const userTelCheck = (event) => {
        setUserTel(event.target.value)
        if (!event.target.value) {
            setUserTelError('Это поле обязательно')
        } else {
            setUserTelError('')
        }
    }
    const emailsSymbolFilter = (event) => {
        setUserEmail(event.target.value);
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(event.target.value).toLowerCase())) {
            setUserEmailError('Некорректный Email')
        } else {
            setUserEmailError('')
        }
    }
    const passwordSymbolFilter = (event) => {
        setUserPassword(event.target.value)
        if (event.target.value.length < 4 || event.target.value.length > 10) {
            setUserPasswordError('Пароль должен содержать не менее 4 и не более 10 символов')
            if (!event.target.value) {
                setUserPasswordError('Пароль не должен быть пустым')
            }
        } else {
            setUserPasswordError('')
        }
    }

    function createNewUser(name, surname, phone, email, password, passwordConfirmation) {
        let newUser = {
            name,
            surname,
            phone,
            email,
            password,
            passwordConfirmation
        }
        if (newUser.password === newUser.passwordConfirmation) {
            arrUsers.setUsers([...arrUsers.users, newUser])
            console.log('успешная регистрация')
        } else {
            console.log('отмена регистрации, разные пароли')
        }

        console.log(arrUsers)
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
            {isRegistration &&
                <div className="formModal_reg" onClick={() => setIsRegistration(false)}>
                    <div className="formModal_reg-container" onClick={(e) => e.stopPropagation()}>
                        <div className="closeFormBox"><Link to='/' className='closeFormBtn' onClick={() => setIsRegistration(false)}> <img src={closeImg} alt="" /></Link>
                        </div>
                        <form className='regForm'>

                            <h2 className='titleForm'>Регистрация</h2>
                            <div className="input_UserData">
                                <label className='lbl'>Имя</label>
                                <input name='name' placeholder='' id='userName' type="text" value={userName} onBlur={event => blurHandler(event)} onChange={event => userNameCheck(event)} />
                                {(userNameDirty && userNameError) && <div className='input_reg_error'>{userNameError}</div>}
                            </div>
                            <div className="input_UserData">
                                <label className='lbl'>Фамилия</label>
                                <input name='surname' id='userSurname' type="text" value={userSurname} onBlur={event => blurHandler(event)} onChange={event => userSurnameCheck(event)} />
                                {(userSurnameDirty && userSurnameError) && <div className='input_reg_error'>{userSurnameError}</div>}
                            </div>
                            <div className="input_UserData">
                                <label className='lbl'>Телефон</label>
                                <input name='tel' placeholder='+7' id='userTelephone' type="telephone" value={userTel} onBlur={event => blurHandler(event)} onChange={event => userTelCheck(event)} />
                                {(userTelDirty && userTelError) && <div className='input_reg_error'>{userTelError}</div>}
                            </div>
                            <div className="input_UserData">
                                <label className='lbl'>Электронная почта</label>
                                <input name='email' placeholder='Email' id='userEmail' type="email" value={userEmail} onBlur={event => blurHandler(event)} onChange={event => emailsSymbolFilter(event)} />
                                {(userEmailDirty && userEmailError) && <div className='input_reg_error'>{userEmailError}</div>}
                            </div>
                            <div className="input_UserData">
                                <label className='lbl'>Пароль</label>
                                <input
                                    name='password'
                                    placeholder='Введите пароль'
                                    id='userPassword' type="password"
                                    value={userPassword}
                                    onBlur={event => blurHandler(event)}
                                    onChange={event => passwordSymbolFilter(event)}
                                />
                                {(userPasswordDirty && userPasswordError) && <div className='input_reg_error'>{userPasswordError}</div>}
                            </div>
                            <div className="input_UserData">
                                <label className='lbl'>Подтверждение пароля</label>
                                <input placeholder='Подтвердите пароль' id='userPasswordConfirmation' type="password" value={userPasswordConfirmation} onChange={(e) => setUserPasswordConfirmation(e.target.value)} />
                            </div>
                            <input
                                className='submitUserData'
                                type="submit"
                                onClick={() => {
                                    createNewUser(userName, userSurname, userTel, userEmail, userPassword, userPasswordConfirmation)
                                    setIsRegistration(false)
                                    setUserName('')
                                    setUserSurname('')
                                    setUserTel('')
                                    setUserEmail('')
                                    setUserPassword('')
                                    setUserPasswordConfirmation('')
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
                            <img src={saves} alt="" />
                        </NavLink>
                        <NavLink to='/status' id='status' className="functCard">
                            <img src={cart} alt="" />
                        </NavLink>
                        <NavLink to='/profile' onClick={openReg} id='profile' className="functCard">
                            <img src={profileImg} alt="" />
                        </NavLink>
                        <NavLink to='/cart' id='cart' className="functCard">
                            <div className="countBox">
                                <p>{sumPrice.countCart}</p>
                            </div>
                            <img className='cartImage' src={cart} alt="" />
                        </NavLink>
                    </div>

                    <div className="productsPrice">
                        <p>Товаров на сумму {sumPrice.sumPriceNum}</p>
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

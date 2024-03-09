import React, { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import './registration.scss'
import closeImg from '../../img/close.png'

export default function Registration({ registration, authorization }) {

    const auth = getAuth()
    useEffect(() => {

    })

    

    const passwordSymbolFilter = (event) => {
        registration.setUserPasswordReg(event.target.value)
        if (event.target.value.length < 6) {
            registration.setUserPasswordRegError('Пароль должен содержать не менее 6')
            if (!event.target.value) {
                registration.setUserPasswordRegError('Пароль не должен быть пустым')
            }
        } else {
            registration.setUserPasswordRegError('')
        }

    }

    function validPass() {
        return registration.userPasswordReg === registration.userPasswordConfirmationReg
    }

    async function createUser() {
        if (!validPass()) {
            registration.setUserPasswordConfirmationReg('Пароли не совпадают!')
            return
        }
        registration.setUserPasswordConfirmationReg('')
        createUserWithEmailAndPassword(auth, registration.userEmailReg, registration.userPasswordReg)
            .then((user) => console.log(user))
            .catch((e) => console.log(e))
    }

    function blurHandler(event) {
        switch (event.target.name) {
            case 'name':
                registration.setUserNameRegDirty(true)
                break
            case 'surname':
                registration.setUserSurnameRegDirty(true)
                break
            case 'tel':
                registration.setUserTelRegDirty(true)
                break
            case 'email':
                registration.setUserEmailRegDirty(true)
                break
            case 'password':
                registration.setUserPasswordRegDirty(true)
                break
        }
    }
    const userNameCheck = (event) => {
        registration.setUserNameReg(event.target.value)
        if (!event.target.value) {
            registration.setUserNameRegError('Это поле обязательно')
        } else {
            registration.setUserNameRegError('')
        }
    }
    const userSurnameCheck = (event) => {
        registration.setUserSurnameReg(event.target.value)
        if (!event.target.value) {
            registration.setUserSurnameRegError('Это поле обязательно')
        } else {
            registration.setUserSurnameRegError('')
        }
    }
    const userTelCheck = (event) => {
        registration.setUserTelReg(event.target.value)
        if (!event.target.value) {
            registration.setUserTelRegError('Это поле обязательно')
        } else {
            registration.setUserTelRegError('')
        }
    }


    function clearInputs(){
        registration.setUserNameReg('');
        registration.setUserSurnameReg('');
        registration.setUserTelReg('');
        registration.setUserEmailReg('');
        registration.setUserPasswordReg('');
        registration.setUserPasswordConfirmationReg('');

        console.log(
            registration.userNameReg,
            registration.userSurnameReg,
            registration.userTelReg,
            registration.userEmailReg,
            registration.userPasswordReg,
            registration.userPasswordConfirmationReg,
        )
    }


    // const emailsSymbolFilter = (event) => {
    //     registration.setUserEmailReg(event.target.value);
    //     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //     if (!re.test(String(event.target.value).toLowerCase())) {
    //         registration.setUserEmailRegError('Некорректный Email')
    //     } else {
    //         registration.setUserEmailRegError('')
    //     }
    // }



    return (
        <div className="formModal_reg" onClick={() => registration.setIsRegistration(false)}>
            <div className="formModal_reg-container" onClick={(e) => e.stopPropagation()}>
                <div className="closeFormBox"><Link to='/' className='closeFormBtn' onClick={() => registration.setIsRegistration(!registration.isRegistration)}> <img src={closeImg} alt="" /></Link>
                </div>
                <form onSubmit={(event) => {
                    createUser();
                    event.preventDefault();
                    registration.setIsRegistration(false);
                    authorization.setIsAuthorization(true);
                    registration.setIsRegistration((prev) => !prev);
                    clearInputs();
                }}
                    className='regForm'>

                    <h2 className='titleForm'>Регистрация</h2>
                    <div className="input_UserData">
                        <label className='lbl'>Имя</label>
                        <input name='name' placeholder='' id='userName' type="text" value={registration.userNameReg} onBlur={event => blurHandler(event)} onChange={event => userNameCheck(event)} />
                        {(registration.userNameRegDirty && registration.userNameRegError) && <div className='input_reg_error'>{registration.userNameRegError}</div>}
                    </div>
                    <div className="input_UserData">
                        <label className='lbl'>Фамилия</label>
                        <input name='surname' id='userSurname' type="text" value={registration.userSurname} onBlur={event => blurHandler(event)} onChange={event => userSurnameCheck(event)} />
                        {(registration.userSurnameRegDirty && registration.userSurnameRegError) && <div className='input_reg_error'>{registration.userSurnameRegError}</div>}
                    </div>
                    <div className="input_UserData">
                        <label className='lbl'>Телефон</label>
                        <input name='tel' placeholder='+7' id='userTelephone' type="telephone" value={registration.userTel} onBlur={event => blurHandler(event)} onChange={event => userTelCheck(event)} />
                        {(registration.userTelRegDirty && registration.userTelRegError) && <div className='input_reg_error'>{registration.userTelRegError}</div>}
                    </div>
                    <div className="input_UserData">
                        <label className='lbl'>Электронная почта</label>
                        <input name='email' placeholder='Email' id='userEmail' type="email" value={registration.userEmail} onBlur={event => blurHandler(event)} onChange={event => registration.setUserEmailReg(event.target.value)} />
                        {/* {(registration.userEmailRegDirty && registration.userEmailRegError) && <div className='input_reg_error'>{registration.userEmailRegError}</div>} */}
                    </div>
                    <div className="input_UserData">
                        <label className='lbl'>Пароль</label>
                        <input
                            name='password'
                            placeholder='Введите пароль'
                            id='userPassword' type="password"
                            value={registration.userPasswordReg}
                            onBlur={event => blurHandler(event)}
                            onChange={event => passwordSymbolFilter(event)}
                        />
                        {(registration.userPasswordRegDirty && registration.userPasswordRegError) && <div className='input_reg_error'>{registration.userPasswordRegError}</div>}
                    </div>
                    <div className="input_UserData">
                        <label className='lbl'>Подтверждение пароля</label>
                        <input placeholder='Подтвердите пароль' id='userPasswordConfirmation' type="password" value={registration.userPasswordConfirmationReg} onChange={(e) => registration.setUserPasswordConfirmationReg(e.target.value)} />
                        {registration.userPasswordConfirmationReg &&  <div className='input_reg_error'>{registration.setUserPasswordConfirmationRegError}</div>}
                    </div>
                    <button className='submitReg' type='submit'>зарегистрироваться</button>

                </form>
                <div className="toAuthorization_box">  <button onClick={() => {
                    registration.setIsRegistration(false)
                    authorization.setIsAuthorization(true)
                }} className='toAuthorization_btn'>Уже зарегистрированы? Войти</button></div>

            </div>
        </div >)
}

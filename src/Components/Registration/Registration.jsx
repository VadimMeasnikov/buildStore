import React from 'react'
import { NavLink, Link } from 'react-router-dom'

import './registration.scss'
import closeImg from '../../img/close.png'

export default function Registration({ registration, authorization, createNewUser }) {


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
    // const emailsSymbolFilter = (event) => {
    //     registration.setUserEmailReg(event.target.value);
    //     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //     if (!re.test(String(event.target.value).toLowerCase())) {
    //         registration.setUserEmailRegError('Некорректный Email')
    //     } else {
    //         registration.setUserEmailRegError('')
    //     }
    // }

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
    function checkValidReg(name, surname, email, tel, password, passwordConfirmation) {
        if (!name.value || !surname.value || !email.value || !tel.value) {
            if (password === passwordConfirmation) {
                return true
            }
        }
    }

    return (
        <div className="formModal_reg" onClick={() => registration.setIsRegistration(false)}>
            <div className="formModal_reg-container" onClick={(e) => e.stopPropagation()}>
                <div className="closeFormBox"><Link to='/' className='closeFormBtn' onClick={() => registration.setIsRegistration(!registration.isRegistration)}> <img src={closeImg} alt="" /></Link>
                </div>
                <form onSubmit={(event) => {
                    event.preventDefault();
                    createNewUser(
                        registration.userNameReg,
                        registration.userSurname,
                        registration.userTelReg,
                        registration.userEmailReg,
                        registration.userPasswordReg,
                        registration.userPasswordConfirmationReg
                    );
                    registration.setIsRegistration(false);
                    registration.setUserNameReg('');
                    registration.setUserSurnameReg('');
                    registration.setUserTelReg('');
                    registration.setUserEmailReg('');
                    registration.setUserPasswordReg('');
                    registration.setUserPasswordConfirmationReg('');

                    authorization.setIsAuthorization(true);
                    registration.setIsRegistration(false);
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
                    </div>
                    <button className='submitReg' type='submit'>зарегистрироваться</button>

                </form>
                <div className="toAuthorization_box">  <button onClick={() => {
                    registration.setIsRegistration(!registration.isRegistration)
                    authorization.setIsAuthorization(!authorization.isAuthorization)
                }} className='toAuthorization_btn'>Уже зарегистрированы? Войти</button></div>

            </div>
        </div >)
}

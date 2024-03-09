import React from 'react'
import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { redirect } from 'react-router-dom';

import './profileData.scss'

import Authorization from '../Authorization/Authorization';
import Registration from '../Registration/Registration';

export default function ProfileData({ arrUsers, registration, authorization }) {

    const [pageState, setPageState] = useState('')

    const [newUserPassword, setNewUserPassword] = useState('')
    const [newUserPasswordConfirmation, setNewUserPasswordConfirmation] = useState('')
    const [newUserPasswordConfirmationDirty, setNewUserPasswordConfirmationDirty] = useState(false)
    const [newUserPasswordConfirmationError, setNewUserPasswordConfirmationError] = useState('')
    const [passwordsState, setPasswordsState] = useState(false)


    function comparePasswords(newPassword, newPasswordConfirmation) {
        if (newPassword === newPasswordConfirmation) {
            setPasswordsState(true)
        } else {
            setPasswordsState(false)
            setNewUserPasswordConfirmationDirty(true)
            setNewUserPasswordConfirmationError('Пароли не совпадают')
        }
    }



    return (
        <div className='profile_comp'>
            {registration.isRegistration ?
                (<Registration registration={registration} authorization={authorization} />)
                :
                (<Authorization registration={registration} authorization={authorization} />)
            }
            <div className="title_profile_comp">Личные данные</div>
            <div className="profile_comp_container">

                <div className="userData">
                    <div className="userData_content1">
                        <div className="userData_person">
                            <div className="name userData_box">
                                <p className='title_box'>Имя</p>
                                <p className='userData_info'>{arrUsers.users[arrUsers.users.length - 1].name}</p>
                            </div>
                            <div className="name userData_box">
                                <p className='title_box'>Фамилия</p>
                                <p className='userData_info'>{arrUsers.users[arrUsers.users.length - 1].surname}</p>
                            </div>
                            <div className="name userData_box">
                                <p className='title_box'>Телефон</p>
                                <p className='userData_info'>{arrUsers.users[arrUsers.users.length - 1].phone}</p>
                            </div>
                            <div className="name userData_box">
                                <p className='title_box'>Электронная почта</p>
                                <p className='userData_info'>{arrUsers.users[arrUsers.users.length - 1].email}</p>
                            </div>
                        </div>
                        <div className="userData_geo">
                            <div className="name userData_box">
                                <p className='title_box'>Город</p>
                                <p className='userData_info'>{arrUsers.users[arrUsers.users.length - 1].city}</p>
                            </div>
                            <div className="name userData_box">
                                <p className='title_box'>Улица</p>
                                <p className='userData_info'>{arrUsers.users[arrUsers.users.length - 1].street}</p>
                            </div>
                            <div className="name userData_box">
                                <p className='title_box'>Дом</p>
                                <p className='userData_info'>{arrUsers.users[arrUsers.users.length - 1].house}</p>
                            </div>
                            <div className="name userData_box">
                                <p className='title_box'>Квартира</p>
                                <p className='userData_info'>{arrUsers.users[arrUsers.users.length - 1].apartment}</p>
                            </div>
                        </div>


                    </div>
                    <button onClick={comparePasswords} className='saveDataBtn'>Сохранить изменения</button>
                    <div className="userData_content2">
                        <div className="title_password_profile">Изменения пароля</div>
                        <div className="pswrd userData_box">
                            <p className='title_box'>Старый пароль</p>
                            <p className='userData_info'>{arrUsers.users[arrUsers.users.length - 1].password}</p>
                        </div>
                        <div className="pswrd userData_box">
                            <p className='title_box'>Новый пароль</p>
                            <input onChange={e => setNewUserPassword(e.target.value)} className='newPassword_inp' value={newUserPassword} type="password" name="newPassword" id="" />
                        </div>
                        <div className="pswrd userData_box">
                            <p className='title_box'>Подтвердите новый пароль</p>
                            <input onChange={e => setNewUserPasswordConfirmation(e.target.value)} className='newPassword_inp' value={newUserPasswordConfirmation} type="password" name="newPasswordConfirmation" id="" />
                            {newUserPasswordConfirmationDirty && <div>{newUserPasswordConfirmationError}</div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

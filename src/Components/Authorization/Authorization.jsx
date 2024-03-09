import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

import closeImg from '../../img/close.png'

import './authorization.scss'


export default function Authorization({ registration, authorization }) {

    const auth = getAuth()
    const [error, setError] = useState('')

    function authorizationFunct(email, password) {
        signInWithEmailAndPassword(auth, email, password)
            .then((user) => {
                console.log(user);
                authorization.setAuthorizationEmail('')
                authorization.setAuthorizationPassword('')
                authorization.setIsAuthorization(false)
                registration.setIsRegistration(false)
                console.log('close pls');
            }).catch((error) => {
                setError('Аккаунт не найден')
                console.log(error);
            })
    }

    return (
        <div className='authorization'>
            <div className="authorization-container">
                <div className="closeAuthBox"><button onClick={() => {authorization.setIsAuthorization(false); registration.setIsRegistration(true); console.log('aaa');}}><img src={closeImg} alt="" /></button></div>
                <form className='authForm' onSubmit={(e) => {
                    e.preventDefault();
                    authorizationFunct(authorization.authorizationEmail, authorization.authorizationPassword);              
                }}>
                    <h2 className='title_authorization'>
                        Авторизация
                    </h2>
                    <div className="auth_box">
                        <label>Электронная почта</label>
                        <input className='authInp' type="email" value={authorization.authorizationEmail} onChange={(e) => authorization.setAuthorizationEmail(e.target.value)} />
                    </div>
                    <div className="auth_box">
                        <label>Пароль</label>
                        <input className='authInp' type="password" value={authorization.authorizationPassword} onChange={(e) => authorization.setAuthorizationPassword(e.target.value)} />
                    </div>

                    <button className='submitAuth' type='submit'>Войти</button>
                </form>
                {error ? (<p className='error_text'>{error}</p>) : ("")}
            </div>

        </div >
    )
}

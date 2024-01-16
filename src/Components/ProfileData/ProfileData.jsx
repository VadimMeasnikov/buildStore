import React from 'react'
import './profileData.scss'

export default function ProfileData({ arrUsers }) {

    console.log(arrUsers);

    
    return (
        <div className='profile_comp'>
            <div className="title_profile_comp">Личные данные</div>
            <div className="profile_comp_container">

                <div className="userData">
                    <div className="userData_content1">
                        <div className="userData_person">
                            <div className="name userData_box">
                                <p className='title_box'>Имя</p>
                                <p className='userData_info'>Иван</p>
                            </div>
                            <div className="name userData_box">
                                <p className='title_box'>Фамилия</p>
                                <p className='userData_info'>Петров</p>
                            </div>
                            <div className="name userData_box">
                                <p className='title_box'>Телефон</p>
                                <p className='userData_info'>+7 (567) 543-66-41</p>
                            </div>
                            <div className="name userData_box">
                                <p className='title_box'>Электронная почта</p>
                                <p className='userData_info'>cmirnoval@gmail.com</p>
                            </div>
                        </div>
                        <div className="userData_geo">
                            <div className="name userData_box">
                                <p className='title_box'>Город</p>
                                <p className='userData_info'>Минск</p>
                            </div>
                            <div className="name userData_box">
                                <p className='title_box'>Улица</p>
                                <p className='userData_info'>Пр-кт Победителей</p>
                            </div>
                            <div className="name userData_box">
                                <p className='title_box'>Дом</p>
                                <p className='userData_info'>34А</p>
                            </div>
                            <div className="name userData_box">
                                <p className='title_box'>Квартира</p>
                                <p className='userData_info'>239</p>
                            </div>
                        </div>


                    </div>
                    <button className='saveDataBtn'>Сохранить изменения</button>
                    <div className="userData_content2">
                        <div className="title_password_profile">Изменения пароля</div>
                        <div className="pswrd userData_box">
                            <p className='title_box'>Старый пароль</p>
                            <p className='userData_info'>******</p>
                        </div>
                        <div className="pswrd userData_box">
                            <p className='title_box'>Новый пароль</p>
                            <p className='userData_info'>*********</p>
                        </div>
                        <div className="pswrd userData_box">
                            <p className='title_box'>Подтвердите новый пароль</p>
                            <p className='userData_info'>*********</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

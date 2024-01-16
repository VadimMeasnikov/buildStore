import React from 'react'
import map from '../../img/map.png'
import './contacts.scss'

export default function Contacts() {
    return (
        <div className='contacts_page'>
            <div className="contacts_title">
                <h2>Контакты</h2>
            </div>
            <div className="contacts_page_container">
                <div className="contacts_content">
                    <div className="contancts_content1">
                        <img src={map} alt="" />
                    </div>
                    <div className="contacts_content2">
                        <div className="address_1 address_contact">
                            <p className="address_street">
                                ул. 1-я Дубравная, 15
                            </p>
                            <p className="address_city">
                                г. Можайск, Московская область
                            </p>
                            <p className="address_contact_tel">
                                +7 495 120-32-15
                            </p>
                        </div>
                        <div className="address_2 address_contact">
                            <p className="address_2_street">
                                ул. Маяковского, 120
                            </p>
                            <p className="address_2_city">
                                г. Краснодар
                            </p>
                            <p className="address_2_contact_tel">
                                +7 495 110-10-12
                            </p>
                        </div>
                        <div className="address_3 address_contact">
                            <p className="address_street">
                                ул. Маршака, 2
                            </p>
                            <p className="address_city">
                                г. Санкт-Петербург
                            </p>
                            <p className="address_contact_tel">
                                +7 495 560-12-11
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

import './Footer.scss'
import { Link } from 'react-router-dom'

import logo from '../../img/logo.png'
import inst from '../../img/inst.png'
import vk from '../../img/vk.png'
import facebook from '../../img/facebook.png'

export default function Footer() {
  return (
    <div className='footer'>
      <div className="footer-container">
        <div className="footer-box1">
          <Link className='footerLink_box1'>Малярные товары</Link>
          <Link className='footerLink_box1'>Электрооборудование</Link>
          <Link className='footerLink_box1'>Спецодежда</Link>
          <Link className='footerLink_box1'>Для дома и дачи</Link>
          <Link className='footerLink_box1'>Сезонное</Link>
          <Link className='footerLink_box1'>Инструмент</Link>
        </div>
        <div className="footer-box2">
          <Link className='footerLink_box2'>О компании</Link>
          <Link className='footerLink_box2'>Контакты</Link>
          <Link className='footerLink_box2'>Новинки</Link>
          <Link className='footerLink_box2'>Хиты сезона</Link>
          <Link className='footerLink_box2'>Распродажи</Link>
        </div>
        <div className="footer-box3">
          <Link className='logoLink'>
            <img src={logo} alt="logo" />
          </Link>

          <div className="infoFooterText">
            <p className='infoFooterText_1'>+7 495 120-32-15</p>
            <p className='infoFooterText_2'>+7 495 120-32-14</p>
          </div>

          <div className="social">
            <Link><img className='socialImg' src={inst} alt="" /></Link>
            <Link className='socialLink'><img className='socialImg' src={vk} alt="" /></Link>
            <Link className='socialLink'><img className='socialImg' src={facebook} alt="" /></Link>
          </div>
          <div className="contentFooter">
            <Link className='userDocLink'>Соглашение пользователя «Copyright © Название 2023»</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

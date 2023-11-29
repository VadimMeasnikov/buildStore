import React from 'react'
import '../Advertisement/advertisement.scss'

import arrow from '../../img/arrow-left.png'


export default function Advertisement() {
    return (
        <div className="advertisement">
            <div className="advertisement-container">
                <div className="content1">
                    <h2 className='titleContent1'>DeWALT - Инструмент с настоящим характером</h2>
                    <button className='toCatalogButton'>Перейти в каталог</button>
                    <button className='moreInfoButton_content'><img src={arrow} alt="" /></button>
                </div>
                <div className="content2">
                    <h2 className='titleContent2'>Акции</h2>
                    <button className='moreInfoButton_content'><img src={arrow} alt="" /></button>
                </div>
                <div className="content3">
                    <div className="topContent3">
                        <h2 className='titleContent3'>Новое поступление</h2>
                        <button className='moreInfoButton_content'><img src={arrow} alt="" /></button>
                    </div>
                    <div className="lowContent3">
                        <h2 className='titleContent3'>Акции на сверла</h2>
                        <button className='moreInfoButton_content'><img src={arrow} alt="" /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

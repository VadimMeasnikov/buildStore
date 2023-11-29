import './news.scss'
import data from '../../data/news.json'
import { useState } from 'react'
import News1 from '../../img/News1.png'
import News2 from '../../img/News2.png'
import News3 from '../../img/News3.png'
import News4 from '../../img/News4.png'
import { Link } from 'react-router-dom'


export default function News() {
    const [news, setNews] = useState(data)
  return (
    <div className='news'>
        <div className="news-container">
            <div className="infoNews">
                <h2 className='titleNews'>Новости</h2>
                <p className='infoNewsText'>Торговое или промышленное предприятие, торгово-промышленное объединение предпринимателей, форма организации предприятия, при которой его правосубъектность отличается от правосубъектности лиц, в нем участвующих. Компании имеют статус юридического лица.</p>
                <button className='toNews'>Перейти к новостям</button>
            </div>
            <div className="contentNews">
                  <div className="contentNews-container">
                    <Link>
                    <div className="cardNews">
                        <div className="image">
                            <img src={News1} alt="" />
                        </div>
                        <div className="titleOfNews">
                            <h2>{news[0].title}</h2>
                        </div>
                        <div className="dateOfNews">
                            <h2>{news[0].date}</h2>
                        </div>
                    </div></Link>
                  
                    
                    <div className="cardNews">
                        <div className="image">
                            <img src={News3} alt="" />
                        </div>
                        <div className="titleOfNews">
                            <h2>{news[1].title}</h2>
                        </div>
                        <div className="dateOfNews">
                            <h2>{news[1].date}</h2>
                        </div>
                    </div>
                    <div className="cardNews">
                        <div className="image">
                            <img src={News2} alt="" />
                        </div>
                        <div className="titleOfNews">
                            <h2>{news[2].title}</h2>
                        </div>
                        <div className="dateOfNews">
                            <h2>{news[2].date}</h2>
                        </div>
                    </div>
                    <div className="cardNews">
                        <div className="image">
                            <img src={News4} alt="" />
                        </div>
                        <div className="titleOfNews">
                            <h2>{news[3].title}</h2>
                        </div>
                        <div className="dateOfNews">
                            <h2>{news[3].date}</h2>
                        </div>
                    </div>
                  </div>
            </div>
        </div>
    </div>
  )
}

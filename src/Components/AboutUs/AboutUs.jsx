import './AboutUs.scss'

export default function AboutUs() {
    return (
        <div className='aboutUs'>
            <div className='aboutUs-container'>
                <div className="content">
                </div>
                <div className="info">
                    <h2 className='titleAbout'>О нас</h2>
                    <div className="infoText_content">
                        <p className='infoText1'>Торговое или промышленное предприятие, торгово-промышленное объединение предпринимателей, форма организации предприятия, при которой его правосубъектность отличается от правосубъектности лиц, в нем участвующих.</p>
                        <p className='infoText2'>Торговое или промышленное предприятие, торгово-промышленное объединение предпринимателей, форма организации предприятия</p>
                    </div>

                    <button className='toCatalogButton'>Перейти в каталог</button>
                </div>
            </div>
        </div>
    )
}

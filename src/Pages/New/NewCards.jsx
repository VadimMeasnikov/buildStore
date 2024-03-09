import React from 'react'
import './newCards.scss'
import Card from '../../Components/Card/Card'

export default function NewCards({ products, arrCardFunctions}) {


    return (
        <div className='newCards'>
            <div className="newCards-container">
                <div className="title-box"> <h2 className='newCards-title'>Новинки</h2></div>
                <div className="items-container">
                    {products.allArrCatalog.map((obj) => (
                        obj.products.map((newItem) => (
                            newItem.new && <Card item={newItem} key={newItem.id} arrCardFunctions={arrCardFunctions}/>
                        ))
                    ))}
                </div>
            </div>
        </div>
    )
}


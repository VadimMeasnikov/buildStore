import React from 'react'
import { useState } from 'react'

import Card from '../../Components/Card/Card'

import './catalog.scss'
import { arrAllCatalog } from '../../data/arrAllCatalog'

export default function Catalog({ products, arrCardFunctions }) {

    const [category, setCategory] = useState('Малярные товары')

    const { allArrCatalog, setAllArrCatalog } = products
    console.log(allArrCatalog);

    const selectedProducts = arrAllCatalog.find(
        (item) => item.category === category
      ).products;
    console.log(selectedProducts);

    return (
        <div className='catalogPage'>
            <div className="title-box">
                <h2 className='catalog-title'>Каталог</h2>
            </div>
            <div className="selectProducts">
                {allArrCatalog.map((obj, index) => (
                    <button key={index} className='category_btn' onClick={() => {setCategory(obj.category)}}>{obj.category}</button>
                ))}
            </div>
            <div className="catalog_page-container">
                <div className="catalogProducts">
                    <div className="products">

                        {selectedProducts.map((item, index) => (
                            <Card key={index} item={item} arrCardFunctions={arrCardFunctions}/>
                        ))}

                        {/* {category !== '' &&
                           arrAllCatalog.filter((item) =>
                           item.category == category
                           ).map((item) => 
                           <Card item={item} arrCardFunctions={arrCardFunctions}/>
                           )
                        } */}
                    </div>
                </div>
            </div>
        </div>
    )
}

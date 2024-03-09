import React from 'react'
import { useParams } from 'react-router-dom'
import CardInfo from '../../Components/CardInfo/CardInfo'
import getCurrentItem from './getCurrentItem'
import './Product.scss'

export default function Product({products, arrCardFunctions}) {

  const {id} = useParams()
  const item = getCurrentItem(products.allArrCatalog, id)
  console.log(item);
  return (
    <div className='product'>
        <div className="product-container">
            <CardInfo item={item} arrCardFunctions={arrCardFunctions}/>
        </div>
        <div className="similar-products">
            
        </div>
    </div>
  )
}

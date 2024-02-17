import './Home.scss'

import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

import Advertisement from '../../Components/Advertisement/Advertisement'
import Catalog from '../../Components/Catalog/Catalog'
import AboutUs from '../../Components/AboutUs/AboutUs.jsx'
import News from '../../Components/News/News.jsx'


export default function Home({ products, arrBasket, arrSaves, arrCardFunctions, cardImgsFunctions}) {

  const navigate = useNavigate()
  useEffect(() => {
    navigate('/')
  })

  return (
    <div className='home'>
      <Advertisement />
      <Catalog cardImgsFunctions={cardImgsFunctions} products={products} arrBasket={arrBasket} arrSaves={arrSaves} arrCardFunctions={arrCardFunctions}/>
      <AboutUs />
      <News />
    </div>
  )
}

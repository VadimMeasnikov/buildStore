import './Home.scss'

import Advertisement from '../../Components/Advertisement/Advertisement'
import Catalog from '../../Components/Catalog/Catalog'
import AboutUs from '../../Components/AboutUs/AboutUs.jsx'
import News from '../../Components/News/News.jsx'


export default function Home({ arrCardsState, arrBasket }) {
  return (
    <div className='home'>
      <Advertisement />
      <Catalog arrCardsState={arrCardsState} arrBasket={arrBasket}  />
      <AboutUs />
      <News />
    </div>
  )
}

import './Home.scss'

import Advertisement from '../../Components/Advertisement/Advertisement'
import Catalog from '../../Components/Catalog/Catalog'
import AboutUs from '../../Components/AboutUs/AboutUs.jsx'
import News from '../../Components/News/News.jsx'
import ourBrands from '../../Components/ourBrands/ourBrands.jsx'


export default function Home() {
  return (
    <div className='home'>
      <Advertisement />
      <Catalog  />
      <ourBrands />
      <AboutUs />
      <News />
    </div>
  )
}

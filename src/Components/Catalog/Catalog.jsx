import React from 'react'
import { useState } from 'react'
import '../Catalog/catalog.scss'

import next from '../../img/nextBtn.png'
import prev from '../../img/prevBtn.png'

import Card from '../Card/Card'
//data
import Paint from '../../data/paint.json'
import Clothes from '../../data/clothes.json'
import Electro from '../../data/electrEq.json'
import forHouse from '../../data/forHouse.json'
import seasonTools from '../../data/seasonTool.json'
import Tool from '../../data/tool.json'


import paintImg1 from '../../img/paintImg.png'
import paintImg2 from '../../img/paintImg1.png'
import paintImg3 from '../../img/paintImg2.png'

import clothesImg1 from '../../img/clothesImg.jpg'
import clothesImg2 from '../../img/clothesImg1.png'
import clothesImg3 from '../../img/clothesImg2.png'

import seasonImg1 from '../../img/season1.png'
import seasonImg2 from '../../img/season2.png'
import seasonImg3 from '../../img/season3.png'

import electroImg1 from '../../img/electro1.png'
import electroImg2 from '../../img/electro2.png'
import electroImg3 from '../../img/iron.png'

import forHouse1 from '../../img/forHome1.jpg'
import forHouse2 from '../../img/forHome2Brick.jpg'
import forHouse3 from '../../img/forHome3.jpg'

import tool1 from '../../img/tool1.png'
import tool2 from '../../img/tool2.png'
import tool3 from '../../img/tool3.png'


export default function Catalog({ countCart, setCountCart }) {
  const [countPaint, setCountPaint] = useState(0)
  const [countClothes, setCountClothes] = useState(0)
  const [countSeason, setCountSeason] = useState(0)
  const [countElectro, setCountElectro] = useState(0)
  const [countForHouse, setCountForHouse] = useState(0)
  const [countTool, setCountTool] = useState(0)
  const [productData, setProductData] = useState([])

  const paintJson = Paint
  const clothesJson = Clothes
  const electroJson = Electro
  const forHouseJson = forHouse
  const seasonToolsJson = seasonTools
  const toolsJson = Tool

  const mergedProductData = [
    ...paintJson,
    ...clothesJson,
    ...electroJson,
    ...forHouseJson,
    ...seasonToolsJson,
    ...toolsJson
  ]

  console.log(mergedProductData)

  useState(() => {
    setProductData(mergedProductData);
  }, []);


  const paintImgs = [paintImg1, paintImg2, paintImg3, paintImg2]
  const clothesImgs = [clothesImg2, clothesImg2, clothesImg1, clothesImg3]
  const seasonImgs = [seasonImg1, seasonImg2, seasonImg3, seasonImg1]
  const electroImgs = [electroImg1, electroImg3, electroImg1, electroImg2]
  const forHouseImgs = [forHouse2, forHouse1, forHouse3, forHouse1]
  const toolImgs = [tool1, tool2, tool3, tool2]

  function nextCardPaint() {
    if (countPaint === Paint.length - 1) {
      setCountPaint(0);
      return;
    }
    setCountPaint((prevCountPaint) => prevCountPaint + 1)
  }


  function prevCardPaint() {
    if (countPaint === 0) {
      setCountPaint(Paint.length - 1);
      return;
    }
    setCountPaint((prevCountPaint) => prevCountPaint - 1)
  }


  function nextCardClothes() {
    if (countClothes === Clothes.length - 1) {
      setCountClothes(0);
      return;
    }
    setCountClothes((prevCountClothes) => prevCountClothes + 1)
  }
  function prevCardClothes() {
    if (countClothes === 0) {
      setCountClothes(Clothes.length - 1);
      return;
    }
    setCountClothes((prevCountClothes) => prevCountClothes - 1)
  }


  function nextCardSeason() {
    if (countSeason === seasonTools.length - 1) {
      setCountSeason(0);
      return;
    }
    setCountSeason((prevCountSeason) => prevCountSeason + 1)
  }
  function prevCardSeason() {
    if (countSeason === 0) {
      setCountSeason(seasonTools.length - 1);
      return;
    }
    setCountSeason((prevCountSeason) => prevCountSeason - 1)
  }

  function nextCardElectro() {
    if (countElectro === Electro.length - 1) {
      setCountElectro(0);
      return;
    }
    setCountElectro((prevCountElectro) => prevCountElectro + 1)
  }
  function prevCardElectro() {
    if (countElectro === 0) {
      setCountElectro(Electro.length - 1);
      return;
    }
    setCountElectro((prevCountElectro) => prevCountElectro - 1)
  }


  function nextCardForHouse() {
    if (countForHouse === forHouse.length - 1) {
      setCountForHouse(0);
      return;
    }
    setCountForHouse((prevCountForHouse) => prevCountForHouse + 1)
  }
  function prevCardForHouse() {
    if (countForHouse === 0) {
      setCountForHouse(forHouse.length - 1);
      return;
    }
    setCountForHouse((prevCountForHouse) => prevCountForHouse - 1)
  }

  function nextCardTool() {
    if (countTool === Tool.length - 1) {
      setCountTool(0);
      return;
    }
    setCountTool((prevCountTool) => prevCountTool + 1)
  }
  function prevCardTool() {
    if (countTool === 0) {
      setCountTool(Tool.length - 1);
      return;
    }
    setCountTool((prevCountTool) => prevCountTool - 1)
  }


  return (
    <div className="catalog">
      <div className="catalog-container">
        <div className="catalog-content1">

          <div className="paintBox productBox">
            <div className="titleBox">
              <h2 className='title'>Малярные товары</h2>
              <div className="sliderButtons">
                <button onClick={prevCardPaint} className='sliderButton'><img className='sliderButtonImg' src={prev} alt="" /></button>
                <button onClick={nextCardPaint} className='sliderButton'><img className='sliderButtonImg' src={next} alt="" /></button>
              </div>
            </div>
            <div className="contentBox">
            <Card img={paintImgs[countPaint]} title={Paint[countPaint].название} size={Paint[countPaint].размер} type={Paint[countPaint].тип} price={Paint[countPaint].цена} />
              {/* {productData.map((product) => (
                <div key={product.id}>
                  <h3>{product.name}</h3>
                  <p>Price: {product.price}</p>
                  Paint
                </div>
              ))} */}
            </div>
          </div>

          <div className="clothesBox productBox">
            <div className="titleBox">

              <h2 className='title'>Строительная одежда</h2>

              <div className="sliderButtons">
                <button onClick={nextCardClothes} className='sliderButton'><img className='sliderButtonImg' src={prev} alt="" /></button>
                <button onClick={prevCardClothes} className='sliderButton'><img className='sliderButtonImg' src={next} alt="" /></button>
              </div>
            </div>
            <div className="contentBox">
              <Card img={clothesImgs[countClothes]} title={Clothes[countClothes].название} size={Clothes[countClothes].размер} type={Clothes[countClothes].тип} price={Clothes[countClothes].цена} />
            </div>
          </div>

          <div className="seasonBox productBox">
            <div className="titleBox">
              <h2 className='title'>Сезонный инструмент</h2>
              <div className="sliderButtons">
                <button onClick={prevCardSeason} className='sliderButton'><img className='sliderButtonImg' src={prev} alt="" /></button>
                <button onClick={nextCardSeason} className='sliderButton'><img className='sliderButtonImg' src={next} alt="" /></button>
              </div>
            </div>
            <div className="contentBox">
              <Card img={seasonImgs[countSeason]} title={seasonTools[countSeason].название} material={seasonTools[countSeason].материал} type={seasonTools[countSeason].тип} price={seasonTools[countSeason].цена} />
            </div>
          </div>
        </div>

        <div className="catalog-content2">
          <div className="productBox">
            <div className="titleBox">

              <h2 className='title'>Электрооборудование</h2>

              <div className="sliderButtons">
                <button onClick={prevCardElectro} className='sliderButton'><img className='sliderButtonImg' src={prev} alt="" /></button>
                <button onClick={nextCardElectro} className='sliderButton'><img className='sliderButtonImg' src={next} alt="" /></button>
              </div>
            </div>

            <div className="contentBox">
              <Card img={electroImgs[countElectro]} title={Electro[countElectro].название} power={Electro[countElectro].мощность} type={Electro[countClothes].тип} price={Electro[countElectro].цена} />
            </div>
          </div>
          <div className="productBox">
            <div className="titleBox">

              <h2 className='title'>Для дома и дачи</h2>

              <div className="sliderButtons">
                <button onClick={prevCardForHouse} className='sliderButton'><img className='sliderButtonImg' src={prev} alt="" /></button>
                <button onClick={nextCardForHouse} className='sliderButton'><img className='sliderButtonImg' src={next} alt="" /></button>
              </div>
            </div>
            <div className="contentBox">
              <Card img={forHouseImgs[countForHouse]} title={forHouse[countForHouse].название} type={forHouse[countForHouse].тип} size={forHouse[countForHouse].размер} price={forHouse[countForHouse].цена} />
            </div>
          </div>
          <div className="productBox">
            <div className="titleBox">

              <h2 className='title'>Инструмент</h2>

              <div className="sliderButtons">
                <button onClick={prevCardTool} className='sliderButton'><img className='sliderButtonImg' src={prev} alt="" /></button>
                <button onClick={nextCardTool} className='sliderButton'><img className='sliderButtonImg' src={next} alt="" /></button>
              </div>
            </div>
            <div className="contentBox">
              <Card img={toolImgs[countTool]} title={Tool[countTool].название} material={Tool[countTool].материал} type={Tool[countTool].тип} price={Tool[countTool].цена} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

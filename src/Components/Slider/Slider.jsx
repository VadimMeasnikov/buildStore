import React from 'react'
import { useState, useEffect } from 'react'

import Card from '../Card/Card'

import next from "../../img/nextBtn.png";
import prev from "../../img/prevBtn.png";


import paintImg1 from "../../img/paintImg.png";
import paintImg2 from "../../img/paintImg1.png";
import paintImg3 from "../../img/paintImg2.png";

import clothesImg1 from "../../img/clothesImg.jpg";
import clothesImg2 from "../../img/clothesImg1.png";
import clothesImg3 from "../../img/clothesImg2.png";

import seasonImg1 from "../../img/season1.png";
import seasonImg2 from "../../img/season2.png";
import seasonImg3 from "../../img/season3.png";

import electroImg1 from "../../img/electro1.png";
import electroImg2 from "../../img/electro2.png";
import electroImg3 from "../../img/iron.png";

import forHouse1 from "../../img/forHome1.jpg";
import forHouse2 from "../../img/forHome2Brick.jpg";
import forHouse3 from "../../img/forHome3.jpg";

import tool1 from "../../img/tool1.png";
import tool2 from "../../img/tool2.png";
import tool3 from "../../img/tool3.png";

import './slider.scss'

export default function Slider({ items, arrBasket, category, arrSaves, arrCardFunctions}) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const imgs = [
        [paintImg1, paintImg2, paintImg3, paintImg2],
        [clothesImg2, clothesImg2, clothesImg1, clothesImg3],
        [seasonImg1, seasonImg2, seasonImg3, seasonImg1],
        [electroImg1, electroImg3, electroImg1, electroImg2],
        [forHouse2, forHouse1, forHouse3, forHouse1],
        [tool1, tool2, tool3, tool2]
    ]



    const handleNext = () => {
        const currentCategoryImgs = imgs[currentIndex];
        const nextIndex = (currentIndex + 1) % currentCategoryImgs.length;
        setCurrentIndex(nextIndex);
    };

    const handlePrev = () => {
        const currentCategoryImgs = imgs[currentIndex];
        const prevIndex = (currentIndex - 1 + currentCategoryImgs.length) % currentCategoryImgs.length;
        setCurrentIndex(prevIndex);
    };

    const currentCategoryImgs = imgs[currentIndex];
    const currentImage = currentCategoryImgs[currentIndex];
    return (
        <div className='slider'>
            <Card  item={items[currentIndex]} category={category} arrBasket={arrBasket} arrSaves={arrSaves} arrCardFunctions={arrCardFunctions}/>
            <div className="buttons">
                <button className='sliderBtn' onClick={handlePrev}><img src={prev} alt="" /></button>
                <button className='sliderBtn' onClick={handleNext}><img src={next} alt="" /></button></div>
        </div>
    )
}

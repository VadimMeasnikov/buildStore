
import React from "react";
import { useState } from "react";


import next from "../../img/nextBtn.png";
import prev from "../../img/prevBtn.png";

import Card from "../Card/Card";
import Slider from "../Slider/Slider";

import "./catalog.scss";

export default function Catalog({ products, arrBasket, arrSaves, arrCardFunctions,cardImgsFunctions }) {

  // const { allArrCards, setAllArrCards } = arrCardsState;

  return (
    <div className="catalog">
      <div className="catalog-container">
        {products.allArrCatalog.map((category) => (
          <div key={category.category} className="product_box">
            <h2 className="categoryName">{category.category}</h2>
            <Slider cardImgsFunctions={cardImgsFunctions} items={category.products} category={category.category} arrBasket={arrBasket} arrSaves={arrSaves} arrCardFunctions={arrCardFunctions}/>
          </div>
        ))}
      </div>
    </div>
  )
}

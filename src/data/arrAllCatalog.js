
import paint from "./paint.json";
import clothes from "./clothes.json";
import electro from "./electrEq.json";
import forHouse from "./forHouse.json";
import seasonTools from "./seasonTool.json";
import tool from "./tool.json";

export const arrAllCatalog = [
    {
        category: "Малярные товары",
        products: [...paint]
    },
    {
        category: "Спецодежда",
        products: [...clothes]
    },
    {
        category: "Электрооборудование",
        products: [...electro]
    },
    {
        category: "Товары для дома",
        products: [...forHouse]
    },
    {
        category: "Сезонный инструмент",
        products:[...seasonTools]
    },
    {
        category: "Инструменты",
        products: [...tool]
    },
]
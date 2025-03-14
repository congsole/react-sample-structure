import salesJson from "assets/data/sales.json";
import { FILTER_DATA } from "modules/aimc/constants/filters";

function getRandomColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}

function round(number: number, digit?: number) {
    return Number(number.toFixed(digit));
}

export function getFilterData(
    typeCd: string,
    parentCd?: string
) {
    return FILTER_DATA.find(filter => filter.typeCd === typeCd && (parentCd ? filter.parentCd === parentCd : true)) || null;
}

export function getSalesData(
    startDt: string,
    endDt: string,
    CUST: string[],
    PRDL: string[],
) {
    const startDate = new Date(startDt);
    const endDate = new Date(endDt);

    const data = salesJson;

    const orders = data.filter(order => {
        const orderDate = new Date(order.주문일);
        if(
            orderDate >= startDate &&
            orderDate <= endDate &&
            (CUST.length === 0 || CUST.indexOf(order.고객분류) > -1) &&
            (PRDL.length === 0 || PRDL.indexOf(order.제품대분류) > -1)
        ) {
            return order;
        }
    });

    const series = getFilterData("PRDL")?.options.map((largeCategory) => {
        return {
            name: largeCategory,
            color: getRandomColor(),
            smallCategories: getFilterData("PRDS", largeCategory)?.options,
            data: new Array<{x: number, y: number, z: number, name: string}>,
        }
    });
    series?.forEach((s) => {
        s.smallCategories?.forEach(smallCategory => {
            const filteredOrderList = orders.filter((order) => order.제품소분류 === smallCategory);
            let numOfProducts = 0;
            let salesSum = 0;
            let profitSum = 0;

            filteredOrderList.forEach((order) => {
                salesSum += Number(order.매출);
                profitSum += Number(order.이익);
                numOfProducts += Number(order.수량);
            });
            s.data.push({
                x: round(salesSum/numOfProducts, 2),
                y: round(profitSum/numOfProducts, 2),
                z: numOfProducts,
                name: smallCategory,
            });
        })
    })
    return series || null;
}
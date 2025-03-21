import salesJson from "assets/data/sales.json";
import { FILTER_DATA } from "modules/aimc/constants/filters";
import { sidoCode, sigunguCode } from "assets/data/map/regionCode";
import dayjs from "dayjs";

const colorList = [
    '#B7B1F2',
    '#FDB7EA',
    '#98D2C0',
    '#F6F8D5',
];

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

const basicallyFilter = (
    startDt: string,
    endDt: string,
    STAT: string[],
    CUST: string[],
    PRDL: string[],
) => {
    const startDate = new Date(startDt);
    const endDate = new Date(endDt);

    const data = salesJson;

    // 현재 기간
    return data.filter(order => {
        const orderDate = new Date(order.주문일);
        if(
            orderDate >= startDate &&
            orderDate <= endDate &&
            (STAT.indexOf(order.도State) > -1) &&
            (CUST.length === 0 || CUST.indexOf(order.고객분류) > -1) &&
            (PRDL.length === 0 || PRDL.indexOf(order.제품대분류) > -1)
        ) {
            return order;
        }
    });
};

export function getSalesData(
    startDt: string,
    endDt: string,
    STAT: string[],
    CUST: string[],
    PRDL: string[],
) {
    const range = dayjs(endDt).diff(startDt, "days");
    const lastStartDt = dayjs(startDt).subtract(range + 1, "days").toString();
    const lastEndDt = dayjs(endDt).subtract(range + 1, "days").toString();

    const orders = basicallyFilter(startDt, endDt, STAT, CUST, PRDL);
    let totalOrders: number = 0, totalSales: number = 0, totalProfit: number  = 0;
    orders.forEach(order => {
        totalOrders += Number(order.수량);
        totalSales += Number(order.매출);
        totalProfit += Number(order.이익);
    });
    
    const lastOrders = basicallyFilter(lastStartDt, lastEndDt, STAT, CUST, PRDL);
    let lastTotalOrders: number = 0, lastTotalSales: number = 0, lastTotalProfit: number  = 0;
    lastOrders.forEach(order => {
        lastTotalOrders += Number(order.수량);
        lastTotalSales += Number(order.매출);
        lastTotalProfit += Number(order.이익);
    });

    const series = getFilterData("PRDL")?.options.map((largeCategory, index) => {
        return {
            name: largeCategory,
            // color: getRandomColor(),
            color: colorList[index],
            smallCategories: getFilterData("PRDS", largeCategory)?.options || [],
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
    });

    const orderDonutData = new Array<SunburstDonutDataType>();
    const saleDonutData = new Array<SunburstDonutDataType>();
    const profitDonutData = new Array<SunburstDonutDataType>();

    series?.forEach(s => {
        orderDonutData.push({
            id: s.name,
            name: s.name,
            color: s.color,
        });
        saleDonutData.push({
            id: s.name,
            name: s.name,
            color: s.color,
        });
        profitDonutData.push({
            id: s.name,
            name: s.name,
            color: s.color,
        });
        s.data.forEach((d, index) => {
            orderDonutData.push({
                parent: s.name,
                name: d.name,
                value: d.z,
                color: s.color.replace(")", `, .5${index})`),
            });
        });
        s.smallCategories?.forEach((smallCategory, index) => {
            const sale = {
                parent: s.name,
                name: smallCategory,
                value: 0,
                color: s.color.replace(")", `, .5${index})`),
            };
            const profit = {
                parent: s.name,
                name: smallCategory,
                value: 0,
                color: s.color.replace(")", `, .5${index})`),
            };
            orders.forEach(order => {
                if(order.제품소분류 === smallCategory) {
                    sale.value += Number(order.매출);
                    profit.value += Number(order.이익);
                }
            });
            saleDonutData.push(sale);
            profitDonutData.push(profit);
        });
    });

    return {
        series: series || null,
        totalOrders: { last: round((totalOrders / lastTotalOrders), 3)*100, now: totalOrders },
        totalSales: { last: round((totalSales / lastTotalSales), 3)*100, now: round(totalSales, 2) } ,
        totalProfit: { last: round((totalProfit / lastTotalProfit), 3)*100, now: round(totalProfit, 2) },
        orderDonutData,
        saleDonutData,
        profitDonutData,
    };
};

export const getSalesByRegion = (
    startDt: string,
    endDt: string,
    CUST: string[],
    PRDL: string[],
) =>  {
    const filteredOrders = basicallyFilter(startDt, endDt, getFilterData("STAT")!.options, CUST, PRDL);

    const sidoData = sidoCode.map((sido) => {
        let sidoName = sido.SIDO_NM.replace("특별시", "");
        sidoName = sidoName.replace("광역시", "");
        sidoName = sidoName.replace("특별자치시", "");
        sidoName = sidoName.replace("특별자치도", "");
        const orders = filteredOrders.filter((order) => order.도State.indexOf(sidoName) !== -1);
        let value = 0;
        let byCustomer = {};
        let byProduct = {};
        orders.forEach((order) => {
            value += Number(order.수량);
            let custValue = 0, prodValue = 0;
            orders.forEach(o => {
                custValue += order.고객명 === o.고객명 ? Number(o.수량) : 0;
                prodValue += order.이름 === o.이름 ? Number(o.수량) : 0;
            });
            byCustomer = {...byCustomer, [order.고객명]: custValue};
            byProduct = {...byProduct, [order.이름]: prodValue};
        });
        const salesByCustomer = Object.entries(byCustomer).map(([key, value]) => { return {name: key, value: Number(value)}}).sort((a, b) => - Number(a.value) + Number(b.value));
        const salesByProduct = Object.entries(byProduct).map(([key, value]) => { return {name: key, value: Number(value)}}).sort((a, b) => - Number(a.value) + Number(b.value));
        return {
            ...sido,
            value: value,
            salesByCustomer,
            salesByProduct,
        }
    });
    const sigunguData = sigunguCode.map((sigungu) => {
        const index = sigungu.SIGUNGU_NM.indexOf(" ");
        let sigunguName = index > -1 ? sigungu.SIGUNGU_NM.substring(0, index) : sigungu.SIGUNGU_NM;
        const orders = filteredOrders.filter((order) => order.시군구City.indexOf(sigunguName) !== -1);
        let value = 0;
        let byCustomer = {};
        let byProduct = {};
        orders.forEach((order) => {
            value += Number(order.수량);
            let custValue = 0, prodValue = 0;
            orders.forEach(o => {
                custValue += order.고객명 === o.고객명 ? Number(o.수량) : 0;
                prodValue += order.이름 === o.이름 ? Number(o.수량) : 0;
            });
            byCustomer = {...byCustomer, [order.고객명]: custValue};
            byProduct = {...byProduct, [order.이름]: prodValue};
        });
        const salesByCustomer = Object.entries(byCustomer).map(([key, value]) => { return {name: key, value: Number(value)}}).sort((a, b) => - Number(a.value) + Number(b.value));
        const salesByProduct = Object.entries(byProduct).map(([key, value]) => { return {name: key, value: Number(value)}}).sort((a, b) => - Number(a.value) + Number(b.value));
        return {
            ...sigungu,
            value: value,
            salesByCustomer,
            salesByProduct,
        }
    });

    return {
        sidoData, sigunguData
    };
};
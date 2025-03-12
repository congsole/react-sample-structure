

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, "assets/data/sales.json");
const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf8'));

// 날짜 변환 함수 (dd/MM/YY -> YYYY-MM-DD)
const convertDateFormat = (dateString) => {
    const [month, day, year] = dateString.split('/');
    return `20${year}-${month}-${day}`; // '20'을 붙여서 4자리 연도로 변환
};

// 데이터 변환
const updatedData = jsonData.map(order => ({
    ...order,
    "주문일": convertDateFormat(order["주문일"])
}));

// 변환된 데이터를 다시 저장
fs.writeFileSync(filePath, JSON.stringify(updatedData, null, 2), 'utf8');

console.log('✅ 주문일 날짜 형식 변환 완료!');

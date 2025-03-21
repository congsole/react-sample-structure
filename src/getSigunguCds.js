

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, "assets/data/map/BND_SIGUNGU_PG_Topo.json");
const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf8'));

// 데이터 변환
const sigunguCode = [];

jsonData.objects.BND_SIGUNGU_PG.geometries.forEach(geometry => {
    sigunguCode.push({SIGUNGU_CD: Number(geometry.properties["SIGUNGU_CD"]), SIGUNGU_NM: geometry.properties["SIGUNGU_NM"]});
});

const newFilePath = path.join(__dirname, "assets/data/map/sigunguCode.json");
// 변환된 데이터를 다시 저장
fs.writeFileSync(newFilePath, JSON.stringify(sigunguCode, null, 2), 'utf8');

console.log('✅ 주문일 날짜 형식 변환 완료!');

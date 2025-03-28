import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import 'Highcharts/highcharts-more';
import 'highcharts/modules/drilldown';
import 'highcharts/modules/sunburst';
import 'highcharts/modules/exporting';
import 'highcharts/modules/export-data';
import 'highcharts/modules/accessibility';

import { PortletContent } from "modules/aimc/types/report";
import { getSalesData } from "modules/aimc/services/report/actions";
import useFilterStore from "modules/aimc/store/filterStore";
import { Row, Col } from "antd";

const Dashboard_1: React.FC<PortletContent> = ({key}) => {
    const startDt = useFilterStore((state) => state.getSelectedOptions("startDt"))![0];
    const endDt = useFilterStore((state) => state.getSelectedOptions("endDt"))![0];
    const STAT = useFilterStore((state) => state.getSelectedOptions("STAT")) || [];
    const CUST = useFilterStore((state) => state.getSelectedOptions("CUST")) || [];
    const PRDL = useFilterStore((state) => state.getSelectedOptions("PRDL")) || [];

    const data = getSalesData(startDt, endDt, STAT, CUST, PRDL) || [];

    const chartOptions_매출_이익_판매량
        // : Highcharts.ChartOptions
        = {
        chart: {
            type: "bubble",
            plotBorderWidth: 0,
            zooming: {
                type: 'xy'
            },
            width: null,
            height: 350
        },

        credits: {
            enabled: false // 하단의 로고 지우는 옵션
        },
        legend: {
            enabled: true
        },

        title: {
            text: '제품 분류 별 매출vs이익 분포',
            align: 'left',
        },

        accessibility: {
            point: {
                valueDescriptionFormat:
                    '{index}. {point.name}, valuation: ${point.x}B, revenue: ' +
                    '${point.y}B, LossesOrProfit: ${point.z}B.'
            }
        },

        xAxis: {
            gridLineWidth: 1,
            crosshair: true,
            title: {
                text: '매출평균'
            },
            labels: {
                format: '${value}'
            },
            // accessibility: {
            //     rangeDescription: 'Range: $2B to $18B.'
            // }
        },

        yAxis: {
            startOnTick: false,
            endOnTick: false,
            crosshair: true,
            title: {
                text: '이익평균'
            },
            labels: {
                format: '${value}'
            },
            // accessibility: {
            //     rangeDescription: 'Range: $0 to $2B.'
            // }
            plotLines: [{
                value: 0, // 보조선을 긋고 싶은 y값
                color: 'red', // 보조선 색상
                width: 2, // 보조선 두께
                dashStyle: 'ShortDash', // 보조선 스타일
                label: {
                    text: null, // 보조선 레이블
                    align: 'right',
                    verticalAlign: 'middle',
                    x: -10
                }
            }]
        },

        tooltip: {
            useHTML: true,
            headerFormat: '<table>',
            pointFormat:
                '<tr><th colspan="2"><h3>{point.name}</h3></th></tr>' +
                '<tr><th>매출평균:</th><td>${point.x}</td></tr>' +
                '<tr><th>이익평균:</th><td>${point.y}</td></tr>' +
                '<tr><th>총 수량:</th><td>{point.z}</td></tr>',
            footerFormat: '</table>',
            followPointer: true,
            shared: true
        },

        plotOptions: {
            series: {
                dataLabels: {
                    enabled: false,
                    format: '{point.name}'
                }
            }
        },

        series: data.series,
    }

    const KPIOptions = (title: string, value: {last: number, now: number}, unit?: string, color?: string) => ({
        chart: {
            type: 'KPI',
            height: 120,
        },
        credits: {
            enabled: false // 하단의 로고 지우는 옵션
        },
        title: {
            text: title,
            align: 'left',
        },
        subtitle: {
            useHTML: true, // HTML 사용 가능하도록 설정
            text: `
<span style="color: grey; font-size: 15px;">직전대비 <span style="color: ${value.last > 0 ? 'red' : 'blue'};">${value.last >= 0 ? '+' : ''}${value.last.toLocaleString()} %</span></span>
<br /><span style="font-weight: bold;">${value.now.toLocaleString()} ${unit ?? ''}</span><br />`,
            align: 'right',
            style: {
                color: color ?? "#FF5733", // 글자 색상
                fontSize: "30px", // 글자 크기
                fontWeight: "bold", // 글자 두께
                fontFamily: "Arial, sans-serif" // 폰트 지정
            }
        },
    });

    const sunburstChartOptions = (title: string, chartData: Array<SunburstDonutDataType>, unit?: string) => ({
        chart: {
            height: 290,
        },
        title: {
            text: title,
            align: 'left',
        },
        credits: {
            enabled: false // 하단의 로고 지우는 옵션
        },
        series: [
            {
                type: 'sunburst',
                name: 'Total',
                data: chartData,
                allowDrillToNode: true,
                cursor: 'pointer',
                dataLabels: {
                    format: '{point.name}',
                    color: '#000000',
                    style: {
                        textOutline: false,
                    }
                },
                levels: [
                    {
                        level: 1,
                        levelIsConstant: false,
                        dataLabels: {
                            filter: {
                                property: 'outerArcLength',
                                operator: '>',
                                value: 64
                            }
                        }
                    },
                    {
                        level: 2,
                        colorByPoint: true
                    }
                ]
            }
        ],

        tooltip: {
            headerFormat: '',
            pointFormat: `<b>{point.name}</b>: <b>{point.value}</b> ${unit}`
        }
    });

    return (
        <div
            className="dashboard-wrapper"
            key={key}
        >
            <Row className="dashboard-row" gutter={8}>
                <Col span={24} className="dashboard-col">
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={chartOptions_매출_이익_판매량}
                    />
                </Col>
            </Row>
            <Row className="dashboard-row" gutter={8}>
                <Col span={8} className="dashboard-col">
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={KPIOptions("판매량 총계", data.totalOrders, "개", "black")}
                    />
                </Col>
                <Col span={8} className="dashboard-col">
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={KPIOptions("매출 총계", data.totalSales, "$", "black")}
                    />
                </Col>
                <Col span={8} className="dashboard-col">
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={KPIOptions("영업이익 총계", data.totalProfit, "$", "black")}
                    />
                </Col>
            </Row>
            <Row className="dashboard-row" gutter={8}>
                <Col span={8} className="dashboard-col">
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={sunburstChartOptions("판매량 비중", data.orderDonutData, "개")}
                    />
                </Col>
                <Col span={8} className="dashboard-col">
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={sunburstChartOptions("매출 비중", data.saleDonutData, "$")}
                    />
                </Col>
                <Col span={8} className="dashboard-col">
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={sunburstChartOptions("영업이익 비중", data.profitDonutData, "$")}
                    />
                </Col>
            </Row>
        </div>
    );
}

export default Dashboard_1;
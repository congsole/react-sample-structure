import React, {useEffect} from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import 'Highcharts/highcharts-more';
import 'highcharts/modules/drilldown';
import 'highcharts/modules/exporting';
import 'highcharts/modules/export-data';
import 'highcharts/modules/accessibility';

import { PortletContent } from "modules/aimc/types/report";
import { getSalesData } from "modules/aimc/services/report/actions";
import useFilterStore from "modules/aimc/store/filterStore";
import Row from "../../Row";

const Dashboard_1: React.FC<PortletContent> = ({key}) => {

    const chartOptions_매출_이익_판매량
        // : Highcharts.ChartOptions
        = {
        chart: {
            type: "bubble",
            plotBorderWidth: 0,
            zooming: {
                type: 'xy'
            }
        },

        credits: {
            enabled: false // 하단의 로고 지우는 옵션
        },
        legend: {
            enabled: true
        },

        title: {
            text: '매출/이익/제품소분류 별 판매량 분포',
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

        series: [],
    }

    return (
        <div
            className="dashboard-wrapper"
            key={key}
        >
            <Row>

                <HighchartsReact
                    highcharts={Highcharts}
                    options={chartOptions_매출_이익_판매량}
                />
            </Row>
        </div>
    );
}

export default Dashboard_1;
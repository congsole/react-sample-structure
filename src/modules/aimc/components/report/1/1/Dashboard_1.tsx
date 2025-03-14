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

const Dashboard_1: React.FC<PortletContent> = ({key}) => {
    const startDt = useFilterStore((state) => state.getSelectedOptions("startDt"))![0];
    const endDt = useFilterStore((state) => state.getSelectedOptions("endDt"))![0];
    const CUST = useFilterStore((state) => state.getSelectedOptions("CUST")) || [];
    const PRDL = useFilterStore((state) => state.getSelectedOptions("PRDL")) || [];
    const series = getSalesData(startDt, endDt, CUST, PRDL);

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

        // series: [
        //     {		name: '가전',
        //         color: '#FF3232',
        //         data: [
        //             { x: 15.1, y: 0.756, z: 0.063, name: 'Pinterest' },
        //             {
        //                 x: 18.6,
        //                 y: 0.331,
        //                 z: 0.0075,
        //                 name:
        //                     'Zoom',
        //             },
        //             { x: 14.4, y: 2.16, z: 0.911, name: 'Lyft' },
        //             { x: 7, y: 0.602, z: 0.155, name: 'Fartech' },
        //             { x: 6.3, y: 0.16, z: 0.0053, name: 'Elastic' },
        //             { x: 5.9, y: 0.833, z: 0.102, name: 'SolarWinds' },
        //             { x: 4.8, y: 0.241, z: 0.131, name: 'Anaplan' },
        //             { x: 4.6, y: 0.088, z: 0.03, name: 'Beyond Meat' },
        //
        //         ]
        //     },
        //     {
        //         name: '가구',
        //         color: '#32ff32',
        //         data: [
        //             { x: 3.9, y: 0.118, z: 0.041, name: 'PagerDuty' },
        //             { x: 2.1, y: 0.254, z: 0.155, name: 'SurveyMonkey' },
        //             { x: 2, y: 0.15, z: 0.195, name: 'Jumia' },
        //             { x: 1.8, y: 0.253, z: 0.02, name: 'Upwork' },
        //             { x: 1.4, y: 0.292, z: 0.064, name: 'Eventbrite' }
        //         ]
        //     }
        // ]
        series: series,
    }

    return (
        <div
            className="dashboard-wrapper"
            key={key}
        >
            <HighchartsReact
                highcharts={Highcharts}
                options={chartOptions_매출_이익_판매량}
            />
        </div>
    );
}

export default Dashboard_1;
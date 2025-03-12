import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import 'Highcharts/highcharts-more';
import 'highcharts/modules/drilldown';
import 'highcharts/modules/exporting'
import 'highcharts/modules/export-data'
import 'highcharts/modules/accessibility'

type PortletContent = {
    key: React.Key;
}

const Dashboard_1: React.FC<PortletContent> = ({key}) => {

    const chartOptions = {
        chart: {
            type: "bubble",
            plotBorderWidth: 0,
            zooming: {
                type: 'xy'
            }
        },

        legend: {
            enabled: true
        },

        title: {
            text: '제품 분류 별 매출/영업이익'
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
                text: 'Valuation'
            },
            labels: {
                format: '${value}B'
            },
            accessibility: {
                rangeDescription: 'Range: $2B to $18B.'
            }
        },

        yAxis: {
            startOnTick: false,
            endOnTick: false,
            crosshair: true,
            title: {
                text: 'Revenue'
            },
            labels: {
                format: '${value}B'
            },
            accessibility: {
                rangeDescription: 'Range: $0 to $2B.'
            }
        },

        tooltip: {
            useHTML: true,
            headerFormat: '<table>',
            pointFormat:
                '<tr><th colspan="2"><h3>{point.name}</h3></th></tr>' +
                '<tr><th>Valuation:</th><td>${point.x}B</td></tr>' +
                '<tr><th>Revenue:</th><td>${point.y}B</td></tr>' +
                '<tr><th>Losses or Profit:</th><td>${point.z}B</td></tr>',
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

        series: [
            {		name: '가전',
                color: '#FF3232',
                data: [
                    { x: 15.1, y: 0.756, z: 0.063, name: 'Pinterest' },
                    {
                        x: 18.6,
                        y: 0.331,
                        z: 0.0075,
                        name:
                            'Zoom',
                    },
                    { x: 14.4, y: 2.16, z: 0.911, name: 'Lyft' },
                    { x: 7, y: 0.602, z: 0.155, name: 'Fartech' },
                    { x: 6.3, y: 0.16, z: 0.0053, name: 'Elastic' },
                    { x: 5.9, y: 0.833, z: 0.102, name: 'SolarWinds' },
                    { x: 4.8, y: 0.241, z: 0.131, name: 'Anaplan' },
                    { x: 4.6, y: 0.088, z: 0.03, name: 'Beyond Meat' },

                ]
            },
            {
                name: '가구',
                color: '#32ff32',
                data: [
                    { x: 3.9, y: 0.118, z: 0.041, name: 'PagerDuty' },
                    { x: 2.1, y: 0.254, z: 0.155, name: 'SurveyMonkey' },
                    { x: 2, y: 0.15, z: 0.195, name: 'Jumia' },
                    { x: 1.8, y: 0.253, z: 0.02, name: 'Upwork' },
                    { x: 1.4, y: 0.292, z: 0.064, name: 'Eventbrite' }
                ]
            }
        ]
    }

    return (
        <div
            className="chart-wrapper"
            onMouseDown={(e) => e.stopPropagation()}
            onDragStart={(e) => e.stopPropagation()}
            onDrop={(e) => e.stopPropagation()}
            key={key}
        >
            <HighchartsReact
                highcharts={Highcharts}
                options={chartOptions}
            />
        </div>
    );
}

export default Dashboard_1;
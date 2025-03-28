import React from 'react';
import Highcharts from 'highcharts/highcharts';

import HighchartsReact from 'highcharts-react-official';
import 'Highcharts/highcharts-more';
import 'highcharts/modules/drilldown';
import 'highcharts/modules/exporting';
import 'highcharts/modules/export-data';
import 'highcharts/modules/accessibility';
import 'highcharts/modules/map';
import 'highcharts/highmaps';

import { PortletContent } from "modules/aimc/types/report";

import useFilterStore from "modules/aimc/store/filterStore";
import {getDashboard3data} from "../../../../services/report/actions";
import {Col, Row} from "antd";

const Dashboard: React.FC<PortletContent> = ({key}) => {
    const startDt = useFilterStore((state) => state.getSelectedOptions("startDt"))![0] || "";
    const endDt = useFilterStore((state) => state.getSelectedOptions("endDt"))![0] || "";
    const STAT = useFilterStore((state) => state.getSelectedOptions("STAT")) || [];
    const CUST = useFilterStore((state) => state.getSelectedOptions("CUST")) || [];
    const PRDL = useFilterStore((state) => state.getSelectedOptions("PRDL")) || [];

    const salesData = React.useMemo(() => getDashboard3data(startDt, endDt, STAT, CUST, PRDL), [startDt, endDt, STAT, CUST, PRDL]);
    const { regionalSalesData, dailySalesData, productSalesData } = salesData;

    const [stateIFilter, setStateIFilter] = React.useState<string>("");
    const [dateIFilter, setDateIFilter] = React.useState<string>("");
    const [productIFilter, setProductIFilter] = React.useState<string>("");

    const charts: Map<string, Highcharts.Chart> = new Map<string, Highcharts.Chart>();

    function load (this: Highcharts.Chart, event: Event) {
        const chart = this as Highcharts.Chart;
        charts.set(chart.options.title?.text!, chart);
    }

    // TODO chartOptions 1: 지역별  (bar)
    const regionalSalesOptions = React.useMemo(() => {
        const regionalSalesDataInteractive = regionalSalesData.map(r => r);
        regionalSalesDataInteractive.sort((a, b) => - a.y + b.y);
        regionalSalesDataInteractive.map(r => r.drilldownData.data.sort((a, b) => - a[1] + b[1]))

        return {
            chart: {
                type: 'bar',
                height: 350,
                events: {
                    load,
                },
            },
            credits: {
                enabled: false // 하단의 로고 지우는 옵션
            },
            title: {
                text: '지역별 판매량',
                align: 'left',
            },
            xAxis: {
                type: 'category',
                style: {
                    color: 'black', // x축 라벨 색상
                    textDecoration: 'none' // 밑줄 제거
                }
            },
            yAxis: {
                title: {
                    enabled: false,
                },

            },
            legend: {
                enabled: false
            },
            plotOptions: {
                series: {
                    borderWidth: 0,
                    dataLabels: {
                        enabled: true,
                        format: '{point.y} 개',
                        color: 'black',
                        style: {
                            textDecoration: 'none',
                        },
                    }
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:11px">{series.name} 판매량</span><br>',
                pointFormat: '<span style="color:{point.color}">{point.name}</span>: ' +
                    '<b>{point.y} 개</b><br/>'
            },
            series: [{
                name: '전국',
                colorByPoint: true,
                color: '#7d75b6',
                data: regionalSalesDataInteractive,
            }],
            drilldown: {
                activeAxisLabelStyle: {
                    color: '#000000',
                    fontWeight: 'normal',
                    // textDecoration: 'none',
                },
                activeDataLabelStyle: {
                    color: '#575757',
                    fontWeight: 'normal',
                    textDecoration: 'none',
                },
                series: regionalSalesDataInteractive.map(region => region?.drilldownData),
            }
        }
    }, [regionalSalesData]);

    // TODO chartOptions 2: 일별 판매량 (line)
    const dailySalesOptions = React.useMemo(() => {
        const pointValues = dailySalesData.map(point => point[1]);
        const maxDataValue = Math.max(...pointValues);
        return {
            chart: {
                type: 'line',
                height: 350,
                events: {
                    load,
                },
            },
            credits: {
                enabled: false // 하단의 로고 지우는 옵션
            },
            title: {
                text: '일별 판매량 추이',
                align: 'left',
            },
            xAxis: {
                type: 'category',
                lineWidth: 0,
            },
            yAxis: {
                title: {
                    enabled: false,
                },
                min: 0,
                max: maxDataValue,
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                series: {
                    borderWidth: 0,
                    dataLabels: {
                        enabled: false,
                    }
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:11px">{series.name} 판매량</span><br>',
                pointFormat: '<span style="color:{point.color}">{point.name}</span>: ' +
                    '<b>{point.y} 개</b><br/>'
            },
            series: [{
                name: '전국',
                color: '#7d75b6', // 라인 색상
                lineWidth: 3, // 라인 두께 설정
                marker: {
                    enabled: false,
                    fillColor: '#7d75b6' // 포인트 색상을 라인 색상과 동일하게 설정
                },
                data: dailySalesData,
            }],
        }
    }, [dailySalesData, stateIFilter]);
    // TODO chartOptions 3: 주요 제품별 판매량 (제품 소분류) (bar)
    const productSalesOptions = React.useMemo(() => {
        const productSalesDataInteractive = productSalesData.map(p => p);
        productSalesDataInteractive.sort((a, b) => - a.y + b.y);

        return {
            chart: {
                type: 'bar',
                height: 350,
                events: {
                    load,
                },
            },
            credits: {
                enabled: false // 하단의 로고 지우는 옵션
            },
            title: {
                text: '주요 제품 판매량',
                align: 'left',
            },
            xAxis: {
                type: 'category'
            },
            yAxis: {
                title: {
                    enabled: false,
                }
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                series: {
                    borderWidth: 0,
                    dataLabels: {
                        enabled: true,
                        format: '{point.y} 개',
                        color: '#575757',
                    }
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:11px">{series.name} 판매량</span><br>',
                pointFormat: '<span style="color:{point.color}">{point.name}</span>: ' +
                    '<b>{point.y} 개</b><br/>'
            },
            series: [{
                name: '전국',
                colorByPoint: true,
                data: productSalesDataInteractive,
            }],
        }
    }, [productSalesData, stateIFilter]);

    // TODO interactions: 세 차트 간 상호작용 구현

    return (
        <div
            className="dashboard-wrapper"
            key={key}
        >
            <Row className="dashboard-row" gutter={8}>
                <Col span={8} className="dashboard-col">
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={regionalSalesOptions}
                    />
                </Col>
                <Col span={8} className="dashboard-col">
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={dailySalesOptions}
                    />
                </Col>
                <Col span={8} className="dashboard-col">
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={productSalesOptions}
                    />
                </Col>
            </Row>

        </div>
    );
}

export default Dashboard;
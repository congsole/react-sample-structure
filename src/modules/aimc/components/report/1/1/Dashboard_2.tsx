import React from 'react';
import Highcharts from 'highcharts/highcharts';
import {DrilldownEventObject} from "highcharts";

import HighchartsReact from 'highcharts-react-official';
import 'Highcharts/highcharts-more';
import 'highcharts/modules/drilldown';
import 'highcharts/modules/exporting';
import 'highcharts/modules/export-data';
import 'highcharts/modules/accessibility';
import 'highcharts/modules/map';
import 'highcharts/highmaps';

import {PortletContent} from "modules/aimc/types/report";
import useFilterStore from "modules/aimc/store/filterStore";
import {Col, Row} from "antd";

import sidoMapData from "assets/data/map/BND_SIDO_PG_Topo.json"
import sigunguMapData from "assets/data/map/BND_SIGUNGU_PG_Topo.json"

import {getSalesByRegion} from "modules/aimc/services/report/actions";

const Dashboard: React.FC<PortletContent> = ({key}) => {
    const startDt = useFilterStore((state) => state.getSelectedOptions("startDt"))![0] || "";
    const endDt = useFilterStore((state) => state.getSelectedOptions("endDt"))![0] || "";
    const CUST = useFilterStore((state) => state.getSelectedOptions("CUST")) || [];
    const PRDL = useFilterStore((state) => state.getSelectedOptions("PRDL")) || [];

    const salesData = React.useMemo(() => getSalesByRegion(startDt, endDt, CUST, PRDL), [startDt, endDt, CUST, PRDL]);
    const { nationalData, sidoData, sigunguData } = salesData;

    let selectedRegion: {gubun: string, code: number} | null = null; // 맵이 리렌더링 되면 드릴다운도 초기화 되므로 리렌더링 없이 지도에서 선택된 지역을 체크해야함.
    const [selectedRegionState, setSelectedRegionState] = React.useState<{gubun: string, code: number} | null>(); // column차트는 지도에서 지역이 선택될 때마다 리렌더링 되어야 하므로 해당 state에 의존함.

    const sidoGeoJson = React.useMemo(() => Highcharts.geojson(sidoMapData), [sidoMapData]);
    const sigunguGeoJson = React.useMemo(() => Highcharts.geojson(sigunguMapData), [sigunguMapData]);

    React.useEffect(() => {
        selectedRegion = null;
        setSelectedRegionState(null);
    }, [startDt, endDt, CUST, PRDL]);

    const salesByCustomerOptions = React.useMemo(() => {
        if (!selectedRegionState) {
            return barOptions("고객 주문량 TOP 5", nationalData.salesByCustomer.slice(0, 5));
        }
        if (selectedRegionState.gubun === "SIDO_CD") {
            const sido = sidoData.find(sido => sido.SIDO_CD === selectedRegionState!.code)!;
            return barOptions("고객 주문량 TOP 5", sido.salesByCustomer.slice(0, 5));
        }
        if (selectedRegionState.gubun === "SIGUNGU_CD") {
            const sigungu = sigunguData.find(sigungu => sigungu.SIGUNGU_CD === selectedRegionState!.code)!;
            return barOptions("고객 주문량 TOP 5", sigungu.salesByCustomer.slice(0, 5));
        }
    }, [selectedRegionState, salesData]);

    const salesByProductOptions = React.useMemo(() => {
        if (!selectedRegionState) {
            return barOptions("제품 주문량 TOP 5", nationalData.salesByProduct.slice(0, 5));
        }
        if (selectedRegionState.gubun === "SIDO_CD") {
            const sido = sidoData.find(sido => sido.SIDO_CD === selectedRegionState!.code)!;
            return barOptions("제품 주문량 TOP 5", sido.salesByProduct.slice(0, 5));
        }
        if (selectedRegionState.gubun === "SIGUNGU_CD") {
            const sigungu = sigunguData.find(sigungu => sigungu.SIGUNGU_CD === selectedRegionState!.code)!;
            return barOptions("제품 주문량 TOP 5", sigungu.salesByProduct.slice(0, 5));
        }
    }, [selectedRegionState, salesData]);

    const drilldown = (e: DrilldownEventObject) => {
        if (!e.seriesOptions) {
            const mapKey = Number(e.point.options.drilldown!);
            if(mapKey) {
                selectedRegion = ({gubun: mapKey > 100 ? "SIGUNGU_CD" : "SIDO_CD", code: mapKey});
                setSelectedRegionState({gubun: mapKey > 100 ? "SIGUNGU_CD" : "SIDO_CD", code: mapKey});
            }

            const chart: Highcharts.Chart = e.point.series.chart;
            chart.showLoading('데이터 로딩 중...');

            let data;

            if (selectedRegion?.gubun === "SIDO_CD") {
                data = sigunguGeoJson
                    .filter(d => d.properties.SIGUNGU_CD.startsWith(mapKey))
                    .map(d => ({
                        ...d,
                        value: sigunguData.find(sigungu => sigungu.SIGUNGU_CD.toString() === d.properties["SIGUNGU_CD"])?.value || 0,
                        drilldown: d.properties["SIGUNGU_CD"],
                        name: d.properties["SIGUNGU_NM"]
                    }));

                chart.addSeriesAsDrilldown(e.point, {
                    type: 'map',
                    name: e.point.name,
                    data,
                    dataLabels: { enabled: true, format: '{point.properties.SIGUNGU_NM}' },
                });
            } else if (selectedRegion?.gubun === "SIGUNGU_CD"){
                data = sigunguGeoJson
                    .filter(d => d.properties.SIGUNGU_CD.startsWith(mapKey))
                    .map(d => ({
                        ...d,
                        value: sigunguData.find(sigungu => sigungu.SIGUNGU_CD.toString() === d.properties["SIGUNGU_CD"])?.value || 0,
                        name: d.properties["SIGUNGU_NM"]
                    }));
                chart.addSeriesAsDrilldown(e.point, {
                    type: 'map',
                    name: e.point.name,
                    data,
                    dataLabels: { enabled: true, format: '{point.properties.SIGUNGU_NM}' },
                });
            }
            setTimeout(() => { // 드릴다운된 차트가 차마 그려지기도 전에 breadcrumbs가 나타나서 클릭될 수 있다. 그런 경우에 오류가 생길 수 있어서 방지차원에서 타임아웃을 줌.
                chart.hideLoading();
            }, 500);
        }
    };

        // Instantiate the map
    const mapOptions = React.useMemo(() => {
        return createMapOptions(sidoGeoJson);
    }, [sidoGeoJson, salesData]);

    function createMapOptions(data: any[]) {
        data.forEach((d) => {
            d.drilldown = d.properties['SIDO_CD'];
            const value = sidoData.find(sido => sido.SIDO_CD.toString() === d.drilldown)?.value
            d.value = value || 0;
            d.SIDO_CD = d.properties["SIDO_CD"];
            d.name = d.properties["SIDO_NM"]; // {level.name} at drilldown.breadcrumbs.format
        });

        return {
            chart: {
                events: {
                    drilldown,
                    drillup: function (this: Highcharts.Chart, e: Highcharts.DrillupEventObject){
                        this.showLoading("데이터 로딩중...");
                        this.series.shift(); // 드릴다운 할 때마다 시리즈에 쌓이는 데이터를 드릴업 할 때 하나씩 삭제해줌. 두단계 드릴 업 때는 drillup 함수가 2회 호출됨.
                        setTimeout(() => {
                            this.hideLoading();
                        }, 500);
                    }
                },
                height: 348,
            },
            credits: {
                enabled: false // 하단의 로고 지우는 옵션
            },
            title: {
                text: '지역별 주문량',
                align: 'left',
            },
            colorAxis: {
                min: 0,
                minColor: '#E6E7E8',
                maxColor: '#005645',
                visible: false,
            },
            mapNavigation: {
                enabled: true,
                buttonOptions: {
                    verticalAlign: 'bottom'
                }
            },
            plotOptions: {
                map: {
                    states: {
                        hover: {
                            color: '#EEDD66'
                        }
                    },
                    borderColor:  '#FFFFFF',
                    borderWidth: 1.5,
                },
                series: {
                    dataLabels: {
                        enabled: true,
                    }
                }
            },
            tooltip: {
                headerFormat: `<b>{point.properties.SIDO_NM}{point.properties.SIGUNGU_NM}</b><br/>`,
                pointFormat: `주문량: <b>{point.value}</b>`
            },
            series: [{
                data,
                name: '대한민국',
                dataLabels: {
                    enabled: true,
                    format: '{point.properties.SIDO_NM}',
                    color: '#575757',
                },
            }],
            drilldown: {
                activeDataLabelStyle: {
                    color: '#575757',
                    textDecoration: 'none',
                    // textOutline: '1px #000000',
                },
                breadcrumbs: {
                    floating: false,
                    showFullPath: true,
                    format: '{level.name}',
                    events: {
                        click: function(event: Event, options: Highcharts.BreadcrumbOptions) {
                            const code = "drilldown" in options.levelOptions ? options.levelOptions.drilldown : 0;
                            switch (options.level) {
                                case 0:
                                    selectedRegion = null;
                                    setSelectedRegionState(null);
                                    break;
                                case 1:
                                    selectedRegion = {gubun: "SIDO_CD", code: Number(code)};
                                    setSelectedRegionState({gubun: "SIDO_CD", code: Number(code)});
                                    break;
                                case 2:
                                    selectedRegion = {gubun: "SIGUNGU_CD", code: Number(code)};
                                    setSelectedRegionState({gubun: "SIGUNGU_CD", code: Number(code)});
                                    break;
                                default:
                                    break;
                            }
                        }
                    },
                    separator: {
                        text: ">",
                    },
                },
                drillUpButton: {
                    relativeTo: 'spacingBox',
                    position: {
                        x: 0,
                        y: 60
                    }
                },
            }
        }
    }

    function barOptions(title: string, data: Array<{name: string, value: number}> | undefined) {
        return {
            chart: {
                type: 'column',
                zooming: {
                    type: 'xy',
                },
                height: 168,
                width: null,
            },
            title: {
                text: title,
                align: 'left',
            },
            xAxis: {
                categories: data ? data!.map(d => d.name) : [],
                title: {
                    text: null
                },
                accessibility: {
                    description: 'Countries'
                }
            },
            series: [{
                name: title,
                data: data ? data!.map(d => d.value) : [],
                color: 'rgba(0,86,69,0.47)'
            }],
            legend: {
                enabled: false,
            },
            tooltip: {
                headerFormat: `<span style="color: {point.color}">● </span>{point.category} <br/>`,
                pointFormat: `주문량: <b>{point.y}</b>`,
            },
            credits: {
                enabled: false // 하단의 로고 지우는 옵션
            },
        }
    };

    return (
        <div
            className="dashboard-wrapper"
            key={key}
        >
            <Row className="dashboard-row" gutter={8}>
                <Col span={12}>
                    <HighchartsReact
                        key={JSON.stringify(mapOptions)}
                        highcharts={Highcharts}
                        constructorType={"mapChart"}
                        options={mapOptions}
                    />
                </Col>
                <Col span={12}>
                    <Row className="dashboard-row" gutter={8}>
                        <Col span={24}>
                            <HighchartsReact
                                key={JSON.stringify((salesByCustomerOptions))}
                                highcharts={Highcharts}
                                options={salesByCustomerOptions}
                            />
                        </Col>

                    </Row>
                    <Row className="dashboard-row" gutter={8}>
                        <Col span={24}>
                            <HighchartsReact
                                key={JSON.stringify(salesByProductOptions)}
                                highcharts={Highcharts}
                                options={salesByProductOptions}
                            />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}

export default Dashboard;
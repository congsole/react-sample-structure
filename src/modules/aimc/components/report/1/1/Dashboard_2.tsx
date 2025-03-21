import React from 'react';
import Highcharts from 'highcharts/highcharts';
import {BreadcrumbOptions, DrilldownEventObject, DrillupEventObject} from "highcharts";

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
import { Row, Col } from "antd";

import sidoMapData from "assets/data/map/BND_SIDO_PG_Topo.json"
import sigunguMapData from "assets/data/map/BND_SIGUNGU_PG_Topo.json"

import { getSalesByRegion } from "modules/aimc/services/report/actions";

const Dashboard_2: React.FC<PortletContent> = ({key}) => {
    const startDt = useFilterStore((state) => state.getSelectedOptions("startDt"))![0] || "";
    const endDt = useFilterStore((state) => state.getSelectedOptions("endDt"))![0] || "";
    const CUST = useFilterStore((state) => state.getSelectedOptions("CUST")) || [];
    const PRDL = useFilterStore((state) => state.getSelectedOptions("PRDL")) || [];
    const { sidoData, sigunguData } = getSalesByRegion(startDt, endDt, CUST, PRDL);
    const [mapOptions, setMapOptions] = React.useState<object>();
    let selectedRegion: {gubun: string, code: number} | null = null;
    const [salesByCustomerOptions, setSalesByCustomerOptions] = React.useState<object>();
    const [salesByProductOptions, setSalesByProductOptions] = React.useState<object>();
    React.useEffect(() => {
        if(!selectedRegion) {
        } else {
            if(selectedRegion.gubun === "SIDO_CD") {
                const sido = sidoData.find(sido => sido.SIDO_CD === selectedRegion!.code)!;
                setSalesByCustomerOptions(barOptions("title test", sido.salesByCustomer));
                setSalesByProductOptions(barOptions("title test", sido.salesByProduct));
            }
        }
    }, [selectedRegion]);

    const drilldown = async (e: DrilldownEventObject) => {
        if (!e.seriesOptions) {
            if(selectedRegion?.gubun === "SIGUNGU_CD") return;
            const chart: Highcharts.Chart = e.point.series.chart;
            const mapKey = e.point.options.drilldown!;

            // Load the drilldown map
            const topology = {
                type: "Topology",
                arcs: sigunguMapData.arcs, // 기존 arcs 유지
                transform: sigunguMapData.transform, // 기존 transform 유지
                objects: {
                    BND_SIDO_PG: {
                        type: "GeometryCollection",
                        geometries: sigunguMapData.objects.BND_SIGUNGU_PG.geometries.filter(geometry => geometry.properties.SIGUNGU_CD.startsWith(mapKey)),
                    },
                },
            };

            const data = Highcharts.geojson(topology);

            // Set a non-random bogus value
            data.forEach((d, i) => {
                d.value = sigunguData.find(sigungu => sigungu.SIGUNGU_CD.toString() === d.properties["SIGUNGU_CD"])?.value || 0;
                d.drilldown = d.properties["SIGUNGU_CD"];
                d.name = d.properties["SIGUNGU_NM"];
            });

            // Hide loading and add series
            chart.hideLoading();
            // clearTimeout(fail);
            chart.addSeriesAsDrilldown(e.point, {
                type: 'map',
                name: '{point.properties.SIGUNGU_NM}',
                data,
                dataLabels: {
                    enabled: true,
                    format: '{point.properties.SIGUNGU_NM}'
                },
            });
        }
    };

    function fetchTopology() {
        const data = Highcharts.geojson(sidoMapData);

        // Set drilldown pointers
        data.forEach((d, i) => {
            d.drilldown = d.properties['SIDO_CD'];
            const value = sidoData.find(sido => sido.SIDO_CD.toString() === d.drilldown)?.value
            d.value = value || 0;
            d.SIDO_CD = d.properties["SIDO_CD"];
            d.name = d.properties["SIDO_NM"]; // {level.name} at drilldown.breadcrumbs.format
        });
        // Instantiate the map
        setMapOptions({
            chart: {
                events: {
                    drilldown,
                }
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
                    }
                },
                series: {
                    point: {
                        events: {
                            click: function (this: Highcharts.Point, event: Highcharts.PointClickEventObject) {
                                const code = Number(this.options.drilldown);
                                console.log(code);
                                selectedRegion = ({gubun: code > 100 ? "SIGUNGU_CD" : "SIDO_CD", code});
                            }
                        }
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
                    style: {
                        color: 'red',
                    }
                },
            }],

            drilldown: {
                activeDataLabelStyle: {
                    color: '#FFFFFF',
                    textDecoration: 'none',
                    textOutline: '1px #000000'
                },
                breadcrumbs: {
                    floating: true,
                    format: '{level.name}',
                    events: {
                        click: function(event: Event, options: Highcharts.BreadcrumbOptions, e: Event) {
                            const code = "drilldown" in options.levelOptions ? options.levelOptions.drilldown : 0;
                            switch (options.level) {
                                case 0:
                                    selectedRegion = null;
                                    break;
                                    case 1:
                                        selectedRegion = {gubun: "SIDO_CD", code: Number(code)};
                                        break;
                                default:
                                    break;
                            };
                        }
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
        });
    }

    React.useEffect(() => {
        fetchTopology();
    }, [])

    const barOptions = (title: string, data: Array<{name: string, value: number}> | undefined) =>{
        return {
            chart: {
                type: 'column',
                zooming: {
                    type: 'xy',
                }
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
            }],
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
                        highcharts={Highcharts}
                        constructorType={"mapChart"}
                        options={mapOptions}
                    />
                </Col>
                <Col span={12}>
                    <Row className="dashboard-row" style={{ border: "1px red solid"}} gutter={8}>
                        <Col span={12}>
                            <HighchartsReact
                                highcharts={Highcharts}
                                options={salesByCustomerOptions}
                            />
                        </Col>
                    </Row>
                    <Row className="dashboard-row" style={{ border: "1px red solid"}} gutter={8}>
                        <Col span={12}>zzzz</Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}

export default Dashboard_2;
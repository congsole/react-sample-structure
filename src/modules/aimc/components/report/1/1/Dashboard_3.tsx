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
import {DrilldownEventObject, DrillupEventObject} from "highcharts";
import sidoMapData from "assets/data/map/BND_SIDO_PG_Topo.json"
import sigunguMapData from "assets/data/map/BND_SIGUNGU_PG_Topo.json"
import useFilterStore from "../../../../store/filterStore";
import {getSalesByRegion} from "../../../../services/report/actions";
const Dashboard: React.FC<PortletContent> = ({key}) => {
    const startDt = useFilterStore((state) => state.getSelectedOptions("startDt"))![0] || "";
    const endDt = useFilterStore((state) => state.getSelectedOptions("endDt"))![0] || "";
    const CUST = useFilterStore((state) => state.getSelectedOptions("CUST")) || [];
    const PRDL = useFilterStore((state) => state.getSelectedOptions("PRDL")) || [];
    const { nationalData, sidoData, sigunguData } = getSalesByRegion(startDt, endDt, CUST, PRDL);

    const [mapChartOptions, setMapChartOptions] = React.useState<object>([]);
    const [koreaMapOptions, setKoreaMapOptions] = React.useState<object>([]);

    const drilldownUS = async function (e: DrilldownEventObject) {
        if (!e.seriesOptions) {
            const chart = e.point.series.chart,
                mapKey = `countries/us/${e.point.options.drilldown}-all`;

            const topology = await fetch(
                `https://code.highcharts.com/mapdata/${mapKey}.topo.json`
            ).then(response => response.json());

            const data = Highcharts.geojson(topology);

            // Set a non-random bogus value
            data.forEach((d, i) => {
                d.value = i;
            });

            chart.addSeriesAsDrilldown(e.point, {
                type: 'map',
                name: e.point.name,
                data,
                dataLabels: {
                    enabled: true,
                    format: '{point.name}'
                }
            });
        }
    };

    const drilldownKR = function (e: DrilldownEventObject) {
        if (!e.seriesOptions) {
            const chart = e.point.series.chart,
                mapKey = e.point.options.drilldown;

            const topology = sigunguMapData;

            const data = Highcharts.geojson(topology);

            // Set a non-random bogus value
            const filteredData = data.filter(d => d.properties["SIGUNGU_CD"].toString().startsWith(mapKey!.toString()));
            filteredData.forEach((d, i) => {
                d.drilldown = d.properties['SIGUNGU_CD'];
                d.value = i; // Non-random bogus data
            });

            chart.addSeriesAsDrilldown(e.point, {
                type: 'map',
                name: e.point.name,
                data: filteredData,
                dataLabels: {
                    enabled: true,
                    format: '{point.name}'
                }
            });
        }
    };

    const fetchData = async () => {
        const topology = await fetch(
            'https://code.highcharts.com/mapdata/countries/us/us-all.topo.json'
        ).then(response => response.json());
        const data = Highcharts.geojson(topology);

        const mapView = topology.objects!.default['hc-recommended-mapview'];

        // Set drilldown pointers
        data.forEach((d, i) => {
            d.drilldown = d.properties['hc-key'];
            d.value = i; // Non-random bogus datas
        });

        // Instantiate the map
        setMapChartOptions({
            chart: {
                events: {
                    drilldown: drilldownUS,
                }
            },

            title: {
                text: 'Highcharts Map Drilldown'
            },

            colorAxis: {
                min: 0,
                minColor: '#E6E7E8',
                maxColor: '#005645'
            },

            mapView,

            mapNavigation: {
                enabled: false,
                // buttonOptions: {
                //     verticalAlign: 'bottom'
                // }
            },

            plotOptions: {
                map: {
                    states: {
                        hover: {
                            color: '#EEDD66'
                        }
                    }
                }
            },

            series: [{
                data,
                name: 'USA',
                dataLabels: {
                    enabled: true,
                    format: '{point.properties.postal-code}'
                },
                custom: {
                    mapView
                }
            }],

            drilldown: {
                activeDataLabelStyle: {
                    color: '#FFFFFF',
                    textDecoration: 'none',
                    textOutline: '1px #000000'
                },
                breadcrumbs: {
                    floating: true
                },
                drillUpButton: {
                    relativeTo: 'spacingBox',
                    position: {
                        x: 0,
                        y: 60
                    }
                }
            }
        });
    }

    const drawKoreaMap = () => {
        const sidoTopologies = Highcharts.geojson(sidoMapData);
        const sigunguTopologies = Highcharts.geojson(sigunguMapData);

        const mapView = sidoMapData.objects!.BND_SIDO_PG['hc-recommended-mapview'];

        // Instantiate the map
        setKoreaMapOptions({
            chart: {
                events: {
                    drillup: function (this: Highcharts.Chart, e: Highcharts.DrillupEventObject){
                        e.preventDefault();
                        console.log("드릴업 발생", e.seriesOptions?.name);
                        // this.redraw();
                    },
                    drilldown: drilldownKR,
                }
                },
            title: {
                text: 'Highcharts Map Drilldown'
            },
            colorAxis: {
                min: 0,
                minColor: '#E6E7E8',
                maxColor: '#005645'
            },
            mapView,
            mapNavigation: {
                enabled: false,
                // buttonOptions: {
                //     verticalAlign: 'bottom'
                // }
            },

            plotOptions: {
                map: {
                    states: {
                        hover: {
                            color: '#EEDD66'
                        }
                    }
                }
            },

            series: [{
                mapData: sidoTopologies,
                data: sidoData.map(sido => ({
                    id: sido.SIDO_CD,
                    name: sido.SIDO_NM,
                    value: sido.value,
                    drilldown: sido.SIDO_CD,
                })),
                name: '대한민국',
                dataLabels: {
                    enabled: true,
                    format: '{point.name}'
                },
                joinBy: ["SIDO_CD", "id"],
                custom: {
                    mapView
                }
            }],

            drilldown: {
                activeDataLabelStyle: {
                    color: '#FFFFFF',
                    textDecoration: 'none',
                    textOutline: '1px #000000'
                },
                breadcrumbs: {
                    floating: false,
                    events: {
                        click: function(event: Event, options: Highcharts.BreadcrumbOptions) {
                            event.preventDefault();
                            // const code = "drilldown" in options.levelOptions ? options.levelOptions.drilldown : 0;
                            // switch (options.level) {
                            //     case 0:
                            //         selectedRegion = null;
                            //         setSelectedRegionState(null);
                            //         break;
                            //     case 1:
                            //         selectedRegion = {gubun: "SIDO_CD", code: Number(code)};
                            //         setSelectedRegionState({gubun: "SIDO_CD", code: Number(code)});
                            //         break;
                            //     case 2:
                            //         selectedRegion = {gubun: "SIGUNGU_CD", code: Number(code)};
                            //         setSelectedRegionState({gubun: "SIGUNGU_CD", code: Number(code)});
                            //         break;
                            //     default:
                            //         break;
                            // };
                            console.log("breadcrumbs:  clicked!!!!!!!");
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
                mapZooming: false,
                // series: [
                //     ...sidoData.map((sido) => {
                //         const sidoCd = sido.SIDO_CD;
                //         const sidoNm = sido.SIDO_NM;
                //
                //         return {
                //             id: sidoCd,
                //             name: sidoNm,
                //             data: sigunguData
                //                 .filter((sigungu) => sigungu.SIGUNGU_CD.toString().startsWith(sidoCd.toString()))
                //                 .map((sigungu) => ({
                //                     id: sigungu.SIGUNGU_CD,
                //                     name: sigungu.SIGUNGU_NM,
                //                     drilldown: sigungu.SIGUNGU_CD,
                //                     value: sigungu.value || 0,
                //                 })),
                //             mapData: sigunguTopologies.filter((sigungu) =>
                //                 sigungu.properties["SIGUNGU_CD"].toString().startsWith(sidoCd.toString())
                //             ),
                //             joinBy: ['SIGUNGU_CD', 'id'],
                //         };
                //     }),
                    // ...sigunguData.map((sigungu) => {
                    //     const sigunguCd = sigungu.SIGUNGU_CD;
                    //     const sigunguNm = sigungu.SIGUNGU_NM;
                    //
                    //     return {
                    //         // id: `${sigunguCd}`,
                    //         type: 'map',
                    //         name: sigunguNm,
                    //         data: sigunguTopologies.filter(sggt => sggt.properties.SIGUNGU_CD === sigunguCd)!
                    //             .map(sgg => {
                    //                 return {
                    //                     ...sgg,
                    //                     name: sgg.SIGUNGU_NM,
                    //                     value: sgg.value,
                    //                 }
                    //             }),
                    //         // mapData: sigunguTopologies.find(sggt => sggt.properties.SIGUNGU_CD === sigunguCd),
                    //         // joinBy: ['SIGUNGU_CD', 'id'],
                    //     };
                    // }),
                // ],
            }
        });
    }

    React.useEffect(() => {
        fetchData();
        drawKoreaMap();
    }, []);

    return (
        <div
            className="dashboard-wrapper"
            key={key}
        >
            <HighchartsReact
                highcharts={Highcharts}
                constructorType={'mapChart'}
                options={mapChartOptions}
            />
            <HighchartsReact
                highcharts={Highcharts}
                constructorType={'mapChart'}
                options={koreaMapOptions}
            />

        </div>
    );
}

export default Dashboard;
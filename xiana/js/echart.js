$(function () {
    // 线网规模
    charts_2();

    //基本信息
    char4();
    //湾区线网总量对比
    echarts_1();

    //echart_1
    //线网总对比
    function echarts_1() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echarts_1'));

        var option;

        option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    // Use axis to trigger tooltip
                    type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
                }
            },
            legend: {
                top: 30,
                left: 10,
                textStyle: {
                    color: '#c3dbff',
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'value',
                axisLabel: {
                    color: '#c3dbff',
                }
            },
            yAxis: {
                type: 'category',
                data: ['东京湾区', '纽约湾区', '旧金山湾区', '粤港澳湾区'],
                axisLabel: {
                    color: '#c3dbff',
                }
            },
            series: [
                {
                    name: '规模/km',
                    type: 'bar',
                    stack: 'total',
                    // color: '#73c0de',
                    label: {
                        show: true
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    color: 'rgb(30,233,183)',
                    data: [3894, 8937, 1702, 3193]
                },
                {
                    name: '密度/(m/m²)',
                    type: 'bar',
                    stack: 'total',
                    // color: '#fac858',
                    color: 'rgb(30,233,183)',
                    label: {
                        show: true
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: [26390, 39800, 7790, 3860]
                },
                {
                    name: '人均里程/(m/万人)',
                    type: 'bar',
                    stack: 'total',
                    // color: '#ee6666',
                    color: 'rgb(0,207,255)',
                    label: {
                        show: true
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: [970, 3610, 1820, 310]
                }
            ]
        };


        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    //线网规模
    function charts_2() {
        // 基于准备好的dom，初始化echarts实例
        var chartDom = document.getElementById('echarts_2');
        var myChart = echarts.init(chartDom);
        var option;
        option = {
            angleAxis: {
                type: 'category',
                data: ['粤港澳大湾区', '东京湾区', '纽约湾区', '旧金山湾区'],
                axisLabel: {
                    color: '#c3dbff',
                },

            },

            tooltip: {
                trigger: 'item'
            },
            radiusAxis: {
                type: 'value',
                axisLabel: {
                    color: '#c3dbff',
                }
            },
            polar: {},
            series: [
                {
                    type: 'bar',
                    color: 'rgb(0,255,255)',
                    data: [1019, 228, 0, 0],
                    coordinateSystem: 'polar',
                    name: '高速铁路',
                    stack: 'a',
                    emphasis: {
                        focus: 'series'
                    }
                },
                {
                    type: 'bar',
                    color: 'rgb(0,207,255)',
                    data: [792, 0, 0, 0],
                    coordinateSystem: 'polar',
                    name: '普速铁路',
                    stack: 'a',
                    emphasis: {
                        focus: 'series'
                    }
                },
                {
                    type: 'bar',
                    color: 'rgb(0,118,255)',
                    data: [368, 1550, 3248, 511],
                    coordinateSystem: 'polar',
                    name: '城际铁路',
                    stack: 'a',
                    emphasis: {
                        focus: 'series'
                    }
                },
                {
                    type: 'bar',
                    color: 'rgb(255,233,58)',
                    data: [36, 1758, 5309, 883],
                    coordinateSystem: 'polar',
                    name: '市域铁路',
                    stack: 'a',
                    emphasis: {
                        focus: 'series'
                    }
                },
                {
                    type: 'bar',
                    color: 'rgb(30,233,183)',
                    data: [978, 358, 380, 308],
                    coordinateSystem: 'polar',
                    name: '地铁',
                    stack: 'a',
                    emphasis: {
                        focus: 'series'
                    }
                }
            ],
            legend: {
                show: true,
                top: 50,
                left: 10,
                data: ['高速铁路', '普速铁路', '城际铁路', '市域铁路', '地铁'],
                textStyle: {
                    color: '#c3dbff',
                },
                orient: 'vertical'
            },
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
    //基本信息
    function char4() {
        var chartDom = document.getElementById('char4');
        var myChart = echarts.init(chartDom);
        var option;
        option = {
            title: {
                subtext: 'Data'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['面积/km²', '人口/万人'],
                top: 30,
                textStyle: {
                    color: '#c3dbff',
                }
            },
            toolbox: {
                show: true,
                feature: {
                    dataView: { show: true, readOnly: false },
                    magicType: { show: true, type: ['line', 'bar'] },
                    restore: { show: true },
                    saveAsImage: { show: true }
                }
            },
            calculable: true,
            xAxis: [
                {
                    type: 'category',
                    // prettier-ignore
                    data: ['东京湾区', '纽约湾区', '旧金山湾区', '粤港澳湾区'],
                    axisLabel: {
                        color: '#c3dbff',
                    },



                },

            ],

            yAxis: [
                {
                    type: 'value',
                    axisLabel: {
                        textStyle: {
                            color: '#c3dbff',

                        },
                        fontSize: 8
                    },
                }

            ],
            series: [
                {
                    name: '面积/km²',
                    type: 'bar',
                    // color: '#5470c6',
                    color: 'rgb(0,255,255)',
                    data: [
                        56500, 21500, 17900, 56500
                    ],
                    markPoint: {
                        data: [
                            { type: 'max', name: 'Max' },
                            { type: 'min', name: 'Min' }
                        ]
                    },
                    markLine: {
                        data: [{ type: 'average', name: 'Avg' }]
                    }
                },
                {
                    name: '人口/万人',
                    type: 'bar',
                    // color: '#91cc75',
                    color: 'rgb(30,233,183)',
                    data: [
                        6957, 2340, 760, 6957
                    ],
                    markPoint: {
                        data: [
                            { type: 'max', name: 'Max' },
                            { type: 'min', name: 'Min' }
                        ]
                    },
                    markLine: {
                        data: [{ type: 'average', name: 'Avg' }]
                    }
                }
            ]
        };

        myChart.setOption(option);
        window.addEventListener('resize', function () { myChart.resize(); })
    }
})
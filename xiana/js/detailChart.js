//城际铁路
var color = ['#e9df3d', '#f79c19', '#21fcd6', '#08c8ff', '#df4131'];
var data = [{
    "name": "东京湾区",
    "value": 0.43
},
{
    "name": "纽约湾区",
    "value": 1.37
},
{
    "name": "旧金山湾区",
    "value": 0.67
},
{
    "name": "粤港澳湾区",
    "value": 0.05
},
];

var max = data[0].value;
data.forEach(function (d) {
    max = d.value > max ? d.value : max;
});

var renderData = [{
    value: [],
    name: "城际铁路人均里程",
    symbol: 'none',
    lineStyle: {
        normal: {
            color: '#ecc03e',
            width: 2
        }
    },
    areaStyle: {
        normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0,
                [{
                    offset: 0,
                    color: 'rgba(203, 158, 24, 0.8)'
                }, {
                    offset: 1,
                    color: 'rgba(190, 96, 20, 0.8)'
                }],
                false)
        }
    }
}];


data.forEach(function (d, i) {
    var value = ['', '', '', ''];
    value[i] = max,
        renderData[0].value[i] = d.value;
    renderData.push({
        value: value,
        symbol: 'circle',
        symbolSize: 12,
        lineStyle: {
            normal: {
                color: 'transparent'
            }
        },
        itemStyle: {
            normal: {
                color: color[i],
            }
        }
    })
})
var indicator = [];

data.forEach(function (d) {
    indicator.push({
        name: d.name,
        max: max,
        color: '#fff'
    })
})


option3 = {
    title: {
        text: '城际铁路人均里程\n单位:km/万人',
        left: 10,
        top: 20,
        textStyle: {
            color: "white",//#c3dbff 
            fontWeight: "bold",
            fontSize: 18
        }
    },
    tooltip: {
        show: true,
        trigger: "item"
    },
    radar: {
        center: ["50%", "50%"],//偏移位置
        radius: "80%",
        startAngle: 40, // 起始角度
        splitNumber: 4,
        shape: "circle",
        splitArea: {
            areaStyle: {
                color: 'transparent'
            }
        },
        axisLabel: {
            show: false,
            fontSize: 20,
            color: "#000",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "rgba(255, 255, 255, 0.5)"
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: "rgba(255, 255, 255, 0.5)"
            }
        },
        indicator: indicator
    },
    series: [{
        type: "radar",
        data: renderData
    }]
}
//////////////////////城际铁路 end
//普速铁路
var color = ['#e9df3d', '#f79c19', '#21fcd6', '#08c8ff', '#df4131'];
var data = [{
    "name": "东京湾区",
    "value": 0
},
{
    "name": "纽约湾区",
    "value": 0
},
{
    "name": "旧金山湾区",
    "value": 0
},
{
    "name": "粤港澳湾区",
    "value": 0.11
},
];
var max = data[0].value;
data.forEach(function (d) {
    max = d.value > max ? d.value : max;
});

var renderData = [{
    value: [],
    name: "普速铁路人均里程",
    symbol: 'none',
    lineStyle: {
        normal: {
            color: '#ecc03e',
            width: 2
        }
    },
    areaStyle: {
        normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0,
                [{
                    offset: 0,
                    color: 'rgba(203, 158, 24, 0.8)'
                }, {
                    offset: 1,
                    color: 'rgba(190, 96, 20, 0.8)'
                }],
                false)
        }
    }
}];


data.forEach(function (d, i) {
    var value = ['', '', '', ''];
    value[i] = max,
        renderData[0].value[i] = d.value;
    renderData.push({
        value: value,
        symbol: 'circle',
        symbolSize: 12,
        lineStyle: {
            normal: {
                color: 'transparent'
            }
        },
        itemStyle: {
            normal: {
                color: color[i],
            }
        }
    })
})
var indicator = [];

data.forEach(function (d) {
    indicator.push({
        name: d.name,
        max: max,
        color: '#fff'
    })
})


option31 = {
    title: {
        text: '普速铁路人均里程\n单位:km/万人',
        left: 10,
        top: 20,
        textStyle: {
            color: "white",//#c3dbff 
            fontWeight: "bold",
            fontSize: 18
        }
    },
    tooltip: {
        show: true,
        trigger: "item"
    },
    radar: {
        center: ["50%", "50%"],//偏移位置
        radius: "80%",
        startAngle: 40, // 起始角度
        splitNumber: 4,
        shape: "circle",
        splitArea: {
            areaStyle: {
                color: 'transparent'
            }
        },
        axisLabel: {
            show: false,
            fontSize: 20,
            color: "#000",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "rgba(255, 255, 255, 0.5)"
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: "rgba(255, 255, 255, 0.5)"
            }
        },
        indicator: indicator
    },
    series: [{
        type: "radar",
        data: renderData
    }]
}
//////////////////////普速铁路 end
//高速铁路
var color = ['#e9df3d', '#f79c19', '#21fcd6', '#08c8ff', '#df4131'];
var data = [{
    "name": "东京湾区",
    "value": 0.06
},
{
    "name": "纽约湾区",
    "value": 0
},
{
    "name": "旧金山湾区",
    "value": 0
},
{
    "name": "粤港澳湾区",
    "value": 0.15
},
];

var max = data[0].value;
data.forEach(function (d) {
    max = d.value > max ? d.value : max;
});

var renderData = [{
    value: [],
    name: "高速铁路人均里程",
    symbol: 'none',
    lineStyle: {
        normal: {
            color: '#ecc03e',
            width: 2
        }
    },
    areaStyle: {
        normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0,
                [{
                    offset: 0,
                    color: 'rgba(203, 158, 24, 0.8)'
                }, {
                    offset: 1,
                    color: 'rgba(190, 96, 20, 0.8)'
                }],
                false)
        }
    }
}];


data.forEach(function (d, i) {
    var value = ['', '', '', ''];
    value[i] = max,
        renderData[0].value[i] = d.value;
    renderData.push({
        value: value,
        symbol: 'circle',
        symbolSize: 12,
        lineStyle: {
            normal: {
                color: 'transparent'
            }
        },
        itemStyle: {
            normal: {
                color: color[i],
            }
        }
    })
})
var indicator = [];

data.forEach(function (d) {
    indicator.push({
        name: d.name,
        max: max,
        color: '#fff'
    })
})


option32 = {
    title: {
        text: '高速铁路人均里程\n单位:km/万人',
        left: 10,
        top: 20,
        textStyle: {
            color: "white",//#c3dbff 
            fontWeight: "bold",
            fontSize: 18
        }
    },
    tooltip: {
        show: true,
        trigger: "item"
    },
    radar: {
        center: ["50%", "50%"],//偏移位置
        radius: "80%",
        startAngle: 40, // 起始角度
        splitNumber: 4,
        shape: "circle",
        splitArea: {
            areaStyle: {
                color: 'transparent'
            }
        },
        axisLabel: {
            show: false,
            fontSize: 20,
            color: "#000",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "rgba(255, 255, 255, 0.5)"
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: "rgba(255, 255, 255, 0.5)"
            }
        },
        indicator: indicator
    },
    series: [{
        type: "radar",
        data: renderData
    }]
}
///////////////高速铁路end
//市域铁路
var color = ['#e9df3d', '#f79c19', '#21fcd6', '#08c8ff', '#df4131'];
var data = [{
    "name": "东京湾区",
    "value": 0.46
},
{
    "name": "纽约湾区",
    "value": 2.24
},
{
    "name": "旧金山湾区",
    "value": 1.15
},
{
    "name": "粤港澳湾区",
    "value": 0.005
},
];

var max = data[0].value;
data.forEach(function (d) {
    max = d.value > max ? d.value : max;
});

var renderData = [{
    value: [],
    name: "市域铁路人均里程",
    symbol: 'none',
    lineStyle: {
        normal: {
            color: '#ecc03e',
            width: 2
        }
    },
    areaStyle: {
        normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0,
                [{
                    offset: 0,
                    color: 'rgba(203, 158, 24, 0.8)'
                }, {
                    offset: 1,
                    color: 'rgba(190, 96, 20, 0.8)'
                }],
                false)
        }
    }
}];


data.forEach(function (d, i) {
    var value = ['', '', '', ''];
    value[i] = max,
        renderData[0].value[i] = d.value;
    renderData.push({
        value: value,
        symbol: 'circle',
        symbolSize: 12,
        lineStyle: {
            normal: {
                color: 'transparent'
            }
        },
        itemStyle: {
            normal: {
                color: color[i],
            }
        }
    })
})
var indicator = [];

data.forEach(function (d) {
    indicator.push({
        name: d.name,
        max: max,
        color: '#fff'
    })
})


option33 = {
    title: {
        text: '市域铁路人均里程\n单位:km/万人',
        left: 10,
        top: 20,
        textStyle: {
            color: "white",//#c3dbff 
            fontWeight: "bold",
            fontSize: 18
        }
    },
    tooltip: {
        show: true,
        trigger: "item"
    },
    radar: {
        center: ["50%", "50%"],//偏移位置
        radius: "80%",
        startAngle: 40, // 起始角度
        splitNumber: 4,
        shape: "circle",
        splitArea: {
            areaStyle: {
                color: 'transparent'
            }
        },
        axisLabel: {
            show: false,
            fontSize: 20,
            color: "#000",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "rgba(255, 255, 255, 0.5)"
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: "rgba(255, 255, 255, 0.5)"
            }
        },
        indicator: indicator
    },
    series: [{
        type: "radar",
        data: renderData
    }]
}
//////////////////////市域铁路 end
//地铁
var color = ['#e9df3d', '#f79c19', '#21fcd6', '#08c8ff', '#df4131'];
var data = [{
    "name": "东京湾区",
    "value": 0.09
},
{
    "name": "纽约湾区",
    "value": 0.16
},
{
    "name": "旧金山湾区",
    "value": 0.4
},
{
    "name": "粤港澳湾区",
    "value": 0.14
},
];

var max = data[0].value;
data.forEach(function (d) {
    max = d.value > max ? d.value : max;
});

var renderData = [{
    value: [],
    name: "地铁人均里程",
    symbol: 'none',
    lineStyle: {
        normal: {
            color: '#ecc03e',
            width: 2
        }
    },
    areaStyle: {
        normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0,
                [{
                    offset: 0,
                    color: 'rgba(203, 158, 24, 0.8)'
                }, {
                    offset: 1,
                    color: 'rgba(190, 96, 20, 0.8)'
                }],
                false)
        }
    }
}];


data.forEach(function (d, i) {
    var value = ['', '', '', ''];
    value[i] = max,
        renderData[0].value[i] = d.value;
    renderData.push({
        value: value,
        symbol: 'circle',
        symbolSize: 12,
        lineStyle: {
            normal: {
                color: 'transparent'
            }
        },
        itemStyle: {
            normal: {
                color: color[i],
            }
        }
    })
})
var indicator = [];

data.forEach(function (d) {
    indicator.push({
        name: d.name,
        max: max,
        color: '#fff'
    })
})


option34 = {
    title: {
        text: '地铁人均里程\n单位:km/万人',
        left: 10,
        top: 20,
        textStyle: {
            color: "white",//#c3dbff 
            fontWeight: "bold",
            fontSize: 18
        }
    },
    tooltip: {
        show: true,
        trigger: "item"
    },
    radar: {
        center: ["50%", "50%"],//偏移位置
        radius: "80%",
        startAngle: 40, // 起始角度
        splitNumber: 4,
        shape: "circle",
        splitArea: {
            areaStyle: {
                color: 'transparent'
            }
        },
        axisLabel: {
            show: false,
            fontSize: 20,
            color: "#000",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "rgba(255, 255, 255, 0.5)"
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: "rgba(255, 255, 255, 0.5)"
            }
        },
        indicator: indicator
    },
    series: [{
        type: "radar",
        data: renderData
    }]
}
//////////////////////城际铁路 end
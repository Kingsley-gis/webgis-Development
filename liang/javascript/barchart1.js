// data
var citydata = [
  [0.47,0.51,0.53,0.57,0.62,0.62,0.66,0.68],
  [9.6,8.8,7.4,7,6.8,6.7,6.6,5.5],
  [13.5,12.8,11,9.2,8.9,7.4,6.6,5.5],
  [8.7,7.7,7.2,7,6.8,6.7,6.6,5.5],
  [0,0,0,0,0.21,0.71,0.77,0.81],
  [0.38,0.42,0.45,0.47,0.47,0.48,0.48,0.53]
];

var districtdata = [
  [0.65,0.65,0.66,0.67,0.67,0.68,0.68,0.72],
  [7,7,6.7,6.6,6.6,6.5,5.6,5.5],
  [3.5,3.2,3.2,3.1,2.3,2.3,2,1.7],
  [22.48,22.37,21.23,20.06,19.73,19.44,19.1,15.25],
  [51,55.1,55.9,58.9,67.6,69.2,74,77.2],
  [0.46,0.46,0.47,0.47,0.48,0.48,0.49,0.53]
  
  
];
var cityname = [
  ["江门市","肇庆市","佛山市","惠州市","中山市","珠海市","东莞市","深圳市"],
  ["澳门","江门市","肇庆市","佛山市","中山市","广州市","深圳市","香港"],
  ["江门市","肇庆市","惠州市","佛山市","珠海市","深圳市","广州市","澳门"],
  ["澳门","江门市","广州市","香港","中山市","佛山市","肇庆市","深圳市"],
  ["深圳市","香港","广州市","东莞市","","","",""],
  ["肇庆市","深圳市","佛山市","东莞市","广州市","惠州市","江门市","中山市"],
];
var districtname = [
  ["恩平县","怀集县","顺德区","封开县","四会区","广宁县","开平县","惠东县"],
  ["澳门","恩平县","怀集县","江海区","封开县","顺德区","蓬江区","中山市"],
  ['开平县','怀集县','封开县','顺德区','南海区','恩平县','台山区','龙门县'],
  ['澳门','江海区','越秀区','荔湾区','香港','海珠区','中山市','禅城区'],
  ['福田区','香港','罗湖区','越秀区','南山区','海珠区','荔湾区','天河区'],
  ['端州区','光明区','宝安区','罗湖区','禅城区','顺德区','东莞市','越秀区']
];

// 数组写反了，倒置一下

var citydatafix = []
for (i = 0;i < 6;i++)
{
  var thisone = [];
  for (j = 0 ; j < 8 ; j ++)
  {
    thisone.push(citydata[i][7-j])
  }
  citydatafix.push(thisone);
}

var disdatafix = []
for (i = 0;i < 6;i++)
{
  var thisone = [];
  for (j = 0 ; j < 8 ; j ++)
  {
    thisone.push(districtdata[i][7-j])
  }
  disdatafix.push(thisone);
}

var citynamefix = []
for (i = 0;i < 6;i++)
{
  var thisone = [];
  for (j = 0 ; j < 8 ; j ++)
  {
    thisone.push(cityname[i][7-j])
  }
  citynamefix.push(thisone);
}

var districtnamefix = []
for (i = 0;i < 6;i++)
{
  var thisone = [];
  for (j = 0 ; j < 8 ; j ++)
  {
    thisone.push(districtname[i][7-j])
  }
  districtnamefix.push(thisone);
}

var title1 = "幸福通勤指数";
var title2 = "通勤距离";
var title3 = "空间分离度";
var title4 = "通勤范围";
var title5 = "轨道服务比率";
var title6 = "公共交通服务";

var subtitle1 = "5公里通勤占比(单位:%)";
var subtitle2 = "通勤人口平均通勤距离(单位:km)";
var subtitle3 = "低于理论最优通勤距离比例(单位:%)";
var subtitle4 = "90%通勤人口空间范围(单位:km)";
var subtitle5 = "轨道覆盖通勤人口比重(单位:%)";
var subtitle6 = "45分钟公共交通服务占比(单位:%)";

// 初始化变量，点击按钮更改内容

var rangecity = citydata[0];
var yaxiscity = citynamefix[0];

var rangedistrict = districtdata[0];
var yaxisdistrict = districtnamefix[0];

// 配置上侧柱状图

var optionbar1 = {
    title: {
      text: "市级"+title1,
      subtext:subtitle1,
      padding:[20,0,10,10],
      textStyle:{
        //文字颜色
        fontweight: 100,
        // color:'#FFFFFF99',
        color:'white',
        //字体风格,'normal','italic','oblique'
        fontStyle:'normal',
        //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
        fontWeight:'bold',
        //字体系列
        fontFamily:'sans-serif',
        //字体大小
　　　　 fontSize:12,
    }
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "value",
      show: false,
    },
    yAxis: {
      type: "category",
      show: false,
      data: yaxiscity
    },
    series: [
      {
        barWidth: "80%",
        name: "幸福通勤指数",
        type: "bar",
        //data: [325.78, 238.64, 167.28, 163.37, 149.36,103.99, 62.5, 44.63, 24.29, 15.3, 12.4],
        data: rangecity
      },
    ],
    visualMap: [
      {
        show: false,
        type: "continuous",
        min: Math.min.apply(null, rangecity),
        max: Math.max.apply(null, rangecity),
        dimension: 0,
        inRange: {
          color: [
            "#F7FCF0",
            "#E0F3DB",
            "#A8DDB5",
            "#7BCCC4",
            "#4EB3D3",
            "#2B8CBE",
            "#0868AC",
            "#084081",
            "#1A3A71",
          ], // 映射颜色区间
        },
      },
    ],
  };
  // 配置下方柱状图
var optionbar2 = {
    title: {
      text: "区级"+title1,
      subtext:subtitle1,
      padding:[20,0,10,10],
      textStyle:{
        //文字颜色
        fontweight: 100,
        color:'#FFFFFF99',
        //字体风格,'normal','italic','oblique'
        fontStyle:'normal',
        //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
        fontWeight:'bold',
        //字体系列
        fontFamily:'sans-serif',
        //字体大小
　　　　 fontSize:12,
    }
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "value",
      show: false,
    },
    yAxis: {
      type: "category",
      show: false,
      data: yaxisdistrict
    },
    series: [
      {
        barWidth: "80%",
        name: "幸福通勤指数",
        type: "bar",
        //data: [325.78, 238.64, 167.28, 163.37, 149.36,103.99, 62.5, 44.63, 24.29, 15.3, 12.4],
        data: rangedistrict
      },
    ],
    visualMap: [
      {
        show: false,
        type: "continuous",
        min: Math.min.apply(null, rangedistrict),
        max: Math.max.apply(null, rangedistrict),
        dimension: 0,
        inRange: {
          color: [
            "#F7FCF0",
            "#E0F3DB",
            "#A8DDB5",
            "#7BCCC4",
            "#4EB3D3",
            "#2B8CBE",
            "#0868AC",
            "#084081",
            "#1A3A71",
          ], // 映射颜色区间
        },
      },
    ],
  };
var dom1 = document.getElementById("bar-chart1");
var myChart = echarts.init(dom1);
optionbar1 && myChart.setOption(optionbar1);
var dom2 = document.getElementById("bar-chart2");
var myChart2 = echarts.init(dom2);
myChart2.setOption(optionbar2);
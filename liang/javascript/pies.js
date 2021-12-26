var pie1 = document.getElementById("rankingpie");
var pie2 = document.getElementById("consistent");
var Piechart1 = echarts.init(pie1);
var Piechart2 = echarts.init(pie2);

Pieoption1 = {
  title: {
    text: "四大湾区每日通勤总数构成",
    subtext: "单位:(千次)",
    left: "center",
    textStyle: {
      //文字颜色
      color: "white",
      //字体风格,'normal','italic','oblique'
      fontStyle: "normal",
      //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
      fontWeight: "bold",
      //字体系列
      fontFamily: "sans-serif",
      //字体大小
      fontSize: 14,
    },
  },
  tooltip: {
    trigger: "item",
  },
  legend: {
    orient: "vertical",
    left: "5%",
    top: "12%",
    itemGap: 20,
    padding: 5,
    width: "auto", // 图例组件的宽度
    height: "auto",
    textStyle: {
      //文字颜色
      color: "white",
      //字体风格,'normal','italic','oblique'
      fontStyle: "normal",
      //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
      //字体系列
      fontFamily: "sans-serif",
      //字体大小
      fontSize: 10,
    },
  },
  series: [
    {
      center: ["60%", "50%"],
      name: "Access From",
      type: "pie",
      radius: "50%",
      data: [
        { value: 1048, name: "粤港澳湾区" },
        { value: 735, name: "旧金山湾区" },
        { value: 580, name: "东京湾湾区" },
        { value: 484, name: "纽约湾湾区" },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)",
        },
      },
    },
  ],
};

Pieoption2 = {
  title: {
    text: "粤港澳大湾区每日通勤总量构成",
    subtext: "单位:(%)",
    left: "center",
    textStyle: {
      //文字颜色
      color: "white",
      //字体风格,'normal','italic','oblique'
      fontStyle: "normal",
      //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
      fontWeight: "bold",
      //字体系列
      fontFamily: "sans-serif",
      //字体大小
      fontSize: 14,
    },
  },
  tooltip: {
    trigger: "item",
  },
  legend: {
    orient: "vertical",
    left: "5%",
    top: "10%",
    itemGap: 10,
    padding: 5,
    width: "auto", // 图例组件的宽度
    height: "auto",
    textStyle: {
      //文字颜色
      color: "white",
      //字体风格,'normal','italic','oblique'
      fontStyle: "normal",
      //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
      //字体系列
      fontFamily: "sans-serif",
      //字体大小
      fontSize: 10,
    },
  },
  series: [
    {
      center: ["60%", "50%"],
      name: "Access From",
      type: "pie",
      radius: "50%",
      data: [
        {
          value: (
            1048 /
            (1048 + 735 + 580 + 484 + 424 + 350 + 320 + 250 + 120)
          ).toFixed(2),
          name: "广州市",
        },
        {
          value: (
            735 /
            (1048 + 735 + 580 + 484 + 424 + 350 + 320 + 250 + 120)
          ).toFixed(2),
          name: "深圳市",
        },
        {
          value: (
            580 /
            (1048 + 735 + 580 + 484 + 424 + 350 + 320 + 250 + 120)
          ).toFixed(2),
          name: "东莞市",
        },
        {
          value: (
            484 /
            (1048 + 735 + 580 + 484 + 424 + 350 + 320 + 250 + 120)
          ).toFixed(2),
          name: "佛山市",
        },
        {
          value: (
            424 /
            (1048 + 735 + 580 + 484 + 424 + 350 + 320 + 250 + 120)
          ).toFixed(2),
          name: "珠海市",
        },
        {
          value: (
            350 /
            (1048 + 735 + 580 + 484 + 424 + 350 + 320 + 250 + 120)
          ).toFixed(2),
          name: "中山市",
        },
        {
          value: (
            320 /
            (1048 + 735 + 580 + 484 + 424 + 350 + 320 + 250 + 120)
          ).toFixed(2),
          name: "江门市",
        },
        {
          value: (
            250 /
            (1048 + 735 + 580 + 484 + 424 + 350 + 320 + 250 + 120)
          ).toFixed(2),
          name: "惠州市",
        },
        {
          value: (
            120 /
            (1048 + 735 + 580 + 484 + 424 + 350 + 320 + 250 + 120)
          ).toFixed(2),
          name: "肇庆市",
        },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 0,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.1)",
        },
      },
    },
  ],
};

Piechart1.setOption(Pieoption1);
Piechart2.setOption(Pieoption2);

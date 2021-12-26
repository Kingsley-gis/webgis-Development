var treedom = document.getElementById('treemap');
var treechart = echarts.init(treedom);
var treeoption;

treeoption = {
    tooltip:{trigger:"item"},
    breadcrumb:false
 ,
    series: [
    {
        breadcrumb: { show: false},
      type: 'treemap',
      data: [
        {
          name: '私家车',
          value: 0.22,

        },
        {
          name: '出租车',
          value: 0.07,
        },
        {
            name:"自行车",
            value:0.1,
        },
        {
            name:"步行",
            value:0.1,
        },
        {
            name:"公交车",
            value:0.11,
        },
        {
            name:"地铁",
            value:0.21,
        },
        {
            name:"高铁",
            value:0.06,
        },
        {
            name:"电动车",
            value:0.13,
        },
      ]
    }
  ]
};

treeoption && treechart.setOption(treeoption);
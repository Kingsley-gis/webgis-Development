zhexianoption = {
    tooltip:{
        trigger:"axis",
        axisPointer: {  
            type: 'line', 
    }
    },
    grid: {
        top:"10%",
        left: '0%',
        right: '0%',
        bottom: '0%',
        //是否显示网格
        show:false,
        //是否显示刻度标签
        containLabel: true,
        // borderColor: "green",

    },
    xAxis: {
      type: 'category',
    //   left:"10%",

      data: ['2000','2002','2004','2006','2008', '2010','2012', '2014', '2016','2018', '2020','2021']
    },
    yAxis: {
      type: 'value',
    //   inside:false,
    offset:-5,
    // show:false,
    axisLine:{
        
    }
    },
    series: [
      {
          animation:true,
          lineStyle:{
              normal:{
                  color:"#F4D158",
                  width:"2"
              }
          },
        data: [29784, 32918, 49169, 60389,39499,63201,91671,255948,412197,411205,384125,395510],
        type: 'line',
        color:['orange'],  //折线条的颜色
        symbol:"circle",
        symbolSize:3,
        itemStyle:{
            normal:{
                color:"white",
                borderColor:"white"
            }
        }
      }
    ]
  };

  var zhexiandom = document.getElementById("zhexiantu");
  var zhexianChart = echarts.init(zhexiandom);
  zhexianoption && zhexianChart.setOption(zhexianoption);
var indexnow = 0
var nowhover = document.getElementById("fortune");
var nowselected = document.getElementById("fortune");
a = document.getElementsByClassName("tab");

var first = document.getElementById("fortune");
var second = document.getElementById("distance");
var third = document.getElementById("match");
var forth = document.getElementById("range");
var fifth = document.getElementById("cover");
var sixth = document.getElementById("radius");

var regularcolor = ['#F7FCF0', '#E0F3DB', '#A8DDB5', '#7BCCC4', '#4EB3D3', '#2B8CBE', '#0868AC', '#084081', '#1A3A71'];
var reversecolor = ['#1A3A71', '#084081', '#0868AC', '#2B8CBE', '#4EB3D3', '#7BCCC4', '#A8DDB5', '#E0F3DB', '#F7FCF0'];

nowselected.classList.add("active");
// 六个按钮添加事件监听器
first.addEventListener("mouseover",function(){
    this.classList.add("active");
}
);
first.addEventListener("mouseleave",function(){
    if (this != nowselected){
        this.classList.remove("active");
    }
})
first.addEventListener("mousedown",function(){
    nowselected.classList.remove("active");
    nowselected = this;
    this.classList.add("active");

    indexnow = 0;

    optionbar1.visualMap[0].inRange.color = regularcolor;
    optionbar2.visualMap[0].inRange.color = regularcolor;

    citynames = cityname[0];
    cityvalues = citydatafix[0];

    districtnames = districtname[0];
    districtvalues = disdatafix[0];

    var domcityname1 = document.getElementById("cityname1");
    var domcityvalue1 = document.getElementById("cityvalue1");

    var domdisname1 = document.getElementById("districtname1");
    var domdisvalue1 = document.getElementById("districtvalue1");

    domcityname1.innerHTML = citynames[0];
    domcityvalue1.innerHTML = cityvalues[0];

    domdisname1.innerHTML = districtnames[0];
    domdisvalue1.innerHTML = districtvalues[0];



    // 


    var domcityname1 = document.getElementById("cityname2");
    var domcityvalue1 = document.getElementById("cityvalue2");

    var domdisname1 = document.getElementById("districtname2");
    var domdisvalue1 = document.getElementById("districtvalue2");

    domcityname1.innerHTML = citynames[1];
    domcityvalue1.innerHTML = cityvalues[1];

    domdisname1.innerHTML = districtnames[1];
    domdisvalue1.innerHTML = districtvalues[1];

    // 


    var domcityname1 = document.getElementById("cityname3");
    var domcityvalue1 = document.getElementById("cityvalue3");

    var domdisname1 = document.getElementById("districtname3");
    var domdisvalue1 = document.getElementById("districtvalue3");

    domcityname1.innerHTML = citynames[2];
    domcityvalue1.innerHTML = cityvalues[2];

    domdisname1.innerHTML = districtnames[2];
    domdisvalue1.innerHTML = districtvalues[2];

    // 


    var domcityname1 = document.getElementById("cityname4");
    var domcityvalue1 = document.getElementById("cityvalue4");

    var domdisname1 = document.getElementById("districtname4");
    var domdisvalue1 = document.getElementById("districtvalue4");

    domcityname1.innerHTML = citynames[3];
    domcityvalue1.innerHTML = cityvalues[3];

    domdisname1.innerHTML = districtnames[3];
    domdisvalue1.innerHTML = districtvalues[3];

    // 



    var domcityname1 = document.getElementById("cityname5");
    var domcityvalue1 = document.getElementById("cityvalue5");

    var domdisname1 = document.getElementById("districtname5");
    var domdisvalue1 = document.getElementById("districtvalue5");

    domcityname1.innerHTML = citynames[4];
    domcityvalue1.innerHTML = cityvalues[4];

    domdisname1.innerHTML = districtnames[4];
    domdisvalue1.innerHTML = districtvalues[4];

    // 

    var domcityname1 = document.getElementById("cityname6");
    var domcityvalue1 = document.getElementById("cityvalue6");

    var domdisname1 = document.getElementById("districtname6");
    var domdisvalue1 = document.getElementById("districtvalue6");

    domcityname1.innerHTML = citynames[5];
    domcityvalue1.innerHTML = cityvalues[5];

    domdisname1.innerHTML = districtnames[5];
    domdisvalue1.innerHTML = districtvalues[5];

    // 


    var domcityname1 = document.getElementById("cityname7");
    var domcityvalue1 = document.getElementById("cityvalue7");

    var domdisname1 = document.getElementById("districtname7");
    var domdisvalue1 = document.getElementById("districtvalue7");

    domcityname1.innerHTML = citynames[6];
    domcityvalue1.innerHTML = cityvalues[6];

    domdisname1.innerHTML = districtnames[6];
    domdisvalue1.innerHTML = districtvalues[6];

    // 

    var domcityname1 = document.getElementById("cityname8");
    var domcityvalue1 = document.getElementById("cityvalue8");

    var domdisname1 = document.getElementById("districtname8");
    var domdisvalue1 = document.getElementById("districtvalue8");

    domcityname1.innerHTML = citynames[7];
    domcityvalue1.innerHTML = cityvalues[7];

    domdisname1.innerHTML = districtnames[7];
    domdisvalue1.innerHTML = districtvalues[7];





    rangecity = citydata[0]
    yaxiscity = citynamefix[0]

    rangedistrict = districtdata[0]
    yaxisdistrict = districtnamefix[0]

    optionbar1.series[0].data =rangecity;
    optionbar2.series[0].data = rangedistrict;

    optionbar1.yAxis.data = yaxiscity;
    optionbar2.yAxis.data = yaxisdistrict;

    optionbar1.visualMap[0].min =Math.min.apply(null, rangecity);
    optionbar1.visualMap[0].max = Math.max.apply(null, rangecity);

    optionbar2.visualMap[0].min =Math.min.apply(null, rangedistrict);
    optionbar2.visualMap[0].max = Math.max.apply(null, rangedistrict);

    optionbar1.title.text = "市级"+title1;
    optionbar2.title.text = "区级"+title1;

    optionbar1.title.subtext = subtitle1;
    optionbar2.title.subtext = subtitle1;

    optionbar1.series[0].name = title1;
    optionbar2.series[0].name = title1;

    myChart.setOption(optionbar1);
    myChart2.setOption(optionbar2);



    map.setPaintProperty("category", "fill-color", fill1);
})

second.addEventListener("mouseover",function(){
    this.classList.add("active");
}
);
second.addEventListener("mouseleave",function(){
    if (this != nowselected){
        this.classList.remove("active");
    }
})
second.addEventListener("mousedown",function(){
    nowselected.classList.remove("active");
    nowselected = this;
    this.classList.add("active");
    indexnow = 1;
    optionbar1.visualMap[0].inRange.color=reversecolor;
    optionbar2.visualMap[0].inRange.color = reversecolor;

    citynames = cityname[1];
    cityvalues = citydatafix[1];

    districtnames = districtname[1];
    districtvalues = disdatafix[1];

    

    //


    var domcityname1 = document.getElementById("cityname1");
    var domcityvalue1 = document.getElementById("cityvalue1");

    var domdisname1 = document.getElementById("districtname1");
    var domdisvalue1 = document.getElementById("districtvalue1");

    domcityname1.innerHTML = citynames[0];
    domcityvalue1.innerHTML = cityvalues[0];

    domdisname1.innerHTML = districtnames[0];
    domdisvalue1.innerHTML = districtvalues[0];



    // 


    var domcityname1 = document.getElementById("cityname2");
    var domcityvalue1 = document.getElementById("cityvalue2");

    var domdisname1 = document.getElementById("districtname2");
    var domdisvalue1 = document.getElementById("districtvalue2");

    domcityname1.innerHTML = citynames[1];
    domcityvalue1.innerHTML = cityvalues[1];

    domdisname1.innerHTML = districtnames[1];
    domdisvalue1.innerHTML = districtvalues[1];

    // 


    var domcityname1 = document.getElementById("cityname3");
    var domcityvalue1 = document.getElementById("cityvalue3");

    var domdisname1 = document.getElementById("districtname3");
    var domdisvalue1 = document.getElementById("districtvalue3");

    domcityname1.innerHTML = citynames[2];
    domcityvalue1.innerHTML = cityvalues[2];

    domdisname1.innerHTML = districtnames[2];
    domdisvalue1.innerHTML = districtvalues[2];

    // 


    var domcityname1 = document.getElementById("cityname4");
    var domcityvalue1 = document.getElementById("cityvalue4");

    var domdisname1 = document.getElementById("districtname4");
    var domdisvalue1 = document.getElementById("districtvalue4");

    domcityname1.innerHTML = citynames[3];
    domcityvalue1.innerHTML = cityvalues[3];

    domdisname1.innerHTML = districtnames[3];
    domdisvalue1.innerHTML = districtvalues[3];

    // 



    var domcityname1 = document.getElementById("cityname5");
    var domcityvalue1 = document.getElementById("cityvalue5");

    var domdisname1 = document.getElementById("districtname5");
    var domdisvalue1 = document.getElementById("districtvalue5");

    domcityname1.innerHTML = citynames[4];
    domcityvalue1.innerHTML = cityvalues[4];

    domdisname1.innerHTML = districtnames[4];
    domdisvalue1.innerHTML = districtvalues[4];

    // 

    var domcityname1 = document.getElementById("cityname6");
    var domcityvalue1 = document.getElementById("cityvalue6");

    var domdisname1 = document.getElementById("districtname6");
    var domdisvalue1 = document.getElementById("districtvalue6");

    domcityname1.innerHTML = citynames[5];
    domcityvalue1.innerHTML = cityvalues[5];

    domdisname1.innerHTML = districtnames[5];
    domdisvalue1.innerHTML = districtvalues[5];

    // 


    var domcityname1 = document.getElementById("cityname7");
    var domcityvalue1 = document.getElementById("cityvalue7");

    var domdisname1 = document.getElementById("districtname7");
    var domdisvalue1 = document.getElementById("districtvalue7");

    domcityname1.innerHTML = citynames[6];
    domcityvalue1.innerHTML = cityvalues[6];

    domdisname1.innerHTML = districtnames[6];
    domdisvalue1.innerHTML = districtvalues[6];

    // 

    var domcityname1 = document.getElementById("cityname8");
    var domcityvalue1 = document.getElementById("cityvalue8");

    var domdisname1 = document.getElementById("districtname8");
    var domdisvalue1 = document.getElementById("districtvalue8");

    domcityname1.innerHTML = citynames[7];
    domcityvalue1.innerHTML = cityvalues[7];

    domdisname1.innerHTML = districtnames[7];
    domdisvalue1.innerHTML = districtvalues[7];



    rangecity = citydata[1]
    yaxiscity = citynamefix[1]

    rangedistrict = districtdata[1]
    yaxisdistrict = districtnamefix[1]

    optionbar1.series[0].data =rangecity;
    optionbar2.series[0].data = rangedistrict;

    optionbar1.yAxis.data = yaxiscity;
    optionbar2.yAxis.data = yaxisdistrict;

    optionbar1.visualMap[0].min =Math.min.apply(null, rangecity);
    optionbar1.visualMap[0].max = Math.max.apply(null, rangecity);

    optionbar2.visualMap[0].min =Math.min.apply(null, rangedistrict);
    optionbar2.visualMap[0].max = Math.max.apply(null, rangedistrict);

    optionbar1.series[0].name = title2;
    optionbar2.series[0].name = title2;


    optionbar1.title.text = "市级"+title2;
    optionbar2.title.text = "区级"+title2;

    optionbar1.title.subtext = subtitle2;
    optionbar2.title.subtext = subtitle2;

    optionbar1.title.textStyle.fontSize = 12;
    optionbar2.title.textStyle.fontSize = 12;


    myChart.setOption(optionbar1);
    myChart2.setOption(optionbar2);
    map.setPaintProperty("category", "fill-color", fill2);
})

third.addEventListener("mouseover",function(){
    this.classList.add("active");
}
);
third.addEventListener("mouseleave",function(){
    if (this != nowselected){
        this.classList.remove("active");
    }
})
third.addEventListener("mousedown",function(){
    nowselected.classList.remove("active");
    nowselected = this;
    this.classList.add("active");

    indexnow = 2;

    optionbar1.visualMap[0].inRange.color = reversecolor;
    optionbar2.visualMap[0].inRange.color = reversecolor;

    citynames = cityname[2];
    cityvalues = citydatafix[2];

    districtnames = districtname[2];
    districtvalues = disdatafix[2];

    //


    var domcityname1 = document.getElementById("cityname1");
    var domcityvalue1 = document.getElementById("cityvalue1");

    var domdisname1 = document.getElementById("districtname1");
    var domdisvalue1 = document.getElementById("districtvalue1");

    domcityname1.innerHTML = citynames[2];
    domcityvalue1.innerHTML = cityvalues[2];

    domdisname1.innerHTML = districtnames[2];
    domdisvalue1.innerHTML = districtvalues[2];



    // 


    var domcityname1 = document.getElementById("cityname2");
    var domcityvalue1 = document.getElementById("cityvalue2");

    var domdisname1 = document.getElementById("districtname2");
    var domdisvalue1 = document.getElementById("districtvalue2");

    domcityname1.innerHTML = citynames[1];
    domcityvalue1.innerHTML = cityvalues[1];

    domdisname1.innerHTML = districtnames[1];
    domdisvalue1.innerHTML = districtvalues[1];

    // 


    var domcityname1 = document.getElementById("cityname3");
    var domcityvalue1 = document.getElementById("cityvalue3");

    var domdisname1 = document.getElementById("districtname3");
    var domdisvalue1 = document.getElementById("districtvalue3");

    domcityname1.innerHTML = citynames[2];
    domcityvalue1.innerHTML = cityvalues[2];

    domdisname1.innerHTML = districtnames[2];
    domdisvalue1.innerHTML = districtvalues[2];

    // 


    var domcityname1 = document.getElementById("cityname4");
    var domcityvalue1 = document.getElementById("cityvalue4");

    var domdisname1 = document.getElementById("districtname4");
    var domdisvalue1 = document.getElementById("districtvalue4");

    domcityname1.innerHTML = citynames[3];
    domcityvalue1.innerHTML = cityvalues[3];

    domdisname1.innerHTML = districtnames[3];
    domdisvalue1.innerHTML = districtvalues[3];

    // 



    var domcityname1 = document.getElementById("cityname5");
    var domcityvalue1 = document.getElementById("cityvalue5");

    var domdisname1 = document.getElementById("districtname5");
    var domdisvalue1 = document.getElementById("districtvalue5");

    domcityname1.innerHTML = citynames[4];
    domcityvalue1.innerHTML = cityvalues[4];

    domdisname1.innerHTML = districtnames[4];
    domdisvalue1.innerHTML = districtvalues[4];

    // 

    var domcityname1 = document.getElementById("cityname6");
    var domcityvalue1 = document.getElementById("cityvalue6");

    var domdisname1 = document.getElementById("districtname6");
    var domdisvalue1 = document.getElementById("districtvalue6");

    domcityname1.innerHTML = citynames[5];
    domcityvalue1.innerHTML = cityvalues[5];

    domdisname1.innerHTML = districtnames[5];
    domdisvalue1.innerHTML = districtvalues[5];

    // 


    var domcityname1 = document.getElementById("cityname7");
    var domcityvalue1 = document.getElementById("cityvalue7");

    var domdisname1 = document.getElementById("districtname7");
    var domdisvalue1 = document.getElementById("districtvalue7");

    domcityname1.innerHTML = citynames[6];
    domcityvalue1.innerHTML = cityvalues[6];

    domdisname1.innerHTML = districtnames[6];
    domdisvalue1.innerHTML = districtvalues[6];

    // 

    var domcityname1 = document.getElementById("cityname8");
    var domcityvalue1 = document.getElementById("cityvalue8");

    var domdisname1 = document.getElementById("districtname8");
    var domdisvalue1 = document.getElementById("districtvalue8");

    domcityname1.innerHTML = citynames[7];
    domcityvalue1.innerHTML = cityvalues[7];

    domdisname1.innerHTML = districtnames[7];
    domdisvalue1.innerHTML = districtvalues[7];


    rangecity = citydata[2]
    yaxiscity = citynamefix[2]

    rangedistrict = districtdata[2]
    yaxisdistrict = districtnamefix[2]

    optionbar1.series[0].data =rangecity;
    optionbar2.series[0].data = rangedistrict;

    optionbar1.yAxis.data = yaxiscity;
    optionbar2.yAxis.data = yaxisdistrict;

    optionbar1.visualMap[0].min =Math.min.apply(null, rangecity);
    optionbar1.visualMap[0].max = Math.max.apply(null, rangecity);

    optionbar2.visualMap[0].min =Math.min.apply(null, rangedistrict);
    optionbar2.visualMap[0].max = Math.max.apply(null, rangedistrict);

    optionbar1.series[0].name = title3;
    optionbar2.series[0].name = title3;

    optionbar1.title.text = "市级"+title3;
    optionbar2.title.text = "区级"+title3;

    optionbar1.title.subtext = subtitle3;
    optionbar2.title.subtext = subtitle3;



    myChart.setOption(optionbar1);
    myChart2.setOption(optionbar2);
    map.setPaintProperty("category", "fill-color", fill3);
})

forth.addEventListener("mouseover",function(){
    this.classList.add("active");
}
);
forth.addEventListener("mouseleave",function(){
    if (this != nowselected){
        this.classList.remove("active");
    }
})
forth.addEventListener("mousedown",function(){
    nowselected.classList.remove("active");
    nowselected = this;
    this.classList.add("active");

    indexnow = 3;

    optionbar1.visualMap[0].inRange.color = reversecolor;
    optionbar2.visualMap[0].inRange.color = reversecolor;


    citynames = cityname[1];
    cityvalues = citydatafix[1];

    districtnames = districtname[1];
    districtvalues = disdatafix[1];

    //


    var domcityname1 = document.getElementById("cityname1");
    var domcityvalue1 = document.getElementById("cityvalue1");

    var domdisname1 = document.getElementById("districtname1");
    var domdisvalue1 = document.getElementById("districtvalue1");

    domcityname1.innerHTML = citynames[3];
    domcityvalue1.innerHTML = cityvalues[3];

    domdisname1.innerHTML = districtnames[3];
    domdisvalue1.innerHTML = districtvalues[3];



    // 


    var domcityname1 = document.getElementById("cityname2");
    var domcityvalue1 = document.getElementById("cityvalue2");

    var domdisname1 = document.getElementById("districtname2");
    var domdisvalue1 = document.getElementById("districtvalue2");

    domcityname1.innerHTML = citynames[1];
    domcityvalue1.innerHTML = cityvalues[1];

    domdisname1.innerHTML = districtnames[1];
    domdisvalue1.innerHTML = districtvalues[1];

    // 


    var domcityname1 = document.getElementById("cityname3");
    var domcityvalue1 = document.getElementById("cityvalue3");

    var domdisname1 = document.getElementById("districtname3");
    var domdisvalue1 = document.getElementById("districtvalue3");

    domcityname1.innerHTML = citynames[2];
    domcityvalue1.innerHTML = cityvalues[2];

    domdisname1.innerHTML = districtnames[2];
    domdisvalue1.innerHTML = districtvalues[2];

    // 


    var domcityname1 = document.getElementById("cityname4");
    var domcityvalue1 = document.getElementById("cityvalue4");

    var domdisname1 = document.getElementById("districtname4");
    var domdisvalue1 = document.getElementById("districtvalue4");

    domcityname1.innerHTML = citynames[3];
    domcityvalue1.innerHTML = cityvalues[3];

    domdisname1.innerHTML = districtnames[3];
    domdisvalue1.innerHTML = districtvalues[3];

    // 



    var domcityname1 = document.getElementById("cityname5");
    var domcityvalue1 = document.getElementById("cityvalue5");

    var domdisname1 = document.getElementById("districtname5");
    var domdisvalue1 = document.getElementById("districtvalue5");

    domcityname1.innerHTML = citynames[4];
    domcityvalue1.innerHTML = cityvalues[4];

    domdisname1.innerHTML = districtnames[4];
    domdisvalue1.innerHTML = districtvalues[4];

    // 

    var domcityname1 = document.getElementById("cityname6");
    var domcityvalue1 = document.getElementById("cityvalue6");

    var domdisname1 = document.getElementById("districtname6");
    var domdisvalue1 = document.getElementById("districtvalue6");

    domcityname1.innerHTML = citynames[5];
    domcityvalue1.innerHTML = cityvalues[5];

    domdisname1.innerHTML = districtnames[5];
    domdisvalue1.innerHTML = districtvalues[5];

    // 


    var domcityname1 = document.getElementById("cityname7");
    var domcityvalue1 = document.getElementById("cityvalue7");

    var domdisname1 = document.getElementById("districtname7");
    var domdisvalue1 = document.getElementById("districtvalue7");

    domcityname1.innerHTML = citynames[6];
    domcityvalue1.innerHTML = cityvalues[6];

    domdisname1.innerHTML = districtnames[6];
    domdisvalue1.innerHTML = districtvalues[6];

    // 

    var domcityname1 = document.getElementById("cityname8");
    var domcityvalue1 = document.getElementById("cityvalue8");

    var domdisname1 = document.getElementById("districtname8");
    var domdisvalue1 = document.getElementById("districtvalue8");

    domcityname1.innerHTML = citynames[7];
    domcityvalue1.innerHTML = cityvalues[7];

    domdisname1.innerHTML = districtnames[7];
    domdisvalue1.innerHTML = districtvalues[7];

    
    
    rangecity = citydata[3]
    yaxiscity = citynamefix[3]

    rangedistrict = districtdata[3]
    yaxisdistrict = districtnamefix[3]

    optionbar1.series[0].data =rangecity;
    optionbar2.series[0].data = rangedistrict;

    optionbar1.yAxis.data = yaxiscity;
    optionbar2.yAxis.data = yaxisdistrict;


    optionbar1.visualMap[0].min =Math.min.apply(null, rangecity);
    optionbar1.visualMap[0].max = Math.max.apply(null, rangecity);

    optionbar2.visualMap[0].min =Math.min.apply(null, rangedistrict);
    optionbar2.visualMap[0].max = Math.max.apply(null, rangedistrict);


    optionbar1.series[0].name = title4;
    optionbar2.series[0].name = title4;

    optionbar1.title.text = "市级"+title4;
    optionbar2.title.text = "区级"+title4;

    optionbar1.title.subtext = subtitle4;
    optionbar2.title.subtext = subtitle4;


    myChart.setOption(optionbar1);
    myChart2.setOption(optionbar2);
    map.setPaintProperty("category", "fill-color", fill4);
})

fifth.addEventListener("mouseover",function(){
    this.classList.add("active");
}
);
fifth.addEventListener("mouseleave",function(){
    if (this != nowselected){
        this.classList.remove("active");
    }
})
fifth.addEventListener("mousedown",function(){
    nowselected.classList.remove("active");
    nowselected = this;
    this.classList.add("active");

    indexnow = 4;

    optionbar1.visualMap[0].inRange.color = regularcolor;
    optionbar2.visualMap[0].inRange.color = regularcolor;
    
    rangecity = citydata[4]
    yaxiscity = citynamefix[4]

    rangedistrict = districtdata[4]
    yaxisdistrict = districtnamefix[4]

    citynames = cityname[4];
    cityvalues = citydatafix[4];

    districtnames = districtname[4];
    districtvalues = disdatafix[4];

    //


    var domcityname1 = document.getElementById("cityname1");
    var domcityvalue1 = document.getElementById("cityvalue1");

    var domdisname1 = document.getElementById("districtname1");
    var domdisvalue1 = document.getElementById("districtvalue1");

    domcityname1.innerHTML = citynames[0];
    domcityvalue1.innerHTML = cityvalues[0];

    domdisname1.innerHTML = districtnames[0];
    domdisvalue1.innerHTML = districtvalues[0];



    // 


    var domcityname1 = document.getElementById("cityname2");
    var domcityvalue1 = document.getElementById("cityvalue2");

    var domdisname1 = document.getElementById("districtname2");
    var domdisvalue1 = document.getElementById("districtvalue2");

    domcityname1.innerHTML = citynames[1];
    domcityvalue1.innerHTML = cityvalues[1];

    domdisname1.innerHTML = districtnames[1];
    domdisvalue1.innerHTML = districtvalues[1];

    // 


    var domcityname1 = document.getElementById("cityname3");
    var domcityvalue1 = document.getElementById("cityvalue3");

    var domdisname1 = document.getElementById("districtname3");
    var domdisvalue1 = document.getElementById("districtvalue3");

    domcityname1.innerHTML = citynames[2];
    domcityvalue1.innerHTML = cityvalues[2];

    domdisname1.innerHTML = districtnames[2];
    domdisvalue1.innerHTML = districtvalues[2];

    // 


    var domcityname1 = document.getElementById("cityname4");
    var domcityvalue1 = document.getElementById("cityvalue4");

    var domdisname1 = document.getElementById("districtname4");
    var domdisvalue1 = document.getElementById("districtvalue4");

    domcityname1.innerHTML = citynames[3];
    domcityvalue1.innerHTML = cityvalues[3];

    domdisname1.innerHTML = districtnames[3];
    domdisvalue1.innerHTML = districtvalues[3];

    // 



    var domcityname1 = document.getElementById("cityname5");
    var domcityvalue1 = document.getElementById("cityvalue5");

    var domdisname1 = document.getElementById("districtname5");
    var domdisvalue1 = document.getElementById("districtvalue5");

    domcityname1.innerHTML = citynames[4];
    domcityvalue1.innerHTML = cityvalues[4];

    domdisname1.innerHTML = districtnames[4];
    domdisvalue1.innerHTML = districtvalues[4];

    // 

    var domcityname1 = document.getElementById("cityname6");
    var domcityvalue1 = document.getElementById("cityvalue6");

    var domdisname1 = document.getElementById("districtname6");
    var domdisvalue1 = document.getElementById("districtvalue6");

    domcityname1.innerHTML = citynames[5];
    domcityvalue1.innerHTML = cityvalues[5];

    domdisname1.innerHTML = districtnames[5];
    domdisvalue1.innerHTML = districtvalues[5];

    // 


    var domcityname1 = document.getElementById("cityname7");
    var domcityvalue1 = document.getElementById("cityvalue7");

    var domdisname1 = document.getElementById("districtname7");
    var domdisvalue1 = document.getElementById("districtvalue7");

    domcityname1.innerHTML = citynames[6];
    domcityvalue1.innerHTML = cityvalues[6];

    domdisname1.innerHTML = districtnames[6];
    domdisvalue1.innerHTML = districtvalues[6];

    // 

    var domcityname1 = document.getElementById("cityname8");
    var domcityvalue1 = document.getElementById("cityvalue8");

    var domdisname1 = document.getElementById("districtname8");
    var domdisvalue1 = document.getElementById("districtvalue8");

    domcityname1.innerHTML = citynames[7];
    domcityvalue1.innerHTML = cityvalues[7];

    domdisname1.innerHTML = districtnames[7];
    domdisvalue1.innerHTML = districtvalues[7];


    optionbar1.series[0].data =rangecity;
    optionbar2.series[0].data = rangedistrict;

    optionbar1.yAxis.data = yaxiscity;
    optionbar2.yAxis.data = yaxisdistrict;

    optionbar1.visualMap[0].min =Math.min.apply(null, rangecity);
    optionbar1.visualMap[0].max = Math.max.apply(null, rangecity);

    optionbar2.visualMap[0].min =Math.min.apply(null, rangedistrict);
    optionbar2.visualMap[0].max = Math.max.apply(null, rangedistrict);

    optionbar1.title.text = "市级"+title5;
    optionbar2.title.text = "区级"+title5;

    optionbar1.series[0].name = title5;
    optionbar2.series[0].name = title5;

    optionbar1.title.subtext = subtitle5;
    optionbar2.title.subtext = subtitle5;


    myChart.setOption(optionbar1);
    myChart2.setOption(optionbar2);
    map.setPaintProperty("category", "fill-color", fill5);
})

sixth.addEventListener("mouseover",function(){
    this.classList.add("active");
}
);
sixth.addEventListener("mouseleave",function(){
    if (this != nowselected){
        this.classList.remove("active");
    }
})
sixth.addEventListener("mousedown",function(){
    nowselected.classList.remove("active");
    nowselected = this;
    this.classList.add("active");

    indexnow = 5;

    optionbar1.visualMap[0].inRange.color = regularcolor;
    optionbar2.visualMap[0].inRange.color = regularcolor;

    rangecity = citydata[5]
    yaxiscity = citynamefix[5]

    rangedistrict = districtdata[5]
    yaxisdistrict = districtnamefix[5]

    citynames = cityname[5];
    cityvalues = citydatafix[5];

    districtnames = districtname[5];
    districtvalues = disdatafix[5];

    //


    var domcityname1 = document.getElementById("cityname1");
    var domcityvalue1 = document.getElementById("cityvalue1");

    var domdisname1 = document.getElementById("districtname1");
    var domdisvalue1 = document.getElementById("districtvalue1");

    domcityname1.innerHTML = citynames[0];
    domcityvalue1.innerHTML = cityvalues[0];

    domdisname1.innerHTML = districtnames[0];
    domdisvalue1.innerHTML = districtvalues[0];



    // 


    var domcityname1 = document.getElementById("cityname2");
    var domcityvalue1 = document.getElementById("cityvalue2");

    var domdisname1 = document.getElementById("districtname2");
    var domdisvalue1 = document.getElementById("districtvalue2");

    domcityname1.innerHTML = citynames[1];
    domcityvalue1.innerHTML = cityvalues[1];

    domdisname1.innerHTML = districtnames[1];
    domdisvalue1.innerHTML = districtvalues[1];

    // 


    var domcityname1 = document.getElementById("cityname3");
    var domcityvalue1 = document.getElementById("cityvalue3");

    var domdisname1 = document.getElementById("districtname3");
    var domdisvalue1 = document.getElementById("districtvalue3");

    domcityname1.innerHTML = citynames[2];
    domcityvalue1.innerHTML = cityvalues[2];

    domdisname1.innerHTML = districtnames[2];
    domdisvalue1.innerHTML = districtvalues[2];

    // 


    var domcityname1 = document.getElementById("cityname4");
    var domcityvalue1 = document.getElementById("cityvalue4");

    var domdisname1 = document.getElementById("districtname4");
    var domdisvalue1 = document.getElementById("districtvalue4");

    domcityname1.innerHTML = citynames[3];
    domcityvalue1.innerHTML = cityvalues[3];

    domdisname1.innerHTML = districtnames[3];
    domdisvalue1.innerHTML = districtvalues[3];

    // 



    var domcityname1 = document.getElementById("cityname5");
    var domcityvalue1 = document.getElementById("cityvalue5");

    var domdisname1 = document.getElementById("districtname5");
    var domdisvalue1 = document.getElementById("districtvalue5");

    domcityname1.innerHTML = citynames[4];
    domcityvalue1.innerHTML = cityvalues[4];

    domdisname1.innerHTML = districtnames[4];
    domdisvalue1.innerHTML = districtvalues[4];

    // 

    var domcityname1 = document.getElementById("cityname6");
    var domcityvalue1 = document.getElementById("cityvalue6");

    var domdisname1 = document.getElementById("districtname6");
    var domdisvalue1 = document.getElementById("districtvalue6");

    domcityname1.innerHTML = citynames[5];
    domcityvalue1.innerHTML = cityvalues[5];

    domdisname1.innerHTML = districtnames[5];
    domdisvalue1.innerHTML = districtvalues[5];

    // 


    var domcityname1 = document.getElementById("cityname7");
    var domcityvalue1 = document.getElementById("cityvalue7");

    var domdisname1 = document.getElementById("districtname7");
    var domdisvalue1 = document.getElementById("districtvalue7");

    domcityname1.innerHTML = citynames[6];
    domcityvalue1.innerHTML = cityvalues[6];

    domdisname1.innerHTML = districtnames[6];
    domdisvalue1.innerHTML = districtvalues[6];

    // 

    var domcityname1 = document.getElementById("cityname8");
    var domcityvalue1 = document.getElementById("cityvalue8");

    var domdisname1 = document.getElementById("districtname8");
    var domdisvalue1 = document.getElementById("districtvalue8");

    domcityname1.innerHTML = citynames[7];
    domcityvalue1.innerHTML = cityvalues[7];

    domdisname1.innerHTML = districtnames[7];
    domdisvalue1.innerHTML = districtvalues[7];

    
    rangecity = citydata[5]
    yaxiscity = citynamefix[5]

    rangedistrict = districtdata[5]
    yaxisdistrict = districtnamefix[5]

    optionbar1.series[0].data =rangecity;
    optionbar2.series[0].data = rangedistrict;

    optionbar1.yAxis.data = yaxiscity;
    optionbar2.yAxis.data = yaxisdistrict;

    optionbar1.visualMap[0].min =Math.min.apply(null, rangecity);
    optionbar1.visualMap[0].max = Math.max.apply(null, rangecity);

    optionbar2.visualMap[0].min =Math.min.apply(null, rangedistrict);
    optionbar2.visualMap[0].max = Math.max.apply(null, rangedistrict);

    optionbar1.series[0].name = title6;
    optionbar2.series[0].name = title6;

    optionbar1.title.text = "市级"+title6;
    optionbar2.title.text = "区级"+title6;

    optionbar1.title.subtext = subtitle6;
    optionbar2.title.subtext = subtitle6;


    
    myChart.setOption(optionbar1);
    myChart2.setOption(optionbar2);
    map.setPaintProperty("category", "fill-color", fill6);
})




var changedom = document.getElementById("firstod");
var changedom2 = document.getElementById("secondod");
var changedom3 = document.getElementById("thirdod");
var changedom4 = document.getElementById("forthod");
var changedom5 = document.getElementById("fifthod");
var changedom6 = document.getElementById("sixthod");
var changedom7 = document.getElementById("seventhod");
var changedom8 = document.getElementById("eightthod");
// 记录按钮状态 执行/关闭
  var flag = true ;
  var flag2 = false ;
  var flag3 = false ;
  var flag4 = false ;
  var flag5 = false ;
  var flag6 = false ;
  var flag7 = false ;
  var flag8 = false ;

// 添加OD按钮添加事件监听器
  
  changedom.addEventListener("click",function(){
    if(flag){
      ODline1.removeLayer("FirstODLay");
      ODline2.removeLayer("SecondODLay2");
      flag=false;
      
    }
    else if (!flag){
      ODline1.addLayer({
        id: "FirstODLay",
        type: "line",
        source: "FirstOD",
        "paint": {
          "line-color":'red',
          "line-width":2,
          "line-opacity":0.9
          }
      })
      ODline2.addLayer({
        id: "SecondODLay2",
        type: "line",
        source: "SecondOD2",
        "paint": {
          "line-color":'blue',
          "line-width":1.8,
          "line-opacity":0.8
          }
      })
      

      flag = true;
    }
  })

  changedom2.addEventListener("click",function(){
    if(flag2){
      ODline1.removeLayer("ForthODLay");
      ODline2.removeLayer("SixthODLay2");
      flag2=false;
      
    }
    else if (!flag2){
      ODline1.addLayer({
        id: "ForthODLay",
        type: "line",
        source: "ForthOD",
        "paint": {
          "line-color":'#ABD256',
          "line-width":1.5,
          "line-opacity":0.9
          }
      })
      ODline2.addLayer({
        id: "SixthODLay2",
        type: "line",
        source: "SixthOD2",
        "paint": {
          "line-color":'#77518B',
          "line-width":1.5,
          "line-opacity":0.9
          }
      })
      flag2 = true;
    }
  })

  changedom3.addEventListener("click",function(){
    if(flag3){
      ODline1.removeLayer("ThirdODLay");
      ODline2.removeLayer("FifthODLay2");
      flag3=false;
      
    }
    else if (!flag3){
      ODline1.addLayer({
        id: "ThirdODLay",
        type: "line",
        source: "ThirdOD",
        "paint": {
          "line-color":'#7BCCC4',
          "line-width":1.5,
          "line-opacity":0.9
          }
      })
      ODline2.addLayer({
        id: "FifthODLay2",
        type: "line",
        source: "FiveOD2",
        "paint": {
          "line-color":'#E17696',
          "line-width":1.5,
          "line-opacity":0.9
          }
      })
      flag3 = true;
    }
  })

  changedom4.addEventListener("click",function(){
    if(flag4){
      ODline1.removeLayer("SecondODLay");
      ODline2.removeLayer("FirstODLay2");
      flag4=false;
      
    }
    else if (!flag4){
      ODline1.addLayer({
        id: "SecondODLay",
        type: "line",
        source: "SecondOD",
        "paint": {
          "line-color":'#EFAC28',
          "line-width":1.3,
          "line-opacity":0.9
          }
      })
      ODline2.addLayer({
        id: "FirstODLay2",
        type: "line",
        source: "FirstOD2",
        "paint": {
          "line-color":'#D09B71',
          "line-width":1.3,
          "line-opacity":0.9
          }
      })
      flag4 = true;
    }
  })

  changedom5.addEventListener("click",function(){
    if(flag5){
      ODline1.removeLayer("SixthODLay");
      ODline2.removeLayer("SeventhODLay2");
      flag5=false;
      
    }
    else if (!flag5){
      ODline1.addLayer({
        id: "SixthODLay",
        type: "line",
        source: "SixthOD",
        "paint": {
          "line-color":'#9D5525',
          "line-width":1.3,
          "line-opacity":0.9
          }
      })
      ODline2.addLayer({
        id: "SeventhODLay2",
        type: "line",
        source: "SeventhOD2",
        "paint": {
          "line-color":'#E9C9B2',
          "line-width":1.3,
          "line-opacity":0.9
          }
      })
      flag5 = true;
    }
  })

  changedom6.addEventListener("click",function(){
    if(flag6){
      ODline1.removeLayer("LastODLay");
      ODline2.removeLayer("LastODLay2");
      flag6=false;
      
    }
    else if (!flag6){
      ODline1.addLayer({
        id: "LastODLay",
        type: "line",
        source: "LastOD",
        "paint": {
          "line-color":'#FF66FF',
          "line-width":0.8,
          "line-opacity":0.5
          }
      })
      ODline2.addLayer({
        id: "LastODLay2",
        type: "line",
        source: "EightthOD2",
        "paint": {
          "line-color":'#FFFFCC',
          "line-width":0.8,
          "line-opacity":0.5
          }
      })
      flag6 = true;
    }
  })


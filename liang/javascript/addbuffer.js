var bufferdom1 = document.getElementById("buffer1");
var bufferdom2 = document.getElementById("buffer2");
var flagbuffer = false;
var flagbuffer2 = false;


// 添加事件监听器,开/关缓冲区图层


$.getJSON('./javascript/ODLinejson/First.json',function(json1){
    
    var buf = turf.buffer(json1, 5000, {units: 'meters'});
    ODline1.on('load',function(){
        ODline1.addSource("map1buffer",{
            type:"geojson",
            data :buf
        }   );
        
        bufferdom1.addEventListener("click",function(){
            if(!flagbuffer)
            {
                ODline1.removeLayer("FirstODLay");
              ODline1.addLayer({
                id: "buf1",
                type: "fill",
                source: "map1buffer",
                layout: {},
                paint: {
                  "fill-color": "pink",
                  // "line-width": 1,
                },

              });
              ODline1.addLayer({
                id: "FirstODLay",
                type: "line",
                source: "FirstOD",
                "paint": {
                  "line-color":'orangered',
                  "line-width":2,
                  "line-opacity":0.9
                  }
              });
              flagbuffer = true;
            }
            else {
              ODline1.removeLayer("buf1");
              flagbuffer = false;
            }
          })
    
}
)
})


$.getJSON('./javascript/ODLinejson/Second.json',function(json2){
    
    var buf2 = turf.buffer(json2, 5000, {units: 'meters'});
    ODline2.on('load',function(){
        ODline2.addSource("map2buffer",{
            type:"geojson",
            data :buf2
        }   );
        
        bufferdom2.addEventListener("click",function(){
            if(!flagbuffer2)
            {
                ODline2.removeLayer("SecondODLay2");
              ODline2.addLayer({
                id: "buf2",
                type: "fill",
                source: "map2buffer",
                layout: {},
                paint: {
                  "fill-color": "red",
                  // "line-width": 1,
                },

              }); 
              ODline2.addLayer({
                id: "SecondODLay2",
        type: "line",
        source: "SecondOD2",
        "paint": {
          "line-color":'blue',
          "line-width":2,
          "line-opacity":0.9
          }
              });
              flagbuffer2 = true;
            }
            else {
              ODline2.removeLayer("buf2");
              flagbuffer2 = false;
            }
          })
    
}
)
})








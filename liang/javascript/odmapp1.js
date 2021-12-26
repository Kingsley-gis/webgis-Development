
mapboxgl.accessToken =
        "pk.eyJ1Ijoia2luZ3NsZXktZ2lzIiwiYSI6ImNrd25maWpoODAwNzcydnBhYmt4YWQzamoifQ.aeqP3iKHqZAQrQdakDJYDQ";
var ODline1 =  new mapboxgl.Map({
    container: "odmap1",
    center: [113.450222, 22.902202],
    style: "mapbox://styles/mapbox/dark-v9",
    zoom: 6.5,
    pitch: 0,
    attributionControl: false,
  });

// 异步加载防止未读取数据就执行地图配置，需要使用map.on（）
    ODline1.on('load',function(){

      ODline1.addSource("baymap",{
          type:"geojson",
          data :"./javascript/baydata.json"
      }
      );
  
      
  
      ODline1.addLayer({
          id: "sourcemap",
            type: "fill",
            source: "baymap",
            layout: {},
            paint: {
              "fill-color": '#37383A',
            },
      });
  
  
  
     
      ODline1.addLayer({
          id: "sourcemapboundary",
          type: "line",
          source: "baymap",
          layout: {},
          paint: {
            "line-color": "#565656",
            "line-width": 1,
          },
        });
        
  
      ODline1.addSource("center",{
          type:"geojson",
          data:"./javascript/citycenter.json"
        });
  
        ODline1.addSource("FirstOD",{
          type:"geojson",
          data:"./javascript/ODLinejson/First.json"
        });
  
        ODline1.addSource("SecondOD",{
          type:"geojson",
          data:"./javascript/ODLinejson/Second.json"
        });
  
  
        ODline1.addSource("ThirdOD",{
          type:"geojson",
          data:"./javascript/ODLinejson/Third.json"
        });
  
        ODline1.addSource("ForthOD",{
          type:"geojson",
          data:"./javascript/ODLinejson/Forth.json"
        });
  
        ODline1.addSource("FiveOD",{
          type:"geojson",
          data:"./javascript/ODLinejson/Five.json"
        });
  
        ODline1.addSource("SixthOD",{
          type:"geojson",
          data:"./javascript/ODLinejson/Six.json"
        });
  
        ODline1.addSource("SeventhOD",{
          type:"geojson",
          data:"./javascript/ODLinejson/Seven.json"
        });
  
        ODline1.addSource("LastOD",{
          type:"geojson",
          data:"./javascript/ODLinejson/Last.json"
        });
  
        ODline1.addLayer({
            id : "citycenter",
            type:"circle",
            source:"center",
            "paint": {
              "circle-radius": 2.5,
              "circle-color": "yellow",
              }
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
        ODline1.addLayer({
          id:"interfaceOD2",
          type:"fill",
          source:"baymap",
          layout:{
      
          },
          paint:{
              "fill-color": [
                  "case",
                  ["boolean", ["feature-state", "hover"], false],
                  "#56a76a",
                  "blue",
                ],
                "fill-opacity": [
                  "case",
                  ["boolean", ["feature-state", "hover"], false],
                  0.7,
                  0,
                ],
          },
          
      });
  
  
      const popup3 = new mapboxgl.Popup({
        offset: { bottom: [0, -5] },
        closeButton: false,
        closeOnClick: false,
      });
      var hoveredStateId2 = null;
      ODline1.on("mousemove", "interfaceOD2", function (e) {
        if (e.features.length > 0) {
          if (hoveredStateId2) {
            ODline1.setFeatureState(
              { source: "baymap", id: hoveredStateId2 },
              { hover: false }
            );
          }
          hoveredStateId2 = e.features[0].id;
          ODline1.setFeatureState(
            { source: "baymap", id: hoveredStateId2 },
            { hover: true },
            { color: "#fff" }
          );
        }
        pos2 = e.lngLat;
        popup3
        .setLngLat([pos2.lng, pos2.lat])
        .setHTML(
          
          "<b style=color:black>" +
            e.features[0].properties.name +
            "</b>"
        )
        .setMaxWidth("100px")
        .addTo(ODline1);
      });
      ODline1.on("mouseleave", "interfaceOD2", function () {
        if (hoveredStateId2) {
          ODline1.setFeatureState(
            { source: "baymap", id: hoveredStateId2 },
            { hover: false }
          );
        }
        hoveredStateId2 = null;
        popup3.remove();
      });
  
    });
  


  // ODline1.on('load',function(){

  //   ODline1.addSource("baymap",{
  //       type:"geojson",
  //       data :"./javascript/baydata.json"
  //   }
  //   );

  //   ODline1.addSource("map1buffer",{
  //     type:"geojson",
  //     data :'./javascript/ODLinejson/First.json'
  // }
  // );

  //   ODline1.addLayer({
  //       id: "sourcemap",
  //         type: "fill",
  //         source: "baymap",
  //         layout: {},
  //         paint: {
  //           "fill-color": '#37383A',
  //         },
  //   });



   
  //   ODline1.addLayer({
  //       id: "sourcemapboundary",
  //       type: "line",
  //       source: "baymap",
  //       layout: {},
  //       paint: {
  //         "line-color": "#565656",
  //         "line-width": 1,
  //       },
  //     });
      

  //   ODline1.addSource("center",{
  //       type:"geojson",
  //       data:"./javascript/citycenter.json"
  //     });

  //     ODline1.addSource("FirstOD",{
  //       type:"geojson",
  //       data:"./javascript/ODLinejson/First.json"
  //     });

  //     ODline1.addSource("SecondOD",{
  //       type:"geojson",
  //       data:"./javascript/ODLinejson/Second.json"
  //     });


  //     ODline1.addSource("ThirdOD",{
  //       type:"geojson",
  //       data:"./javascript/ODLinejson/Third.json"
  //     });

  //     ODline1.addSource("ForthOD",{
  //       type:"geojson",
  //       data:"./javascript/ODLinejson/Forth.json"
  //     });

  //     ODline1.addSource("FiveOD",{
  //       type:"geojson",
  //       data:"./javascript/ODLinejson/Five.json"
  //     });

  //     ODline1.addSource("SixthOD",{
  //       type:"geojson",
  //       data:"./javascript/ODLinejson/Six.json"
  //     });

  //     ODline1.addSource("SeventhOD",{
  //       type:"geojson",
  //       data:"./javascript/ODLinejson/Seven.json"
  //     });

  //     ODline1.addSource("LastOD",{
  //       type:"geojson",
  //       data:"./javascript/ODLinejson/Last.json"
  //     });

  //     ODline1.addLayer({
  //         id : "citycenter",
  //         type:"circle",
  //         source:"center",
  //         "paint": {
  //           "circle-radius": 2.5,
  //           "circle-color": "yellow",
  //           }
  //     });

  //     ODline1.addLayer({
  //       id: "FirstODLay",
  //       type: "line",
  //       source: "FirstOD",
  //       "paint": {
  //         "line-color":'orangered',
  //         "line-width":2,
  //         "line-opacity":0.9
  //         }
  //     });
  //     ODline1.addLayer({
  //       id:"interfaceOD2",
  //       type:"fill",
  //       source:"baymap",
  //       layout:{
    
  //       },
  //       paint:{
  //           "fill-color": [
  //               "case",
  //               ["boolean", ["feature-state", "hover"], false],
  //               "#56a76a",
  //               "blue",
  //             ],
  //             "fill-opacity": [
  //               "case",
  //               ["boolean", ["feature-state", "hover"], false],
  //               0.7,
  //               0,
  //             ],
  //       },
        
  //   });

  //   ODline1.addLayer({
  //     id: "buf1",
  //     type: "fill",
  //     source: "map1buffer",
  //     layout: {},
  //     paint: {
  //       "fill-color": "#565656",
  //       // "line-width": 1,
  //     },
  //   });

  //   const popup3 = new mapboxgl.Popup({
  //     offset: { bottom: [0, -5] },
  //     closeButton: false,
  //     closeOnClick: false,
  //   });
  //   var hoveredStateId2 = null;
  //   ODline1.on("mousemove", "interfaceOD2", function (e) {
  //     if (e.features.length > 0) {
  //       if (hoveredStateId2) {
  //         ODline1.setFeatureState(
  //           { source: "baymap", id: hoveredStateId2 },
  //           { hover: false }
  //         );
  //       }
  //       hoveredStateId2 = e.features[0].id;
  //       ODline1.setFeatureState(
  //         { source: "baymap", id: hoveredStateId2 },
  //         { hover: true },
  //         { color: "#fff" }
  //       );
  //     }
  //     pos2 = e.lngLat;
  //     popup3
  //     .setLngLat([pos2.lng, pos2.lat])
  //     .setHTML(
        
  //       "<b style=color:black>" +
  //         e.features[0].properties.name +
  //         "</b>"
  //     )
  //     .setMaxWidth("100px")
  //     .addTo(ODline1);
  //   });
  //   ODline1.on("mouseleave", "interfaceOD2", function () {
  //     if (hoveredStateId2) {
  //       ODline1.setFeatureState(
  //         { source: "baymap", id: hoveredStateId2 },
  //         { hover: false }
  //       );
  //     }
  //     hoveredStateId2 = null;
  //     popup3.remove();
  //   });

  // });


  



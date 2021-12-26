// 同odmap1

mapboxgl.accessToken =
        "pk.eyJ1Ijoia2luZ3NsZXktZ2lzIiwiYSI6ImNrd25maWpoODAwNzcydnBhYmt4YWQzamoifQ.aeqP3iKHqZAQrQdakDJYDQ";
var ODline2 =  new mapboxgl.Map({
    container: "odmap2",
    center: [113.450222, 22.902202],
    style: "mapbox://styles/mapbox/dark-v9",
    zoom: 6.5,
    pitch: 0,
    attributionControl: false,
  });

  ODline2.on('load',function(){

    ODline2.addSource("baymap2",{
        type:"geojson",
        data :"./javascript/baydata.json"
    }
    );

    ODline2.addLayer({
        id: "sourcemap2",
          type: "fill",
          source: "baymap2",
          layout: {},
          paint: {
            "fill-color": '#37383A',
          },
    });



    ODline2.addLayer({
        id:"OD2",
        type:"fill",
        source:"baymap2",
        layout:{
    
        },
        paint:{
            "fill-color": [
                "case",
                ["boolean", ["feature-state", "hover"], false],
                "#4EB3D3",
                "#123",
              ],
              "fill-opacity": [
                "case",
                ["boolean", ["feature-state", "hover"], false],
                1,
                0,
              ],
        },
    });
    ODline2.addLayer({
        id: "sourcemapboundary2",
        type: "line",
        source: "baymap2",
        layout: {},
        paint: {
          "line-color": "#565656",
          "line-width": 1,
        },
      });
      

    ODline2.addSource("center2",{
        type:"geojson",
        data:"./javascript/citycenter.json"
      });

      ODline2.addSource("FirstOD2",{
        type:"geojson",
        data:"./javascript/ODLinejson/First.json"
      });

      ODline2.addSource("SecondOD2",{
        type:"geojson",
        data:"./javascript/ODLinejson/Second.json"
      });


      ODline2.addSource("ThirdOD2",{
        type:"geojson",
        data:"./javascript/ODLinejson/Third.json"
      });

      ODline2.addSource("ForthOD2",{
        type:"geojson",
        data:"./javascript/ODLinejson/Forth.json"
      });

      ODline2.addSource("FiveOD2",{
        type:"geojson",
        data:"./javascript/ODLinejson/Five.json"
      });

      ODline2.addSource("SixthOD2",{
        type:"geojson",
        data:"./javascript/ODLinejson/Six.json"
      });

      ODline2.addSource("SeventhOD2",{
        type:"geojson",
        data:"./javascript/ODLinejson/Seven.json"
      });

 ODline2.addSource("EightthOD2",{
        type:"geojson",
        data:"./javascript/ODLinejson/Last.json"
      });
      ODline2.addLayer({
          id : "citycenter",
          type:"circle",
          source:"center2",
          "paint": {
            "circle-radius": 2.5,
            "circle-color": "yellow",
            }
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
      })
      const popup4 = new mapboxgl.Popup({
        offset: { bottom: [0, -5] },
        closeButton: false,
        closeOnClick: false,
      });

      var hoveredStateId3 = null;
      ODline2.on("mousemove", "OD2", function (e) {
        if (e.features.length > 0) {
          if (hoveredStateId3) {
            ODline2.setFeatureState(
              { source: "baymap2", id: hoveredStateId3 },
              { hover: false }
            );
          }
          hoveredStateId3 = e.features[0].id;
          ODline2.setFeatureState(
            { source: "baymap2", id: hoveredStateId3 },
            { hover: true },
            { color: "#fff" }
          );
        }
        pos3 = e.lngLat;
        popup4
        .setLngLat([pos3.lng, pos3.lat])
        .setHTML(
          
          "<b style=color:black>" +
            e.features[0].properties.name +
            "</b>"
        )
        .setMaxWidth("100px")
        .addTo(ODline2);
      });
      ODline2.on("mouseleave", "OD2", function () {
        if (hoveredStateId3) {
          ODline2.setFeatureState(
            { source: "baymap2", id: hoveredStateId3 },
            { hover: false }
          );
        }
        hoveredStateId3 = null;
        popup4.remove();
      });
     

  })
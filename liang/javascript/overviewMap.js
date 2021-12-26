mapboxgl.accessToken =
        "pk.eyJ1Ijoia2luZ3NsZXktZ2lzIiwiYSI6ImNrd25maWpoODAwNzcydnBhYmt4YWQzamoifQ.aeqP3iKHqZAQrQdakDJYDQ";
var overviewmap =  new mapboxgl.Map({
    container: "overviewMap",
    center: [113.450222, 22.902202],
    style: "mapbox://styles/mapbox/dark-v9",
    zoom: 6.5,
    pitch: 0,
    attributionControl: false,
  });

  // 配色

  overviewFill = [
        "interpolate",

        ["linear"],
      
        ["get", "odsum"],
        12480,
        "lightskyblue",
        672907,
        'yellow',
        1744368,
        "orangered",
  ]


  overviewmap.on("load", function () {
        overviewmap.addSource("overview", {
          type: "geojson",
          data: "javascript/baydata.json",
        });
       
        // The feature-state dependent fill-opacity expression will render the hover effect
        // when a feature's hover state is set to true.
        overviewmap.addLayer({
          id: "categoryoverview",
          type: "fill",
          source: "overview",
          layout: {},
          paint: {
            "fill-color": overviewFill,
          },
        });
        overviewmap.addLayer({
          id: "interfaceoverview",
          type: "fill",
          source: "overview",
          layout: {},
          paint: {
            "fill-color": [
              "case",
              ["boolean", ["feature-state", "hover"], false],
              "#FFDD64",
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

        overviewmap.addLayer({
          id: "boundaryoverview",
          type: "line",
          source: "overview",
          layout: {},
          paint: {
            "line-color": "black",
            "line-width": 1,
          },
        });
        const popup2 = new mapboxgl.Popup({
          offset: { bottom: [0, -5] },
          closeButton: false,
          closeOnClick: false,
        });
        
        // When the user moves their mouse over the state-fill layer, we'll update the
        // feature state for the feature under the mouse.
         overviewmap.on("mousemove", "interfaceoverview", function (e) {
          if (e.features.length > 0) {
            if (hoveredStateId) {
              overviewmap.setFeatureState(
                { source: "overview", id: hoveredStateId },
                { hover: false }
              );
            }
            hoveredStateId = e.features[0].id;
            overviewmap.setFeatureState(
              { source: "overview", id: hoveredStateId },
              { hover: true },
              { color: "#fff" }
            );
          }
          pos = e.lngLat;
          popup2
            .setLngLat([pos.lng, pos.lat])
            .setHTML(
              
              "<b style=color:black>" +
                e.features[0].properties.name +
                "</b><p style=color:black>"+'<b>' +
                e.features[0].properties.odsum + '</b>'+'</p>'
            )
            .setMaxWidth("100px")
            .addTo(overviewmap);
        });
        // When the mouse leaves the state-fill layer, update the feature state of the
        // previously hovered feature.
        overviewmap.on("mouseleave", "interfaceoverview", function () {
          if (hoveredStateId) {
            overviewmap.setFeatureState(
              { source: "overview", id: hoveredStateId },
              { hover: false }
            );
          }
          hoveredStateId = null;
          popup2.remove();
        });
      });
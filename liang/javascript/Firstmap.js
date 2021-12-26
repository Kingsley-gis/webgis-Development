//AverTrans:通勤距离
var indexnow = 0;

// 六大指标专题图配色方案

fill1 = [
  "interpolate",

  ["linear"],

  ["get", "fortune"],
  0.35,
  "#F7FCF0",
  0.48,
  "#E0F3DB",
  0.56,
  "#A8DDB5",
  0.64,
  "#7BCCC4",
  0.68,
  "#1A3A71",
];
fill2 = [
  "interpolate",

  ["linear"],

  ["get", "distance"],
  5.5,
  "white",
  8,
  "#EFAC28",
  9,
  "#F36949",
  10,
  "#B72928",
  12,
  "#63101A",
];
fill3 = [
  "interpolate",

  ["linear"],

  ["get", "match"],
  1.7,
  "#FFFFFF",
  4,
  "#BDABD3",
  5.5,
  "#9B7AA8",
  7,
  "#77518B",
  9.3,
  "#5A2F6C",
];
fill4 = [
  "interpolate",

  ["linear"],

  ["get", "range"],
  15.52,
  "#FFFFFF",
  27,
  "#E2EDA9",
  35,
  "#C6DC86",
  50,
  "#ABD256",
  70,
  "#91C33C",
];
fill5 = [
  "interpolate",

  ["linear"],

  ["get", "subway"],
  0,
  "#FFFFFF",
  10,
  "#F4C0CC",
  35,
  "#F094A9",
  56,
  "#E17696",
  70,
  "#DB5E7C",
];
fill6 = [
  "interpolate",

  ["linear"],

  ["get", "public"],
  0,
  "#FFFFFF",
  0.3,
  "#E9C9B2",
  0.4,
  "#E5BC9E",
  0.45,
  "#D09B71",
  0.5,
  "#9D5525",
];
// 地图配置
mapboxgl.accessToken =
  "pk.eyJ1Ijoia2luZ3NsZXktZ2lzIiwiYSI6ImNrd25maWpoODAwNzcydnBhYmt4YWQzamoifQ.aeqP3iKHqZAQrQdakDJYDQ";
var map = new mapboxgl.Map({
  container: "map1",
  center: [113.450222, 22.902202],
  style: "mapbox://styles/mapbox/dark-v9",
  zoom: 6.5,
  pitch: 0,
  attributionControl: false,
});
var hoveredStateId = null;
map.on("load", function () {
  map.addSource("sz", {
    type: "geojson",
    data: "javascript/baydata.json",
  });

  // The feature-state dependent fill-opacity expression will render the hover effect
  // when a feature's hover state is set to true.
  map.addLayer({
    id: "category",
    type: "fill",
    source: "sz",
    layout: {},
    paint: {
      "fill-color": fill1,
    },
  });
  map.addLayer({
    id: "interface",
    type: "fill",
    source: "sz",
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

  map.addLayer({
    id: "boundary",
    type: "line",
    source: "sz",
    layout: {},
    paint: {
      "line-color": "black",
      "line-width": 1,
    },
  });
  var popup = new mapboxgl.Popup({
    offset: { bottom: [0, -5] },
    closeButton: false,
    closeOnClick: false,
  });

  // When the user moves their mouse over the state-fill layer, we'll update the
  // feature state for the feature under the mouse.
  map.on("mousemove", "interface", function (e) {
    if (e.features.length > 0) {
      if (hoveredStateId) {
        map.setFeatureState(
          { source: "sz", id: hoveredStateId },
          { hover: false }
        );
      }
      hoveredStateId = e.features[0].id;
      map.setFeatureState(
        { source: "sz", id: hoveredStateId },
        { hover: true },
        { color: "#fff" }
      );
    }
    pos = e.lngLat;
    var popuptext =
      "<b style=color:black>" +
      e.features[0].properties.name + 
      "</b><p style=color:black>" +
      "<b>" +
      e.features[0].properties.fortune +
      "</b>" +
      "</p>";
      if (indexnow == 0){
        popup
          .setLngLat([pos.lng, pos.lat])
          .setHTML(
            popuptext
          )
          .setMaxWidth("100px")
          .addTo(map);
      }
      if (indexnow == 1) {
        popup
          .setLngLat([pos.lng, pos.lat])
          .setHTML(
            "<b style=color:black>" +
      e.features[0].properties.name +
      "</b><p style=color:black>" +
      "<b>" +
      e.features[0].properties.distance +
      "</b>" +
      "</p>"
          )
          .setMaxWidth("100px")
          .addTo(map);
      }
      if (indexnow == 2) {
        popup
          .setLngLat([pos.lng, pos.lat])
          .setHTML(
            "<b style=color:black>" +
      e.features[0].properties.name +
      "</b><p style=color:black>" +
      "<b>" +
      e.features[0].properties.match +
      "</b>" +
      "</p>"
          )
          .setMaxWidth("100px")
          .addTo(map);
      }
      if (indexnow == 3) {
        popup
          .setLngLat([pos.lng, pos.lat])
          .setHTML(
            "<b style=color:black>" +
      e.features[0].properties.name +
      "</b><p style=color:black>" +
      "<b>" +
      e.features[0].properties.range +
      "</b>" +
      "</p>"
          )
          .setMaxWidth("100px")
          .addTo(map);
      }
      if (indexnow == 4) {
        popup
          .setLngLat([pos.lng, pos.lat])
          .setHTML(
            "<b style=color:black>" +
      e.features[0].properties.name +
      "</b><p style=color:black>" +
      "<b>" +
      e.features[0].properties.subway +
      "</b>" +
      "</p>"
          )
          .setMaxWidth("100px")
          .addTo(map);
      }
      if (indexnow == 5) {
        popup
          .setLngLat([pos.lng, pos.lat])
          .setHTML(
            "<b style=color:black>" +
      e.features[0].properties.name +
      "</b><p style=color:black>" +
      "<b>" +
      e.features[0].properties.public +
      "</b>" +
      "</p>"
          )
          .setMaxWidth("100px")
          .addTo(map);
      }
  });
  // When the mouse leaves the state-fill layer, update the feature state of the
  // previously hovered feature.
  map.on("mouseleave", "interface", function () {
    if (hoveredStateId) {
      map.setFeatureState(
        { source: "sz", id: hoveredStateId },
        { hover: false }
      );
    }
    hoveredStateId = null;
    popup.remove();
  });
});

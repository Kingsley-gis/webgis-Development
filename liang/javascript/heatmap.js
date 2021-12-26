// 读取数据
$.getJSON("javascript/themask.json", function (json) {

  var shapefile = json;
  var masker = shapefile.features;
  // 读取JSon文件中geometry属性
  data = shapefile.features[0].geometry;

  const hours = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23
  ];
// 划定范围
  box = [111.54, 21.617917, 115.3734592, 24.347408];

  var opts = {
    units: "kilometers",
    mask: data,
  };
// 生成网格
  var hexgrid = turf.hexGrid(box, 7, opts);
// 遍历,为每个网格赋值.
// 本想用二维数组记载24小时,但本次没有时间计算真实数据,且为了展现时更加有趣,直接利用随机数
  turf.featureEach(hexgrid, (e, i) => {
    e.properties.value = Math.random() * 100000;
  });

  mapboxgl.accessToken =
    "pk.eyJ1Ijoia2luZ3NsZXktZ2lzIiwiYSI6ImNrd25maWpoODAwNzcydnBhYmt4YWQzamoifQ.aeqP3iKHqZAQrQdakDJYDQ";
  var heat = new mapboxgl.Map({
    container: "heatmap",
    center: [113.450222, 23.192202],
    style: "mapbox://styles/mapbox/dark-v9",
    zoom: 6.5,
    pitch: 0,
    attributionControl: false,
  });

  heat.on("load", function () {
    heat.addSource('grid', {
      type: "geojson",
      data: hexgrid,
    });
var sourc = ''+0+'';
    heat.addSource(sourc, {
      type: "geojson",
      data: hexgrid,
    });
    
    heat.addSource("mapping", {
      type: "geojson",
      data: "./javascript/baydata.json",
    });

    heat.addLayer({
      id: "theboundary",
      type: "line",
      source: "mapping",
      layout: {},
      paint: {
        "line-color": "#F2B952",
        "line-opacity": 0.6,
        //   "fill-opacity":0.6
      },
    });

    heat.addLayer({
      id: "highlight",
      type: "fill",
      source: "mapping",
      layout: {},
      paint: {
        "fill-color": [
          "case",
          ["boolean", ["feature-state", "hover"], false],
          "#4EB3D3",
          "#123",
        ],
        "fill-opacity": [
          "case",
          ["boolean", ["feature-state", "hover"], false],
          0,
          0,
        ],
      },
    });

    heat.addLayer({
      id: "thegrid",
      type: "fill",
      source: sourc,
      layout: {},
      paint: {
        "fill-color": [
          "interpolate",

          ["linear"],

          ["get", "value"],
          0,
          "#FFF7EC",
          10000,
          "#FEE8C8",
          20000,
          "#FDD49E",
          40000,
          "#FDBB84",
          70000,
          "#FC8D59",
          80000,
          "#EF6548",
          85000,
          "#B30000",
          90000,
          "#B30000",
          98000,
          "#7F0000",
        ],
        "fill-opacity": 0.8,
      },
    });
  });

  var highlightpopup = new mapboxgl.Popup({
    offset: { bottom: [0, -5] },
    closeButton: false,
    closeOnClick: false,
  });

  var stateid = null;
  heat.on("mousemove", "highlight", function (e) {
    if (e.features.length > 0) {
      if (stateid) {
        heat.setFeatureState(
          { source: "mapping", id: stateid },
          { hover: false }
        );
      }
      stateid = e.features[0].id;
      heat.setFeatureState(
        { source: "mapping", id: stateid },
        { hover: true },
        { color: "#fff" }
      );
    }
    position = e.lngLat;
    highlightpopup
      .setLngLat([position.lng, position.lat])
      .setHTML("<b style=color:black>" + e.features[0].properties.name + "</b>")
      .setMaxWidth("100px")
      .addTo(heat);
  });
  heat.on("mouseleave", "highlight", function () {
    if (stateid) {
      heat.setFeatureState(
        { source: "mapping", id: stateid },
        { hover: false }
      );
    }
    stateid = null;
    highlightpopup.remove();
  });
  var sourc = ''+0+'';
  document.getElementById("slider").addEventListener("input",(e)=>{

    heat.removeLayer('thegrid');
    heat.removeSource(sourc);

    time = parseInt(e.target.value,10);
    thissourcename =time;
    
    document.getElementById("thistime").innerHTML ='&nbsp;&nbsp;&nbsp; '+ time+'点';
    turf.featureEach(hexgrid, (e, i) => {
      e.properties.value = Math.random() * 100000;
    });
    
    heat.addSource(sourc, {
      type: "geojson",
      data: hexgrid,
    })
    heat.addLayer({
      id: "thegrid",
      type: "fill",
      source: sourc,
      layout: {},
      paint: {
        "fill-color": [
          "interpolate",

          ["linear"],

          ["get", "value"],
          0,
          "#FFF7EC",
          10000,
          "#FEE8C8",
          20000,
          "#FDD49E",
          40000,
          "#FDBB84",
          70000,
          "#FC8D59",
          80000,
          "#EF6548",
          85000,
          "#B30000",
          90000,
          "#B30000",
          98000,
          "#7F0000",
        ],
        "fill-opacity": 0.8,
      },
    });
    lastsoucename = thissourcename;
  })
});

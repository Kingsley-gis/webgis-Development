mapboxgl.accessToken = 'pk.eyJ1IjoiYWxlbmF0YSIsImEiOiJja3d0MG1nMDgxOXNqMnhwNG93YXEzOWdhIn0.fpsKfFbdn8sdEMEzGUmBuQ';
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/dark-v9',
        center: [113.345653,22.792891],
        zoom: 0,
        bearing: 0,
        pitch: 0
    });

    const marker1 = new mapboxgl.Marker()
    .setLngLat([139.80812,35.659771])
    .addTo(map);
     
    // Create a default Marker, colored black, rotated 45 degrees.
    const marker2 = new mapboxgl.Marker()
    .setLngLat([-74.0059731,40.7143528])
    .addTo(map);

    const marker3 = new mapboxgl.Marker()
    .setLngLat([-121.96312,38.292327])
    .addTo(map);

    map.on('load', () => {
           map.addSource('states', {
               'type': 'geojson',
               'data': 'iddawanqu.json'
           });
   
           // The feature-state dependent fill-opacity expression will render the hover effect
           // when a feature's hover state is set to true.
           map.addLayer({
               'id': 'state-fills',
               'type': 'fill',
               'source': 'states',
               'layout': {},
               'paint': {
                   'fill-color': '#D5C392',
                   'fill-opacity': [
                       'case',
                       ['boolean', ['feature-state', 'hover'], false],
                       1,
                       0.5
                   ]
               }
           });
   
           map.addLayer({
               'id': 'state-borders',
               'type': 'line',
               'source': 'states',
               'layout': {},
               'paint': {
                   'line-color': '#D5C392',
                   'line-width': 2
               }
           });
   
           // When the user moves their mouse over the state-fill layer, we'll update the
           // feature state for the feature under the mouse.
           var hoveredStateId = null;
           map.on('mousemove', 'state-fills', (e) => {
               if (e.features.length > 0) {
                   if (hoveredStateId !== null) {
                       map.setFeatureState(
                           { source: 'states', id: hoveredStateId },
                           { hover: false }
                       );
                   }
                   hoveredStateId = e.features[0].id;
                   map.setFeatureState(
                       { source: 'states', id: hoveredStateId },
                       { hover: true }
                   );
               }
           });
   
           // When the mouse leaves the state-fill layer, update the feature state of the
           // previously hovered feature.
           map.on('mouseleave', 'state-fills', () => {
               if (hoveredStateId !== null) {
                   map.setFeatureState(
                       { source: 'states', id: hoveredStateId },
                       { hover: false }
                   );
               }
               hoveredStateId = null;
           });
       });
    const chapters = {
        'baker': {
            bearing: 0,
            center: [-0.15591514, 51.51830379],
            zoom: 0,
            pitch: 0
        },
        'aldgate': {
            duration: 6000,
            center: [113.264499,23.130061],
            bearing: 0,
            zoom: 6,
            pitch: 0,
            speed: 2.0
        },
        'london-bridge': {
            bearing: 0,
            center: [114.057939,22.543527],
            zoom: 7.5,
            speed: 0.8,
            pitch: 0
        },
        'woolwich': {
            bearing: 0,
            center: [113.264499,23.130061],
            zoom: 7.5,
            speed: 0.8
        },
        
        'charing-cross': {
            bearing: 90,
            center: [-0.12416858, 51.50779757],
            zoom: 14.3,
            pitch: 0
        }
    };

    let activeChapterName = 'baker';
    function setActiveChapter(chapterName) {
        if (chapterName === activeChapterName) return;

        map.flyTo(chapters[chapterName]);

        document.getElementById(chapterName).classList.add('active');
        document.getElementById(activeChapterName).classList.remove('active');

        activeChapterName = chapterName;
    }

    function isElementOnScreen(id) {
        const element = document.getElementById(id);
        const bounds = element.getBoundingClientRect();
        return bounds.top < window.innerHeight && bounds.bottom > 0;
    }

    // On every scroll event, check which element is on screen
    window.onscroll = () => {
        for (const chapterName in chapters) {
            if (isElementOnScreen(chapterName)) {
                setActiveChapter(chapterName);
                break;
            }
        }
    };
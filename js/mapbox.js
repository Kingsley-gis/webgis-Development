mapboxgl.accessToken = 'pk.eyJ1IjoiYWxlbmF0YSIsImEiOiJja3d0MG1nMDgxOXNqMnhwNG93YXEzOWdhIn0.fpsKfFbdn8sdEMEzGUmBuQ';
const map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/dark-v9',
center: [-0.15591514, 51.51830379],
zoom: 15.5,
bearing: 27,
pitch: 45
});
 
const chapters = {
'baker': {
bearing: 27,
center: [-0.15591514, 51.51830379],
zoom: 15.5,
pitch: 20
},
'aldgate': {
duration: 6000,
center: [-0.07571203, 51.51424049],
bearing: 150,
zoom: 15,
pitch: 0
},
'london-bridge': {
bearing: 90,
center: [-0.08533793, 51.50438536],
zoom: 13,
speed: 0.6,
pitch: 40
},
'woolwich': {
bearing: 90,
center: [0.05991101, 51.48752939],
zoom: 12.3
},
'gloucester': {
bearing: 45,
center: [-0.18335806, 51.49439521],
zoom: 15.3,
pitch: 20,
speed: 0.5
},
'caulfield-gardens': {
bearing: 180,
center: [-0.19684993, 51.5033856],
zoom: 12.3
},
'telegraph': {
bearing: 90,
center: [-0.10669358, 51.51433123],
zoom: 17.3,
pitch: 40
},
'charing-cross': {
bearing: 90,
center: [-0.12416858, 51.50779757],
zoom: 14.3,
pitch: 20
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
window.onscroll = () => {//要改！！
for (const chapterName in chapters) {
if (isElementOnScreen(chapterName)) {
setActiveChapter(chapterName);
break;
}
}
};
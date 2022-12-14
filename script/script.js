// Amount of Snowflakes
var snowMax = 40;

// Snowflake Colours
var snowColor = ["#abe0d8", "#82ada6"];

// Snow Entity
var snowEntity = "&#x2022;";

// Falling Velocity
var snowSpeed = 0.75;

// Minimum Flake Size
var snowMinSize = 8;

// Maximum Flake Size
var snowMaxSize = 24;

// Refresh Rate (in milliseconds)
var snowRefresh = 30;

// Additional Styles
var snowStyles = "cursor: default; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; -o-user-select: none; user-select: none;";


var snow = [],
	pos = [],
	coords = [],
	lefr = [],
	marginBottom,
	marginRight;

function randomise(range) {
    rand = Math.floor(range * Math.random());
    return rand;
}

function initSnow() {
	var snowSize = snowMaxSize - snowMinSize;
	marginBottom = document.body.scrollHeight - 480;
	marginRight = document.body.clientWidth - 15;

	for (i = 0; i <= snowMax; i++) {
		coords[i] = 0;
		lefr[i] = Math.random() * 15;
		pos[i] = 0.03 + Math.random() / 10;
		snow[i] = document.getElementById("flake" + i);
		snow[i].style.fontFamily = "inherit";
		snow[i].size = randomise(snowSize) + snowMinSize;
		snow[i].style.fontSize = snow[i].size + "px";
		snow[i].style.color = snowColor[randomise(snowColor.length)];
		snow[i].style.zIndex = 1000;
		snow[i].sink = snowSpeed * snow[i].size / 5;
		snow[i].posX = randomise(marginRight - snow[i].size);
		snow[i].posY = randomise(2 * marginBottom - marginBottom - 2 * snow[i].size);
		snow[i].style.left = snow[i].posX + "px";
		snow[i].style.top = snow[i].posY + "px";
	}

	moveSnow();
}
function moveSnow() {
	for (i = 0; i <= snowMax; i++) {
		coords[i] += pos[i];
		snow[i].posY += snow[i].sink;
		snow[i].style.left = snow[i].posX + lefr[i] * Math.sin(coords[i]) + "px";
		snow[i].style.top = snow[i].posY + "px";

		if (snow[i].posY >= marginBottom - 2 * snow[i].size || parseInt(snow[i].style.left) > (marginRight - 3 * lefr[i])) {
			snow[i].posX = randomise(marginRight - snow[i].size);
			snow[i].posY = 0;
		}
	}

	setTimeout("moveSnow()", snowRefresh);
}

var nav = document.getElementById("nav");

for (i = 0; i <= snowMax; i++) {
	document.write("<span id='flake" + i + "' style='" + snowStyles + "position:absolute;top:-" + snowMaxSize + "'>" + snowEntity + "</span>");
}


function resize() {
	marginBottom = document.body.scrollHeight - 5;
	marginRight = document.body.clientWidth - 15;
}

window.addEventListener('load', initSnow);
window.addEventListener('resize', resize);


    var navItemBox = document.getElementById("navItem1st")
    
navItemBox.onmouseover = function waveTextHoverOn() { /* When you hover over */
    var navItemText = document.getElementsByClassName("navItemLetter")
    for (var navItemText of navItemText) { /* Simple loop to iterate through classes */
        navItemText.style.animationName = "navJump"
    }    
}    
navItemBox.onmouseout = function waveTextHoverOff() {
    var navItemText = document.getElementsByClassName("navItemLetter")
    for (var navItemText of navItemText) { /* Simple loop to iterate through classes */
        navItemText.style.animationName = "none"
    }    
}


document.querySelector(".leftRightParaBox").onmouseover = function leftRightHoverOver() { /* When uou hover over */
var leftPara = document.getElementById("navListLeftPara");
var rightPara = document.getElementById("navListRightPara");
    rightPara.style.transform = "rotateX(0deg) rotateY(45deg)";
    leftPara.style.transform = "rotateX(0deg) rotateY(-20deg)";
    leftPara.style.color = "#ffce6b"; /* Yellow highlight color */
    rightPara.style.color = "white";

}

document.querySelector(".leftRightParaBox").onmouseout = function leftRightHoverOut() { /* When uou hover out */
var leftPara = document.getElementById("navListLeftPara");
var rightPara = document.getElementById("navListRightPara");
    rightPara.style.transform = "rotateX(0deg) rotateY(93deg)";
    leftPara.style.transform = "rotateX(0deg) rotateY(0deg)";
    leftPara.style.color = "white";
    rightPara.style.color = "#6b21ff"; /* Ourple colors */
}

var backgroundDiv = document.querySelector(".iconHoverBox");

firefoxLogoDiv.onmouseover = function firefoxHoverAni() { /* Firefox Hover ON */
    var firefoxLogoDiv = document.getElementById("firefoxLogoDiv")
    var firefoxLogo = document.getElementById("firefoxIcon")
    firefoxLogoDiv.style.boxShadow = "0 0 15px #ffee10"
} 
firefoxLogoDiv.onmouseout = function firefoxHoverAniOff() { /* Firefox hover OFF */
    var firefoxLogoDiv = document.getElementById("firefoxLogoDiv")
    var firefoxLogo = document.getElementById("firefoxIcon")
    firefoxLogoDiv.style.boxShadow = "none"
} 

chromeLogoDiv.onmouseover = function chromeHoverAni() { /* cHROME hover ON */
    var chromeLogoDiv = document.getElementById("chromeLogoDiv")
    var chromeLogo = document.getElementById("chromeIcon")
    chromeLogoDiv.style.boxShadow = "0 0 15px #ffee10"
} 

chromeLogoDiv.onmouseout = function chromeHoverAniOff() { /* cHROME hover Off */
    var chromeLogoDiv = document.getElementById("chromeLogoDiv")
    var chromeLogo = document.getElementById("chromeIcon")
    chromeLogoDiv.style.boxShadow = "none"
} 

backgroundDiv.onmouseover = function chromeHoverAni() { /* cHROME hover ON */
    backgroundDiv.style.boxShadow = "0 0 15px #ffee10"
} 
backgroundDiv.onmouseout = function chromeHoverAniOff() { /* cHROME hover OFF */
    backgroundDiv.style.boxShadow = "none"
} 

var main = document.getElementById("main")
// When the user scrolls the page, execute myFunction
main.onscroll = function() {scrollTracker()};


function scrollTracker() {
  var winScroll = main.scrollTop || document.documentElement.scrollTop;
  var height = main.scrollHeight - main.clientHeight;
  var scrolled = (winScroll / height) * 100;
  console.log("main")
  document.querySelector(".trackerBar").style.width = scrolled + "%";
}
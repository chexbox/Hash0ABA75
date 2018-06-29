//var theme { "name": "Example Page", "nav": [["first", "firstlink"], ["second","secondlink"]]};
function setcookie(value) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString()
    document.cookie = "";
    document.cookie = "colors=" + value + ";" + expires + " path=/";
    getCookie();
}

function getCookie() {
    var c = String(document.cookie);
    var bg = c.slice(7, 14);
    var col = c.slice(15, 22);
    var ne = c.slice(23, 30);
    var tx = c.slice(31, 38);
    var ac = c.slice(39, 46);
    console.log(document.cookie);
    var css = ":root{ --main-bg:" + bg + "; --accent:" + col + "; --card:" + ne + "; --text:" + tx + ";--accenttext:" + ac + ";}";

    var customcss = document.createElement('style');
    customcss.type = 'text/css';
    customcss.styleSheet ?
    customcss.styleSheet.cssText = css :
        customcss.appendChild(document.createTextNode(css));

    document.getElementsByTagName("head")[0].appendChild(customcss);
}
function menutoggle() {
    'use strict';
    document.getElementById("settings").classList.remove("show");
    document.getElementById("drop").classList.toggle("show");
    document.getElementById("mainbar").classList.toggle("fixed");
};
function settingstoggle() {
    'use strict';
    document.getElementById("drop").classList.remove("show");
    document.getElementById("settings").classList.toggle("show");
    document.getElementById("mainbar").classList.toggle("fixed");
};
// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    'use strict';
    if (!(event.target == document.getElementById("drop")) && !(event.target == document.getElementById("dropbtn")) && !(event.target == document.getElementById("settings")) && !(event.target == document.getElementById("settingsbtn")) && !(event.target == document.getElementById("settingsh1"))) {

        document.getElementById("drop").classList.remove("show");
        document.getElementById("settings").classList.remove("show");
        document.getElementById("mainbar").classList.remove("fixed");
    }
}
/*The above is Inspired and based on a W3Schools tutorial.*/
function show() {
    document.getElementsByTagName("body")[0].innerHTML = '<header class="bar" id="mainbar"><button id="dropbtn" onclick="menutoggle()" title="Menu">&nbsp;&#9776;&nbsp;</button><h1>' + theme.name + '</h1><nav id="drop" class=""></nav><button id="settingsbtn" onclick="settingstoggle()" title="Settings" style="float:right;">&#9881;</button><div id="settings" style="float:right;" class="settings"> <h1 id="settingsh1">Theme</h1><button class="theme" onclick="setcookie(\'#cfd8dc,#0BAB75,#ffffff,#000000,#ffffff\');">Green Light</button><button class="theme" onclick="setcookie(\'#0c0c0c,#0bab75,#272727,#ffffff,#ffffff\');">Green Dark</button><button class="theme" onclick="setcookie(\'#cfd8dc,#0093ce,#ffffff,#000000,#ffffff\');">Blue Light</button><button class="theme" onclick="setcookie(\'#0c0c0c,#0093ce,#272727,#ffffff,#ffffff\');">Blue Dark</button><button class="theme" onclick="setcookie(\'#000000,#000000,#000000,#ffffff,#2aff00\');">Terminal</button><button class="theme" onclick="setcookie(\'#ffffff,#ffffff,#ffffff,#000000,#000000\');">Whiteout</button><button class="theme" onclick="setcookie(\'#ffbbbb,#ee5566,#ff9999,#ffffff,#ffffff\');">Pink</button><button class="theme" onclick="setcookie(\'#ffff88,#ffffff,#ffff33,#000000,#000000\');">Legible Yellow</button><button class="theme" onclick="setcookie(\'#cfd8dc,#ff9922,#ffffff,#000000,#ffffff\');">Orange</button><button class="theme" onclick="setcookie(\'#9f449f,#8822ff,#ff99ff,#000000,#ffffff\');">Deep Purple</button><button class="theme" onclick="setcookie(\'#cfd8dc,#ff3333,#ffffff,#000000,#ffffff\');">Red</button><button class="theme" onclick="setcookie(\'#ff1111,#ff3333,#ff4949,#ffffff,#ffffff\');">Deep Red</button><button class="theme" onclick="setcookie(\'#dfdfdf,#6f6f6f,#9f9f9f,#ffffff,#ffffff\');">Grayscale</button><button class="theme" onclick="setcookie(\'#ff0000,#0000ff,#00ff00,#000000,#ff0000\');">Don\'t do this one :P</button></div></header>' + document.getElementsByTagName("body")[0].innerHTML;
    document.getElementsByTagName("body")[0].innerHTML = document.getElementsByTagName("body")[0].innerHTML + '<footer><p>' + theme.footercontent + '</p></footer>';
    let i = 0;
    while (i < theme.nav.length){
        document.getElementById("drop").innerHTML = document.getElementById("drop").innerHTML + '<a href=' + theme.nav[i][1] + '>' + theme.nav[i][0] + '</a>';
        i += 1;
    }
}

//ColorEngine.js
//Controls the colors of elements in the UI.

//ColorEngine_changeForeColor(element, R, G, B)
//Changes the foreground color of an element.
function ColorEngine_changeForeColor(element, R, G, B) {
    document.getElementById(element).style.color = "rgb(" + R + ", " + G + ", " + B + ")";
}

//ColorEngine_changeBackColor(element, R, G, B)
//Changes the background color of an element.
function ColorEngine_changeBackColor(element, R, G, B) {
    document.getElementById(element).style.backgroundColor = "rgb(" + R + ", " + G + ", " + B + ")";
}
//ElementManager.js
//Contains functions for manipulating elements in the UI.

//changeText(ID, text)
//Changes the text of an element.
function ElementManager_changeText(ID, text) {
    document.getElementById(ID).innerHTML = text;
}
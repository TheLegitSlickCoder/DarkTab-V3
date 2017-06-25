//Clock.js:
//Contains functions for getting current time.

//getTime()
//Returns the current time.
function Clock_getTime() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var time = hours + ":" + minutes + ":" + seconds;
    
    return time;
}
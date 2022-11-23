// https://developer.mozilla.org/en-US/docs/Web/Events
// https://developer.mozilla.org/en-US/docs/Web/Events

var listButton = document.getElementById("addToList");

var clickBtn = document.getElementById("btn1");
var enterBtn = document.getElementById("btn2");
var exitBtn = document.getElementById("btn3");


// Testing some events with buttons
function testMouseEvents(button, eventType) {
    button.addEventListener(eventType, function () {
        console.log("This button[", button, "] is using event: ", eventType)
    })
}

testMouseEvents(clickBtn, "click")
testMouseEvents(enterBtn, "mouseenter")
testMouseEvents(exitBtn, "mouseleave")


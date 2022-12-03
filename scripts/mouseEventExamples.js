/* 
>> Documentation for JavaScript
    [] document object model
    [] selectors
>> Page: 34
>> Link to doc: https://docs.google.com/document/d/1NoFPu4Z9_kNf3hDG59YhuLVXH1JKc71kgO7CtFawtDw/edit?skip_itp2_check=true#
*/

var clickBtn = document.getElementById("btn1");
var enterBtn = document.getElementById("btn2");
var exitBtn = document.getElementById("btn3");


function testMouseEvents(button, eventType) {
    button.addEventListener(eventType, function () {
        console.log("This button[", button, "] is using event: ", eventType)
    })
}

testMouseEvents(clickBtn, "click");
testMouseEvents(enterBtn, "mouseenter");
testMouseEvents(exitBtn, "mouseleave");
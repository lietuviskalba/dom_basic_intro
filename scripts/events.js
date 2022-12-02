// https://developer.mozilla.org/en-US/docs/Web/Events
// https://developer.mozilla.org/en-US/docs/Web/Events

// ADD item to list section
var listTextInput = document.getElementById("userInput");
var listButton = document.getElementById("addToList");
var itemList = document.getElementById("itemList");

function GetListInputLength() {
    return listTextInput.value.length;
}

function AddItemToList() {
    var listItem = document.createElement("li");

    listItem.appendChild(document.createTextNode(listTextInput.value));
    itemList.appendChild(listItem);

    listTextInput.value = "";
}

function AddToListWithKeypress(event) {
    if (listTextInput.value.length > 0 && event.code === "Enter") {
        AddItemToList();
    }
}

function AddToListWithClick() {
        if (GetListInputLength() > 0) {
            AddItemToList();
        }
}

listButton.addEventListener("click", AddToListWithClick)
listTextInput.addEventListener("keypress", AddToListWithKeypress)

// Testing some events with buttons section
var clickBtn = document.getElementById("btn1");
var enterBtn = document.getElementById("btn2");
var exitBtn = document.getElementById("btn3");

function testMouseEvents(button, eventType) {
    button.addEventListener(eventType, function () {
        console.log("This button[", button, "] is using event: ", eventType)
    })
}

testMouseEvents(clickBtn, "click")
testMouseEvents(enterBtn, "mouseenter")
testMouseEvents(exitBtn, "mouseleave")


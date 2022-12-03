// https://developer.mozilla.org/en-US/docs/Web/Events
// https://developer.mozilla.org/en-US/docs/Web/Events

// >>> ADD item to list section
var listTextInput = document.getElementById("userInput");
var listButton = document.getElementById("addToList");
var itemList = document.getElementById("itemList");
var items = document.getElementsByClassName("newItem")


function GetListInputLength() {
    return listTextInput.value.length;
}

function AddItemToList() {
    var listItem = document.createElement("li");
    var listDeleteButton = document.createElement("button");

    listItem.className = "newItem"
    listDeleteButton.className = "newItemDelete"

    listDeleteButton.appendChild(document.createTextNode("X"));
    listItem.appendChild(listDeleteButton);

    listItem.appendChild(document.createTextNode(listTextInput.value));
    itemList.appendChild(listItem);
}


function toggleDoneItems() {
    items.add("done");
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

function resolveClickActions(element) {
    setItemsDone(element);
}

function setItemsDone(element) {
    if (element.target.tagName === "LI") {
        element.target.classList.toggle("done");
    }
}

itemList.addEventListener("click", resolveClickActions)
listButton.addEventListener("click", AddToListWithClick)
listTextInput.addEventListener("keypress", AddToListWithKeypress)


// >>> Testing some events with buttons section
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
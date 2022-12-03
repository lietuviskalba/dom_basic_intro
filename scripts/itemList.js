/* 
>> Documentation for JavaScript
    [] document object model
    [] selectors
>> Page: 34
>> Link to doc: https://docs.google.com/document/d/1NoFPu4Z9_kNf3hDG59YhuLVXH1JKc71kgO7CtFawtDw/edit?skip_itp2_check=true#
*/

var listTextInput = document.getElementById("userInput");
var listButton = document.getElementById("addToList");
var itemList = document.getElementById("itemList");
var items = document.getElementsByClassName("newItem");

function GetListInputLength() {
    return listTextInput.value.length;
}

function AddItemToList() {
    var listItem = document.createElement("li");
    var listDeleteButton = document.createElement("button");

    listItem.className = "newItem"
    listDeleteButton.className = "newItemDelete"

    listDeleteButton.appendChild(document.createTextNode("Delete"));
    listItem.appendChild(listDeleteButton);

    listItem.appendChild(document.createTextNode(listTextInput.value));
    itemList.appendChild(listItem);

    // Making the input empty, to not let spam same item and quickly add new ones
    listTextInput.value = "";
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

function deleteItem(element) {
    if (element.target.className === "newItemDelete") {
        element.target.parentElement.remove();
    }
}

function setItemsDone(element) {
    if (element.target.tagName === "LI") {
        element.target.classList.toggle("done");
    }
}

function resolveClickActions(element) {
    setItemsDone(element);
    deleteItem(element);
}

itemList.addEventListener("click", resolveClickActions)
listButton.addEventListener("click", AddToListWithClick)
listTextInput.addEventListener("keypress", AddToListWithKeypress)
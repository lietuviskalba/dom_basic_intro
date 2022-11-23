/* 
>> Documentation for JavaScript
    [] document object model
    [] selectors
>> Page: 34
>> Link to doc: https://docs.google.com/document/d/1NoFPu4Z9_kNf3hDG59YhuLVXH1JKc71kgO7CtFawtDw/edit?skip_itp2_check=true#
*/

// >>> Get elements
var getH1Elements = document.getElementsByTagName("h1")
console.log("Find all h1 tags: ", getH1Elements)

var getClassElements = document.getElementsByClassName("textClass")
console.log("Find class element: ", getClassElements)

var getOneClassElement = document.getElementsByClassName("textClass")[0]
console.log("Find FIRST class element: ", getOneClassElement)

var getIdElement = document.getElementById("textId")
console.log("Find id element: ", getIdElement)

// >>> Query selectors
var getH2 = document.querySelector("h2")
console.log("Find h2 element: ", getH2)

var getAllListItems = document.querySelectorAll("li")
console.log("Find all list elements: ", getAllListItems)

// >>> Getting/Setting attribute
var getNumberAttribute = document.querySelector("li").getAttribute("myAttributeNumber")
console.log("Finding my attribute number: ", getNumberAttribute)

var setNumberAttribute = document.querySelector("li").setAttribute("myAttributeNumber", "1111")
console.log("***New attribute number: ", setNumberAttribute)
console.log("***New attribute number query selected: ", document.querySelector("li"))

// >>> Style
var h1Style = document.querySelector("h1").style;
console.log("H1 style query selector: ", h1Style)
console.log("H1 inline style background color changed here, into: ", h1Style.background = "black")

var h2Style = document.querySelector("h2")
console.log("H2 external style text color changed here: ", h2Style.className = "h2StyleUpdate")

// >>> Class styles
var itemClassListOne = document.querySelectorAll("li")[0].classList;
var itemClassListTwo = document.querySelectorAll("li")[1].classList;
console.log("Class lists for <li> tag: ", itemClassListTwo);

// Add, remove, toggle  external css style
itemClassListTwo.add("listItemUpdate")

itemClassListOne.add("listItemUpdate")
itemClassListOne.remove("listItemUpdate")
// Best to use it in the console to see effect
itemClassListOne.toggle("lineThroughText")

// >>> Inner HTML
var itemClassListThree = document.querySelectorAll("li")[2];
itemClassListThree.innerHTML = "<strong> list item changed through inner HTML </strong>"

// >>> Selecting parents and children
var itemClassListTwo = document.querySelectorAll("li")[1];
console.log("Item parent selected: ", itemClassListTwo.parentElement)
console.log("Item, list parent PARENT selected: ", itemClassListTwo.parentElement.parentElement)
console.log("PARENT children selected: ", itemClassListTwo.parentElement.parentElement.children)



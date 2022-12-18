/* 
>> Documentation for JavaScript
    [] document object model
    [] selectors
>> Page: 34
>> Link to doc: https://docs.google.com/document/d/1NoFPu4Z9_kNf3hDG59YhuLVXH1JKc71kgO7CtFawtDw/edit?skip_itp2_check=true#
*/

// >>> Get elements in different ways
topicNameSeparator("Selector lab");
sectionNameSeparator("GET elements");

var getH1Elements = document.getElementsByTagName("h1");
console.log("Find all h1 tags: ", getH1Elements);

var getClassElements = document.getElementsByClassName("textClass");
console.log("Find class element: ", getClassElements);

var getOneClassElementChangeBackground = document.getElementsByClassName("textClass")[0];
console.log("Find FIRST class element: ", getOneClassElementChangeBackground.style.background = "black");

var getIdElement = document.getElementById("textId");
console.log("Find id element: ", getIdElement);

// >>> Query selectors
sectionNameSeparator("Query selector");

var getH2 = document.querySelector("h2");
console.log("Find h2 element: ", getH2);

var getAllListItems = document.querySelectorAll("li");
console.log("Find all list elements: ", getAllListItems);

// >>> Selecting parents and children
var itemClassListTwo = document.querySelectorAll("#listBlock li")[1];
console.log("Item parent selected: ", itemClassListTwo.parentElement);
console.log("Item, list parent PARENT selected: ", itemClassListTwo.parentElement.parentElement);
console.log("PARENT children selected: ", itemClassListTwo.parentElement.parentElement.children);

// >>> Getting/Setting attribute
sectionNameSeparator("Get/Set attributes");
var getNumberAttribute = document.querySelector("li").getAttribute("myAttributeNumber");
console.log("Finding my attribute number: ", getNumberAttribute);

var setNumberAttribute = document.querySelector("li").setAttribute("myAttributeNumber", "1111");
console.log("***New attribute number: ", setNumberAttribute);
console.log("***New attribute number query selected: ", document.querySelector("li"));

// >>> Style
sectionNameSeparator("Style modification");

var h1Style = document.getElementById("selectorBlock").querySelector("h1").style;
console.log("H1 style query selector: ", h1Style)
console.log("H1 inline style background color changed here, into: ", h1Style.background = "#ffffff");

var h2Style = document.getElementById("h2TagByID");
console.log("H2 external style text color CURRENT here: ", h2Style.className);
console.log("H2 external style text color CHANGED here: ", h2Style.className = "h2StyleUpdate");

// >>> Class styles
var itemClassListOne = document.querySelectorAll("#listBlock li")[0].classList;
var itemClassListTwo = document.querySelectorAll("#listBlock li")[1].classList;
console.log("Class lists for <li> tag: ", itemClassListTwo);

// Add, remove, toggle  external css style
itemClassListTwo.add("listItemStyleUpdate");

itemClassListOne.add("listItemStyleUpdate");
itemClassListOne.remove("listItemStyleUpdate");
itemClassListOne.toggle("lineThroughText");

// >>> Inner HTML
sectionNameSeparator("Inner HTML");
var itemClassListThree = document.querySelectorAll("#listBlock li")[2];
itemClassListThree.innerHTML = "<strong> list item changed through inner HTML </strong>"
console.log("List item changed through inner HTML", itemClassListThree);
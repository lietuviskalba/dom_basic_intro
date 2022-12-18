/* 
>> Documentation for JavaScript
    [] document object model
    [] selectors
>> Page: 34
>> Link to doc: https://docs.google.com/document/d/1NoFPu4Z9_kNf3hDG59YhuLVXH1JKc71kgO7CtFawtDw/edit?skip_itp2_check=true#
*/

topicNameSeparator("Dark mode");

function testMouseEvents(button, eventType) {
    button.addEventListener(eventType, function () {
        sectionNameSeparator("Toggle background from dark to light");

        var selectedElement = document.getElementById("darkModeParagraph");
        console.log("Check that correct element is selected:  ", selectedElement);

        if (selectedElement.className === "lightMode") {
            selectedElement.className = "darkMode";
        } else if (selectedElement.className === "darkMode") {
            selectedElement.className = "lightMode";
        }
    })
}

var clickBtn = document.getElementById("darkModeBtn");
testMouseEvents(clickBtn, "click");
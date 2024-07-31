// Activity 1: Selecting and Manipulating Elements

// Task 1: Select an HTML element by its ID and change its text content.

function task1() {
  document.getElementById('demo')
  .innerHTML = 'Text is change now'
}

// Task 2: Select an HTML element by its class and change its background color.

  let div = document.querySelector('.Class');
  div.style.backgroundColor = 'red';

// Activity 2: Creating and Appending Elements

// Task 3: Create a new div element with some text content and append it to the body.

let newtext = document.createElement('div');
newtext.textContent = "Hello, this is a new div element";
console.log(newtext);

let text = document.querySelector('.task3');
text.append(newtext);

// Task 4: Create a new li element and add it to an existing ul list.

let newli = document.createElement('li');
newli.textContent = "New list item";
console.log(newli);

let li = document.querySelector('.task4');
li.append(newli);

// Activity 3: Removing Elements

// Task 5: Select an HTML element and remove it from the DOM.

function removeElement() {
  
  let removeElementValue = document.getElementById('remove-me');

  if (removeElementValue) {
    removeElementValue.remove();
  }
}

// Task 6: Remove the last child of a specific HTML element.

function removeLastChild() {
  var parentElement = document.getElementById("parent-element");

  if (parentElement.lastElementChild) {
    parentElement.removeChild(parentElement.lastElementChild);
  }
}

// Activity 4: Modifying Attributes and Classes

// Task 7: Select an HTML element and change one of its attributes (e.g., src of an img tag).

function changeImageSourceByClass() {
  // Select the first img element with the class 'my-image-class'
  var imgElement = document.querySelector(".my-image-class");

  // Change the src attribute of the img element
  imgElement.setAttribute("src", "new-image.jpg");
}

// Task 8: Add and remove a CSS class to/from an HTML element.

function addClass() {
  var element = document.getElementById("my-element");
  element.classList.add("highlight");
}

// Function to remove a CSS class from an element
function removeClass() {
  var element = document.getElementById("my-element");
  element.classList.remove("highlight");
}

// Activity 5: Event Handling

// Task 9: Add a click event listener to a button that changes the text content of a paragraph.

function changeParagraphText() {
  var paragraph = document.getElementById("my-paragraph");
  paragraph.textContent = "The text content has been changed!";
}

// Adding an event listener to the button
document.addEventListener("DOMContentLoaded", function() {
  var button = document.getElementById("my-button");
  button.addEventListener("click", changeParagraphText);
});

// Task 10: Add a mouseover event listener to an element that changes its border color.

function changeBorderColor() {
  var element = document.getElementById("my-element");
  element.style.borderColor = "red";
}

// Adding a mouseover event listener to the element
document.addEventListener("DOMContentLoaded", function() {
  var element = document.getElementById("my-element");
  element.addEventListener("mouseover", changeBorderColor);
});

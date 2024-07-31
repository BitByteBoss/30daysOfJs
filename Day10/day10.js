// Task 1: Click Event Listener
const button = document.getElementById('myButton');
const paragraph = document.getElementById('myParagraph');

button.addEventListener('click', () => {
  paragraph.textContent = 'The text has been changed!';
});

// Task 2: Double-Click Event Listener
const image = document.getElementById('myImage');

image.addEventListener('dblclick', () => {
  image.style.display = (image.style.display === 'none') ? 'block' : 'none';
});

// Task 3: Mouseover Event Listener
const element = document.getElementById('myElement');

element.addEventListener('mouseover', () => {
  element.style.backgroundColor = 'lightblue';
});

// Task 4: Mouseout Event Listener
element.addEventListener('mouseout', () => {
  element.style.backgroundColor = '';
});

// Task 5: Keydown Event Listener
const inputField = document.getElementById('myInput');

inputField.addEventListener('keydown', (event) => {
  console.log(`Key pressed: ${event.key}`);
});

// Task 6: Keyup Event Listener
const outputParagraph = document.getElementById('outputParagraph');

inputField.addEventListener('keyup', () => {
  outputParagraph.textContent = `Current input: ${inputField.value}`;
});

// Task 7: Submit Event Listener
const form = document.getElementById('myForm');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevents default form submission
  console.log(new FormData(form));
});

// Task 8: Change Event Listener
const selectDropdown = document.getElementById('mySelect');
const selectedValueParagraph = document.getElementById('selectedValue');

selectDropdown.addEventListener('change', () => {
  selectedValueParagraph.textContent = `Selected value: ${selectDropdown.value}`;
});

// Task 9: Click Event Listener with Event Delegation
const list = document.getElementById('myList');

list.addEventListener('click', (event) => {
  if (event.target && event.target.nodeName === 'LI') {
    console.log(`List item text: ${event.target.textContent}`);
  }
});

// Task 10: Event Listener for Dynamically Added Child Elements
const parentElement = document.getElementById('parentElement');

parentElement.addEventListener('click', (event) => {
  if (event.target && event.target.matches('.child')) {
    console.log('Clicked a dynamically added child element!');
  }
});

function addChild() {
  const child = document.createElement('div');
  child.className = 'child';
  child.textContent = 'New Child Element';
  parentElement.appendChild(child);
}
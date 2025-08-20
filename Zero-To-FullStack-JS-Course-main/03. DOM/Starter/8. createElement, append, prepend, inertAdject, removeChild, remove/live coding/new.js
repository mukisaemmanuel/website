// ====================================
// insertBefore() - The Proper Concept
// ====================================

/*
insertBefore() Syntax:
parentNode.insertBefore(newNode, referenceNode)

Parameters:
- newNode: The element you want to insert
- referenceNode: The element before which you want to insert the newNode
- If referenceNode is null, the newNode is inserted at the end (like appendChild)

Returns: The inserted node
*/

console.log("=== insertBefore() Examples ===");

// Example 1: Insert a new list item before the 3rd item
const ul = document.querySelector("ul");
const newLi = document.createElement("li");
newLi.textContent = "New Item (inserted before 3)";

// Get the 3rd list item (index 2)
const thirdLi = ul.children[2]; // or ul.querySelector("li:nth-child(3)")
ul.insertBefore(newLi, thirdLi);

// Example 2: Insert at the beginning of the list
const firstLi = document.createElement("li");
firstLi.textContent = "First Item (inserted at beginning)";
ul.insertBefore(firstLi, ul.firstElementChild);

// Example 3: Insert at the end (using null as reference)
const lastLi = document.createElement("li");
lastLi.textContent = "Last Item (inserted at end)";
ul.insertBefore(lastLi, null); // Same as appendChild()

// Example 4: Insert a paragraph before the section
const newParagraph = document.createElement("p");
newParagraph.textContent =
  "This paragraph was inserted before the section using insertBefore()";
newParagraph.style.color = "blue";
newParagraph.style.fontWeight = "bold";

const section = document.querySelector("section");
document.body.insertBefore(newParagraph, section);

// Example 5: Insert before the second ul (new-list)
const newDiv = document.createElement("div");
newDiv.innerHTML =
  "<h3>Inserted before the new-list</h3><p>This div was inserted using insertBefore()</p>";
newDiv.style.backgroundColor = "#f0f0f0";
newDiv.style.padding = "10px";
newDiv.style.margin = "10px 0";

const newListUl = document.querySelector(".new-list");
document.body.insertBefore(newDiv, newListUl);

// Example 6: Insert multiple elements
const multipleElements = document.createElement("div");
multipleElements.innerHTML = `
  <h4>Multiple Elements Example</h4>
  <span>Element 1</span>
  <span>Element 2</span>
  <span>Element 3</span>
`;
multipleElements.style.border = "2px solid green";
multipleElements.style.padding = "15px";
multipleElements.style.margin = "10px 0";

// Insert before the first ul
const firstUl = document.querySelector("ul");
document.body.insertBefore(multipleElements, firstUl);

// ====================================
// Key Points about insertBefore():
// ====================================

/*
1. The referenceNode must be a child of the parentNode
2. If referenceNode is null, the newNode is inserted at the end
3. If the newNode already exists in the DOM, it will be moved to the new position
4. You cannot insert before a node that doesn't exist
5. The method returns the inserted node
*/

// Example 7: Error handling - checking if reference node exists
const nonExistentElement = document.querySelector("#non-existent");
if (nonExistentElement) {
  const errorLi = document.createElement("li");
  errorLi.textContent = "This won't be inserted";
  ul.insertBefore(errorLi, nonExistentElement);
} else {
  console.log("Reference element doesn't exist, so insertBefore() won't work");
}

// Example 8: Moving existing elements
const existingLi = ul.querySelector("li:nth-child(2)"); // Get 2nd li
if (existingLi) {
  // Move the 2nd li to the end
  ul.insertBefore(existingLi, null);
  console.log("Moved existing element to the end");
}

console.log("=== insertBefore() Examples Complete ===");

// ====================================
// append() - Modern Method
// ====================================

/*
append() Syntax:
parentNode.append(...nodes)

- Adds one or more nodes to the end of a parent node
- Can append multiple elements at once
- Can append text nodes, DOM elements, or strings
- Returns undefined (unlike appendChild which returns the appended node)
*/

console.log("=== append() Examples ===");

// Example 1: Basic append
const appendDiv = document.createElement("div");
appendDiv.innerHTML =
  "<h3>append() Example</h3><p>This was added using append()</p>";
appendDiv.style.backgroundColor = "#e8f5e8";
appendDiv.style.padding = "15px";
appendDiv.style.margin = "10px 0";
appendDiv.style.border = "2px solid green";

document.body.append(appendDiv);

// Example 2: Append multiple elements at once
const multipleAppend = document.createElement("div");
multipleAppend.innerHTML = "<h4>Multiple Elements with append()</h4>";
multipleAppend.style.backgroundColor = "#fff3cd";
multipleAppend.style.padding = "10px";
multipleAppend.style.margin = "10px 0";
multipleAppend.style.border = "2px solid orange";

const span1 = document.createElement("span");
span1.textContent = "Span 1 ";
span1.style.color = "red";

const span2 = document.createElement("span");
span2.textContent = "Span 2 ";
span2.style.color = "blue";

const span3 = document.createElement("span");
span3.textContent = "Span 3";
span3.style.color = "green";

// Append multiple elements in one call
multipleAppend.append(span1, span2, span3);
document.body.append(multipleAppend);

// Example 3: Append text and elements
const textAppendDiv = document.createElement("div");
textAppendDiv.style.backgroundColor = "#f8d7da";
textAppendDiv.style.padding = "10px";
textAppendDiv.style.margin = "10px 0";
textAppendDiv.style.border = "2px solid red";

// Append text and elements together
textAppendDiv.append(
  "Text before element ",
  document.createElement("strong").append("Bold text"),
  " text after element"
);
document.body.append(textAppendDiv);

// ====================================
// prepend() - Modern Method
// ====================================

/*
prepend() Syntax:
parentNode.prepend(...nodes)

- Adds one or more nodes to the beginning of a parent node
- Can prepend multiple elements at once
- Can prepend text nodes, DOM elements, or strings
- Returns undefined
*/

console.log("=== prepend() Examples ===");

// Example 1: Basic prepend to body
const prependDiv = document.createElement("div");
prependDiv.innerHTML =
  "<h3>prepend() Example</h3><p>This was added to the beginning using prepend()</p>";
prependDiv.style.backgroundColor = "#d1ecf1";
prependDiv.style.padding = "15px";
prependDiv.style.margin = "10px 0";
prependDiv.style.border = "2px solid cyan";

document.body.prepend(prependDiv);

// Example 2: Prepend to existing elements
const prependToUl = document.createElement("li");
prependToUl.textContent = "Prepended to UL";
prependToUl.style.color = "purple";
prependToUl.style.fontWeight = "bold";

// Prepend to the first ul
const firstUlForPrepend = document.querySelector("ul");
firstUlForPrepend.prepend(prependToUl);

// Example 3: Prepend multiple elements
const prependMultipleDiv = document.createElement("div");
prependMultipleDiv.innerHTML = "<h4>Multiple Prepend Elements</h4>";
prependMultipleDiv.style.backgroundColor = "#d4edda";
prependMultipleDiv.style.padding = "10px";
prependMultipleDiv.style.margin = "10px 0";
prependMultipleDiv.style.border = "2px solid #28a745";

const prependSpan1 = document.createElement("span");
prependSpan1.textContent = "First ";
prependSpan1.style.color = "darkgreen";

const prependSpan2 = document.createElement("span");
prependSpan2.textContent = "Second ";
prependSpan2.style.color = "darkblue";

const prependSpan3 = document.createElement("span");
prependSpan3.textContent = "Third";
prependSpan3.style.color = "darkred";

// Prepend multiple elements at once
prependMultipleDiv.prepend(prependSpan1, prependSpan2, prependSpan3);
document.body.prepend(prependMultipleDiv);

// ====================================
// insertAdjacentElement() - Precise Positioning
// ====================================

/*
insertAdjacentElement() Syntax:
element.insertAdjacentElement(position, element)

Positions:
- 'beforebegin': Before the element itself
- 'afterbegin': Just inside the element, before its first child
- 'beforeend': Just inside the element, after its last child
- 'afterend': After the element itself

Returns: The inserted element or null if insertion fails
*/

console.log("=== insertAdjacentElement() Examples ===");

// Example 1: beforebegin - Insert before the element
const beforeBeginDiv = document.createElement("div");
beforeBeginDiv.innerHTML =
  "<h4>beforebegin Example</h4><p>Inserted before the section</p>";
beforeBeginDiv.style.backgroundColor = "#ffeaa7";
beforeBeginDiv.style.padding = "10px";
beforeBeginDiv.style.margin = "10px 0";
beforeBeginDiv.style.border = "2px solid #fdcb6e";

const sectionForAdjacent = document.querySelector("section");
sectionForAdjacent.insertAdjacentElement("beforebegin", beforeBeginDiv);

// Example 2: afterbegin - Insert as first child
const afterBeginDiv = document.createElement("div");
afterBeginDiv.innerHTML = "<p>afterbegin: First child of section</p>";
afterBeginDiv.style.backgroundColor = "#a29bfe";
afterBeginDiv.style.padding = "8px";
afterBeginDiv.style.margin = "5px 0";
afterBeginDiv.style.border = "1px solid #6c5ce7";

sectionForAdjacent.insertAdjacentElement("afterbegin", afterBeginDiv);

// Example 3: beforeend - Insert as last child
const beforeEndDiv = document.createElement("div");
beforeEndDiv.innerHTML = "<p>beforeend: Last child of section</p>";
beforeEndDiv.style.backgroundColor = "#fd79a8";
beforeEndDiv.style.padding = "8px";
beforeEndDiv.style.margin = "5px 0";
beforeEndDiv.style.border = "1px solid #e84393";

sectionForAdjacent.insertAdjacentElement("beforeend", beforeEndDiv);

// Example 4: afterend - Insert after the element
const afterEndDiv = document.createElement("div");
afterEndDiv.innerHTML =
  "<h4>afterend Example</h4><p>Inserted after the section</p>";
afterEndDiv.style.backgroundColor = "#55a3ff";
afterEndDiv.style.padding = "10px";
afterEndDiv.style.margin = "10px 0";
afterEndDiv.style.border = "2px solid #0984e3";

sectionForAdjacent.insertAdjacentElement("afterend", afterEndDiv);

// Example 5: Insert adjacent to list items
const newListUlForAdjacent = document.querySelector(".new-list");
const adjacentLi = document.createElement("li");
adjacentLi.textContent = "Adjacent Element";
adjacentLi.style.color = "white";
adjacentLi.style.backgroundColor = "#2d3436";
adjacentLi.style.padding = "5px";
adjacentLi.style.margin = "2px 0";

// Insert after the 3rd list item
const thirdLiForAdjacent = newListUlForAdjacent.children[2];
if (thirdLiForAdjacent) {
  thirdLiForAdjacent.insertAdjacentElement("afterend", adjacentLi);
}

// ====================================
// removeChild() - Remove with Parent Reference
// ====================================

/*
removeChild() Syntax:
parentNode.removeChild(childNode)

- Removes a child node from the parent
- Returns the removed node
- Throws an error if the child is not a child of the parent
- You need a reference to both parent and child
*/

console.log("=== removeChild() Examples ===");

// Example 1: Remove a specific list item
const ulForRemove = document.querySelector("ul");
const firstLiToRemove = ulForRemove.querySelector("li:first-child");
if (firstLiToRemove) {
  const removedLi = ulForRemove.removeChild(firstLiToRemove);
  console.log("Removed element:", removedLi.textContent);

  // Re-add it after 2 seconds to demonstrate
  setTimeout(() => {
    ulForRemove.appendChild(removedLi);
    console.log("Re-added the removed element");
  }, 2000);
}

// Example 2: Remove multiple elements
const elementsToRemove = document.querySelectorAll(
  "div[style*='background-color: #ffeaa7']"
);
elementsToRemove.forEach((element) => {
  if (element.parentNode) {
    const removed = element.parentNode.removeChild(element);
    console.log("Removed element with text:", removed.textContent);
  }
});

// Example 3: Safe removal with error handling
const safeRemove = (parent, child) => {
  try {
    if (parent && child && parent.contains(child)) {
      return parent.removeChild(child);
    } else {
      console.log("Cannot remove: child is not a child of parent");
      return null;
    }
  } catch (error) {
    console.error("Error removing child:", error);
    return null;
  }
};

// Test safe removal
const testParent = document.querySelector("ul");
const testChild = document.querySelector("li:nth-child(2)");
if (testParent && testChild) {
  const safelyRemoved = safeRemove(testParent, testChild);
  if (safelyRemoved) {
    console.log("Safely removed:", safelyRemoved.textContent);
    // Re-add after 1 second
    setTimeout(() => {
      testParent.appendChild(safelyRemoved);
    }, 1000);
  }
}

// ====================================
// remove() - Modern Method
// ====================================

/*
remove() Syntax:
element.remove()

- Removes the element from the DOM
- No need for parent reference
- Returns undefined
- Throws no error if element doesn't exist
*/

console.log("=== remove() Examples ===");

// Example 1: Basic remove
const removeDiv = document.createElement("div");
removeDiv.innerHTML =
  "<h4>This will be removed</h4><p>This div will disappear in 3 seconds</p>";
removeDiv.style.backgroundColor = "#ff7675";
removeDiv.style.padding = "15px";
removeDiv.style.margin = "10px 0";
removeDiv.style.border = "2px solid #d63031";
removeDiv.id = "temporary-div";

document.body.appendChild(removeDiv);

// Remove after 3 seconds
setTimeout(() => {
  removeDiv.remove();
  console.log("Removed temporary div using remove()");
}, 3000);

// Example 2: Remove multiple elements
const removeMultipleDiv = document.createElement("div");
removeMultipleDiv.innerHTML = "<h4>Multiple Elements to Remove</h4>";
removeMultipleDiv.style.backgroundColor = "#74b9ff";
removeMultipleDiv.style.padding = "15px";
removeMultipleDiv.style.margin = "10px 0";
removeMultipleDiv.style.border = "2px solid #0984e3";

for (let i = 1; i <= 3; i++) {
  const tempSpan = document.createElement("span");
  tempSpan.textContent = `Element ${i} `;
  tempSpan.style.color = "white";
  tempSpan.style.backgroundColor = "#2d3436";
  tempSpan.style.padding = "5px";
  tempSpan.style.margin = "2px";
  tempSpan.className = "temp-element";
  removeMultipleDiv.appendChild(tempSpan);
}

document.body.appendChild(removeMultipleDiv);

// Remove individual elements
setTimeout(() => {
  const tempElements = document.querySelectorAll(".temp-element");
  tempElements.forEach((element, index) => {
    setTimeout(() => {
      element.remove();
      console.log(`Removed element ${index + 1} using remove()`);
    }, index * 500); // Remove one by one with 500ms delay
  });
}, 4000);

// Example 3: Remove with conditions
const conditionalRemoveDiv = document.createElement("div");
conditionalRemoveDiv.innerHTML = "<h4>Conditional Removal</h4>";
conditionalRemoveDiv.style.backgroundColor = "#a8e6cf";
conditionalRemoveDiv.style.padding = "15px";
conditionalRemoveDiv.style.margin = "10px 0";
conditionalRemoveDiv.style.border = "2px solid #2d3436";

const keepElement = document.createElement("p");
keepElement.textContent = "This element will stay";
keepElement.style.color = "green";

const removeElement = document.createElement("p");
removeElement.textContent = "This element will be removed";
removeElement.style.color = "red";

conditionalRemoveDiv.appendChild(keepElement);
conditionalRemoveDiv.appendChild(removeElement);
document.body.appendChild(conditionalRemoveDiv);

// Remove specific element after 5 seconds
setTimeout(() => {
  if (removeElement.parentNode) {
    removeElement.remove();
    console.log("Conditionally removed element using remove()");
  }
}, 5000);

// Example 4: Remove all elements with specific class
setTimeout(() => {
  const allTempElements = document.querySelectorAll(".temp-element");
  allTempElements.forEach((element) => {
    element.remove();
  });
  console.log("Removed all remaining temp elements");
}, 7000);

console.log("=== All DOM Manipulation Methods Complete ===");
console.log(
  "Check the browser console and page to see all examples in action!"
);

// ------------------------------------

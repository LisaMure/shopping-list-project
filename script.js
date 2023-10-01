const itemForm = document.getElementById("item-form");
const itemInput = document.getElementById("item-input");
const itemList = document.getElementById("item-list");

// Functions
function addItem(event) {
  event.preventDefault();

  // 1. Create new variable to store input value
  const newItem = itemInput.value;

  // 2. Validate input
  if (newItem === "" || newItem === " ") {
    alert("Please add an item");
    return;
  }

  // 3. Create list item
  // 4. Create/Append a text node to the list item
  // 5. Add the newItem (input value) into the text node
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(newItem));

  // 6. Outside this function, create a function that creates the button element
  // 7. Call the button function and insert the classes
  const button = createButton("remove-item btn-link text-red");

  // 11. Append the button with the icon to the li
  li.appendChild(button);

  // 12. Append the li to the ul(itemList)
  itemList.appendChild(li);

  // 13. Clear the itemInput => Set default to nothing
  itemInput.value = "";
}

function createButton(classes) {
  const button = document.createElement("button");
  button.className = classes;

  // 8. Outside this function, create a function to creates the icon element
  // 9. Call the icon function and insert the classes
  // 10. Append the icon to the button
  const icon = createIcon("fa-solid fa-xmark");
  button.appendChild(icon);

  return button;
}

function createIcon(classes) {
  const icon = document.createElement("i");
  icon.className = classes;
  return icon;
}

// Event listeners
itemForm.addEventListener("submit", addItem);

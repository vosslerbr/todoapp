// Initial Setup

// Declare variables
let itemList = [];
const addButton = document.getElementById('addButton');
const undoButton = document.getElementById('undoButton');
const clearButton = document.getElementById('clearButton');
const inputBox = document.getElementById('inputBox');

//Event Listeners (duh)
inputBox.addEventListener('keydown', function (e) {
    if (e.keyCode === 13) {  //checks whether the pressed key is "Enter"
        addItem(e); // Runs addItem function
    }
});
addButton.addEventListener('click', addItem);
undoButton.addEventListener('click', undo);
clearButton.addEventListener('click', clear);

// Add item
function addItem() {

    // if input value is empty
    if (inputBox.value === '') {
        alert('Please enter a valid item!')
    } else {
        // add item to array
        itemList.push(inputBox.value);
        // clear input box
        inputBox.value = "";
        // test log
        console.log(itemList);
        //run render function
        renderList(itemList);
    }
    
   
}

// Render List
function renderList(list) {
    // clear the entire list so there aren't duplicates
    const listDiv = document.getElementById('list');
    while (listDiv.hasChildNodes()) {  
        listDiv.removeChild(listDiv.firstChild);
      } 

    // run for loop to create seperate p elements with text from inputBox
    for (let i = 0; i < list.length; i++) {
        let newItemDiv = document.createElement('div');
        let newItem = document.createElement('p');
        let itemContent = document.createTextNode(list[i]);
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = 'checkbox' + i;

        newItem.appendChild(itemContent);
        newItemDiv.appendChild(newItem);
        newItemDiv.appendChild(checkbox);
        
        newItem.className = 'newItem';
        newItem.id = 'item' + i;
        newItemDiv.className = 'newItemDiv';

        listDiv.appendChild(newItemDiv);
    };
    
}

// Undo
function undo() {
    // remove item from end of array
    itemList.pop();
    // re-render list
    renderList(itemList)
}

// Clear all
function clear() {
    // clear entire array
    itemList = [];
    // re-render list
    renderList(itemList);
}
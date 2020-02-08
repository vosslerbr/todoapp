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
        checkbox.id = 'item' + i + 'checkbox';
        checkbox.setAttribute('onclick', 'markDone(\'item' + i + '\', \'item' + i + 'checkbox\')')

        newItem.appendChild(itemContent);
        newItemDiv.appendChild(newItem);
        newItemDiv.appendChild(checkbox);
        
        newItem.className = 'newItem';
        newItem.id = 'item' + i;
        newItemDiv.className = 'newItemDiv light';

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

// Mark as done
function markDone(listItem, listItemCheckbox) {
    console.log(listItem)
    let selectedItem = document.getElementById(listItem);
    
    let checkboxTest = document.getElementById(listItemCheckbox);
    if (checkboxTest.checked) {
        selectedItem.style.color = 'rgb(160, 160, 160)';
    } else {
        selectedItem.style.color = '#212327';
    }
}

function toggleDarkMode() {
    let body = document.getElementById('body');
    let description = document.getElementById('description');
    let inputBox = document.getElementById('inputBox');
    let addButton = document.getElementById('addButton');
    let undoButton = document.getElementById('undoButton');
    let clearButton = document.getElementById('clearButton');
    let newItem = document.getElementById('list').childNodes;

    console.log(newItem);

    if (body.className === 'light') {
        body.setAttribute('class', 'dark')
        description.setAttribute('class', 'dark')
        inputBox.setAttribute('class', 'dark')
        addButton.setAttribute('class', 'dark')
        undoButton.setAttribute('class', 'dark')
        clearButton.setAttribute('class', 'dark')
        
        for (let i = 0; i < newItem.length; i++) {
            newItem[i].className = 'newItemDiv dark';
        }

    } else {
        body.setAttribute('class', 'light')
        description.setAttribute('class', 'light')
        inputBox.setAttribute('class', 'light')
        addButton.setAttribute('class', 'light')
        undoButton.setAttribute('class', 'light')
        clearButton.setAttribute('class', 'light')

        for (let i = 0; i < newItem.length; i++) {
            newItem[i].className = 'newItemDiv light';
        }
    }
}
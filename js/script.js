function newItem() {

// Adds a new item to list
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    let text = document.createTextNode(inputValue);
    li.append(text);

    if (inputValue === '') {
        alert('Please write something first!');
    } else {
        let list = $('#list');
        list.append(li);
    }

// Crosses out item from list
    li.on('dblclick', function(){
        li.toggleClass('strike');
    });
  

// Deletes an item from list
    let deleteButton = $('<button>X</button>');
    li.append(deleteButton);

    function deleteListItem() {
        li.addClass('delete');
    }
    
    deleteButton.on('click', deleteListItem);
    

// Changes the order of list items
}

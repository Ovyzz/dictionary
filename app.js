function displayList() {
    for (let i = 0; i < localStorage.length; ++i) {
        const key = localStorage.key(i);
        document.getElementById("wordList").innerHTML += '<li class="list-group-item list-group-item-dark">' + key + '</li>';
    }
}

function addNewWord() {
    const word = document.getElementById("add").value;
    localStorage.setItem(word, "list");
    displayMessage ("addNewWord");
    setTimeout(function(){location.reload();}, 1000);

}

function searchWord() {
    const word = document.getElementById("search").value;
    for(let i = 0; i < localStorage.length; ++i) {
        if(localStorage.key(i) === word) {
            displayMessage ("wordFound");
            return false;
        }
        displayMessage ("wordNotFound");
    }
}

function deleteAllWords () {
    localStorage.clear();
    displayMessage ("deleteAllWords");
    setTimeout(function(){location.reload();}, 1500);
}

function displayMessage (messageType) {
    if (messageType === "addNewWord") {
        document.getElementById("alert").innerHTML = '<li class="list-group-item list-group-item-success">The word was added successfully!</li>';
        return false;
    } else if (messageType === "wordFound") {
        document.getElementById("alert").innerHTML = '<li class="list-group-item list-group-item-success">The word is in the dictionary</li>';
        return false;
    } else if (messageType === "wordNotFound") {
        document.getElementById("alert").innerHTML = '<li class="list-group-item list-group-item-danger">The word was not found in the list</li>';
        return false;
    } else if (messageType === "deleteAllWords") {
        document.getElementById("alert").innerHTML = '<li class="list-group-item list-group-item-warning">All words have been deleted!</li>';
        return false;
    }
}





function listDisplay() {
    for (let i = 0; i < localStorage.length; ++i) {
        const key = localStorage.key(i);
        document.getElementById("wordList").innerHTML += '<li class="list-group-item list-group-item-dark">' + key + '</li>';
    }
}

function addNewWord() {
    const word = document.getElementById("add").value;
    localStorage.setItem(word, "list");
    display("word");
    setTimeout(function(){location.reload();}, 1000);

}

function searchWord() {
    const word = document.getElementById("search").value;
    for(let i = 0; i < localStorage.length; ++i) {
        if(localStorage.key(i) === word) {
            display("wordFound");
            return false;
        }
        display("wordNotFound");
    }
}

function deleteAllWords () {
    localStorage.clear();
    display("deletewords");
    setTimeout(function(){location.reload();}, 1500);
}

function display(x) {
    if (x === "word") {
        document.getElementById("alert").innerHTML = '<li class="list-group-item list-group-item-success">The word was added successfully!</li>';
        return false;
    } else if (x === "wordFound") {
        document.getElementById("alert").innerHTML = '<li class="list-group-item list-group-item-success">The word is in the dictionary</li>';
        return false;
    } else if (x === "wordNotFound") {
        document.getElementById("alert").innerHTML = '<li class="list-group-item list-group-item-danger">The word was not found in the list</li>';
        return false;
    } else if (x === "deletewords") {
        document.getElementById("alert").innerHTML = '<li class="list-group-item list-group-item-warning">All words have been deleted!</li>';
        return false;
    }
}





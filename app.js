for(let i = 0; i < localStorage.length; ++i) {
    const key = localStorage.key(i);
    document.getElementById("wordList").innerHTML += '<li class="list-group-item list-group-item-dark">'+ key +'</li>';
}

function addNewWord() {
    const word = document.getElementById("add").value;
    localStorage.setItem(word, "list");
    document.getElementById("alert").innerHTML = '<li class="list-group-item list-group-item-success">The word was added successfully!</li>';
    setTimeout(function(){location.reload();}, 1000);

}

function searchWord() {
    const word = document.getElementById("search").value;
    for(let i = 0; i < localStorage.length; ++i) {
        if(localStorage.key(i) === word) {
            document.getElementById("alert").innerHTML = '<li class="list-group-item list-group-item-success">The word is in the dictionary</li>';
            return false;
        }
        document.getElementById("alert").innerHTML = '<li class="list-group-item list-group-item-danger">The word was not found in the list</li>';
    }
}

function deleteAllWords () {
    localStorage.clear();
    document.getElementById("alert").innerHTML = '<li class="list-group-item list-group-item-warning">All words have been deleted!</li>';
    setTimeout(function(){location.reload();}, 1500);
}






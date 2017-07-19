
/**
 * Function to allow live filtering when making a query on the main page.
 */
function filterFunc() {
    // Declare variables
    var input, filter, ul, aRefs, a, i;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    aRefs = ul.getElementsByTagName('a');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < aRefs.length; i++) {
        a = aRefs[i].getElementsByTagName("li")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            aRefs[i].style.display = "";
        } else {
            aRefs[i].style.display = "none";
        }
    }
}

/**
 * Populates the list of Projects on the main page.
 */
function populateList() {

    //TALK TO DARNELL

    // references
    var database, list

    list = document.getElementById("myUL")

    //populating the list from php database
    for(i=0; i < database.length; i++){
        list.appendChild(database[i])
    }


}

function loadDoc() {
    //Request to the server
  var xhttp = new XMLHttpRequest();
  var list

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     list = document.getElementById("myUL")
        console.log(this.responseText)
        // list.appendChild(this.responseText);
    }
  };
  xhttp.open("GET", "ajax_info.txt", true);
  xhttp.send();
}

//Function calls
// loadDoc();
// populateList();




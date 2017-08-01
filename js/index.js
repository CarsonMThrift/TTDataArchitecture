
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
 * Function to allow advance searching of project through the filtering sidebar
 */
function filterFuncAdvanced() {


    alert("search")

    // var input, ul, aRefs, a, i, state, acreage, clubhouseDate, status, units;

    // state = document.getElementsByName("StateSelector").value
    // acreage = document.getElementsByName("AcerageSelector").value
    // clubhouseDate = document.getElementsByName("clubhouseDate")
    // status = document.getElementsByName("StatusSelector")
    // units = document.getElementsByName("UnitsSelector")

    // ul = document.getElementById("myUL");
    // aRefs = ul.getElementsByTagName('a');

    


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
    for (i = 0; i < database.length; i++) {
        list.appendChild(database[i])
    }


}

/**
 * Function to determine whether the filter button should open/close nav 
 */
function showOrHideNav() {

    var x = document.getElementById('mySidenav');
    if (x.style.width === "400px") {
        closeNav();
    } else {
        openNav();
    }
}

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "400px";
    document.getElementById("main").style.marginLeft = "400px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}
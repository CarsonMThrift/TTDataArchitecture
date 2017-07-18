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
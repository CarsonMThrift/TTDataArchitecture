
// References
const projectForm = document.querySelector('form#project-form')
const projectList = document.getElementById('myUL')

var database = firebase.database();


/**
 * Method to handle the adding of a new project to the main list. 
 */
// function addProject() {

//     // ev.preventDefault()


//     // // Input Value References



//     // const newLI = document.createElement('newLI')

//     // newLI.textContent = name + '|' + state + '|' + date

//     // projectList.appendChild(newLI)



//     redirect()



// }


/**
 * Function to redirect to the homepage when a project is submitted.
 */
function redirect() {
    window.location.replace("index.html");
    return false;
}
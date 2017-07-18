
// References
const projectForm = document.querySelector('form#project-form')
const projectList = document.getElementById('myUL')

/**
 * Method to handle the adding of a new project to the main list. 
 */
function addProject() {

    ev.preventDefault()


    // Input Value References
    
    const f = ev.target
    const name = f.projectName.value
    const type = f.projectType.value
    const date = f.projectDate.value
    const city = f.projectCity.value
    const state = f.projectState.value
    const zip = f.projectZipCode.value

    const newLI = document.createElement('newLI')

    newLI.textContent = name + '|' + state + '|' + date

    projectList.appendChild(newLI)

    redirect()



}

/**
 * Function to redirect to the homepage when a project is submitted.
 */
function redirect() {
  window.location.replace("login.php");
  return false;
}



/**
 * Function to write data to the Firebase Database based on the user input
 */
function writeUserData(name, id, type, date, city, state, zip) {


    firebaseInit();

    //writes data to the database
    firebase.database().ref('projects').child(id).set({
        projectName: name,
        projectId: id,
        projectType: type,
        projectDate: date,
        projectCity: city,
        projectState: state,
        projectZipCode: zip,

    });
    


    var delayMillis = 1000; //1 second

    setTimeout(function () {
        //your code to be executed after 1 second
        redirect();
    }, delayMillis);

    

}

/**
 * Function to handle the submission of a new project
 */
function submitForm() {

    console.log("ran")


    // Form reference
    const f = document.getElementById("project-form")
    const name = f.projectName.value
    const id = f.projectId.value
    const type = f.projectType.value
    const date = f.projectDate.value
    const city = f.projectCity.value
    const state = f.projectState.value
    const zip = f.projectZipCode.value

    writeUserData(name, id, type, date, city, state, zip);

}

/**
 * Function to load all of the stored projects for user access on main page.
 */
function loadProjects() {

    firebaseInit();

    // var table = document.getElementById('myUL')[1];
    // var ref = firebase.database().ref().child('/projects');
    // ref.on("value", function (element) {
    //     snapshot.forEach(function (child) {
    //         console.log(JSON.stringify);

    //     });
    // });

    // Get a database reference to our posts
    var db = firebase.database();
    var ref = db.ref("projects/");

    // Attach an asynchronous callback to read the data at our posts reference
    ref.on("value", function (snapshot) {

        // Loop through all children in the current snapshot of projects/
        snapshot.forEach(function (child) {

            var a = document.createElement("a");
            var list = document.getElementById("myUL")
            var li = document.createElement('li')
            var project = child.val()

            // Setting li's inner text to appropriate values.
            li.innerText = project.projectName + ' | ' + project.projectId +
                ' | ' + project.projectType + ' | ' + project.projectCity + ' | ' +
                project.projectState + ' | ' + project.projectZipCode + ' | ' + project.projectDate

            a.setAttribute('href', "projectPage.html")

            // Append li to the list
            a.appendChild(li)
            list.appendChild(a)
        });


    }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
    });

}

/**
 * Function to redirect to the homepage when a project is submitted.
 */
function redirect() {
    window.location.replace("index.html");
    return false;
}

function firebaseInit() {
    var config = {
        apiKey: "AIzaSyBTzDuqYvzp6w4I236Ymie1eR_a0cM60hg",
        authDomain: "ttdataarchitecture.firebaseapp.com",
        databaseURL: "https://ttdataarchitecture.firebaseio.com",
        projectId: "ttdataarchitecture",
        storageBucket: "",
        messagingSenderId: "868370223403"
    };
    // App initialization
    firebase.initializeApp(config);
}
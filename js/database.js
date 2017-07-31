/**
 * Function to write data to the Firebase Database based on the user input
 */
function writeUserData(name, id, type, date, city, state, status, zip, file) {

    //writes data to the database
    firebase.database().ref('projects').child(id).set({
        projectName: name,
        projectId: id,
        projectType: type,
        projectDate: date,
        projectCity: city,
        projectState: state,
        projectStatus: status,
        projectZipCode: zip,
        projectFile: file,

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

    // Form reference
    const f = document.getElementById("project-form")
    const name = f.projectName.value
    const id = f.projectId.value
    const type = f.projectType.value
    const date = f.projectDate.value
    const city = f.projectCity.value
    const state = f.projectState.value
    const status = f.projectStatus.value
    const zip = f.projectZipCode.value

    const file = document.getElementById('projectFile').value

    if (verifyUserInput()) {
        writeUserData(name, id, type, date, city, state, status, zip, file);
    } else {
        alert("Please fill out all required fields")
    }
}

function verifyUserInput() {

    const f = document.getElementById("project-form")
    const name = f.projectName.value
    const id = f.projectId.value
    const type = f.projectType.value
    const date = f.projectDate.value
    const city = f.projectCity.value
    const state = f.projectState.value
    const status = f.projectStatus.value
    const zip = f.projectZipCode.value
    const file = document.getElementById("projectFile").value

    if (name == "" || id == "" || type == "" || date == "" || city == "" || state == "" || status == "" || zip == "" || file == "") {
        return false;
    } else {
        return true;
    }

}

/**
 * Function to load all of the stored projects for user access on main page.
 */
function loadProjects() {

    // firebaseInit();

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

            li.setAttribute('data', project)

            a.setAttribute('href', "projectPage.html?" + project.projectId)

            // Append li to the list
            a.appendChild(li)
            list.appendChild(a)
        });

    }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
    });
}

/**
 * Function to render a single project when 
 * a user selects it from the UL on the main page
 */
function renderSingleProject(keyId) {

    // const firebaseApp = firebaseInit();
    //References
    // var project = firebase.database.ref().child(keyId);

    //ref for datapoints
    var title = document.getElementById("projectTitle")
    var type = document.getElementById("projectType")
    var city = document.getElementById("projectCity")
    var state = document.getElementById("projectState")
    var zip = document.getElementById("projectZip")
    var status = document.getElementById("projectStatus")
    var notes = document.getElementById("projectNotes")
    var files = document.getElementById("projectFiles")
    var image = document.getElementById("propertyImage")

    //FIREBASE

    var db = firebase.database();
    // Get a reference to the storage service, which is used to create references in your storage bucket
    // Create a storage reference from our storage service

    var ref = db.ref("projects/" + keyId).once('value').then(function (snapshot) {
        title.innerText = snapshot.val().projectName;
        type.innerText = snapshot.val().projectType;
        city.innerText = snapshot.val().projectCity;
        state.innerText = snapshot.val().projectState;
        zip.innerText = snapshot.val().projectZipCode;
        status.innerText = snapshot.val().projectStatus;

    });

}

/**
 * Function to get the property image for a requested property based on the keyId
 */
function getPropertyImage() {

    // firebaseInit();

    //Get the project ID from the queryString passed into the page
    var keyId = queryString();

    var projectRef = firebase.database().ref('projects').child(keyId)
    var fileName = projectRef.file.value

    var folderRef = firebase.storage().ref('propertyPictures/' + keyId + "/" + fileName);
    var imageRef = folderRef.snapshot.value;

        // Once the sign in completed, we get the download URL of the image
        imageRef.getDownloadURL().then(function (url) {
            // Once we have the download URL, we set it to our img element
            document.getElementById('propertyImage').src = url;

        }).catch(function (error) {
            // If anything goes wrong while getting the download URL, log the error
            console.error(error);
        });

}

/**
 * 
 * Function to upload and image to Firebase Storage for later access.
 * 
 * @param {*} fileName 
 */
function uploadImage() {

    //Elements
    var uploader = document.getElementById("uploader")
    var fileButton = document.getElementById("projectFile")
    var form = document.getElementById("project-form")

    //Listen for changes
    fileButton.addEventListener('change', function (e) {

        if (form.projectId.value == null || form.projectId.value == "") {
            alert("For storage purposes, please enter a project id before submitting any files")
            fileButton.value = ''
            return;

        } else {

            //Get file
            var file = e.target.files[0]

            //Storage Ref
            var storageRef = firebase.storage().ref('propertyPictures/' + form.projectId.value + '/' + file.name);

            //Upload File, subscribing to state changes
            var task = storageRef.put(file);

            //Update Progress
            task.on('state_changed',

                function progress(snapshot) {
                    var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    uploader.value = percentage;
                },

                function error(err) {
                    alert("Your file type may not be supported, Please try again")
                },

                function complete() {
                    alert("File Uploaded Successfully");
                },

            );
        }
    });
}

/**
 * Function to redirect to the homepage when a project is submitted.
 */
function redirect() {
    window.location.replace("index.html");
    return false;
}

/**
 * Function to get the query string from the search bar address. 
 */

function queryString() {

    var qs = window.location.search.substr(1)

    return qs;
}

/**
 * Function to initiate the firebase application.
 */
function firebaseInit() {
    var config = {
        apiKey: "AIzaSyBTzDuqYvzp6w4I236Ymie1eR_a0cM60hg",
        authDomain: "ttdataarchitecture.firebaseapp.com",
        databaseURL: "https://ttdataarchitecture.firebaseio.com",
        projectId: "ttdataarchitecture",
        storageBucket: "gs://ttdataarchitecture.appspot.com",
        messagingSenderId: "868370223403"
    };
    // App initialization
    const app = firebase.initializeApp(config);

    return app;
}
var config = {
            apiKey: "AIzaSyBTzDuqYvzp6w4I236Ymie1eR_a0cM60hg",
            authDomain: "ttdataarchitecture.firebaseapp.com",
            databaseURL: "https://ttdataarchitecture.firebaseio.com",
            projectId: "ttdataarchitecture",
            storageBucket: "",
            messagingSenderId: "868370223403"
        };
    firebase.initializeApp(config);


/**
 * Function to write data to the Firebase Database based on the user input
 */
function writeUserData() {

    //Form reference
    const f = ev.target
    const name = f.projectName.value
    const id = f.projectId.value
    const type = f.projectType.value
    const date = f.projectDate.value
    const city = f.projectCity.value
    const state = f.projectState.value
    const zip = f.projectZipCode.value

    //writes data to the database
    firebase.database().ref('projects/' + projectId).set({
        projectName: name,
        projectId: id,
        projectType: type,
        projectDate: date,
        projectCity: city, 
        projectState: state,
        projectZipCode: zip,

    });

    // redirect();
}
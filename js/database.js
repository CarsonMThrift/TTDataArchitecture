  // Set the configuration for your app
  // TODO: Replace with your project's config object
  function firebaseInit(){
    var config = {
      apiKey: "AIzaSyB1GbnmSS0C1HcTuJNtZWhQbUiJOkqtD0s",
      authDomain: "ttdataproject.firebaseapp.com",
      databaseURL: "https://ttdataproject.firebaseio.com/",
      projectId: "ttdataproject",
      storageBucket: "gs://ttdataproject.appspot.com/",
      messagingSenderId: "994504062766"
    };

    const app = firebase.initializeApp(config);

    return app;
  }
  // Get a reference to the database service
  // const db = firebase.database().ref();

/**
 * Function to load all of the stored projects for user access on main page.
 */
function filterFuncAdvanced() {

    // Get a database reference to our posts
    var db = firebase.database();
    var ref = db.ref("Projects/");

    // Attach an asynchronous callback to read the data at our posts reference
    ref.on("value", function (snapshot) {

        // Loop through all children in the current snapshot of projects/
        snapshot.forEach(function (child) {

            var a = document.createElement("a");
            var list = document.getElementById("results")
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

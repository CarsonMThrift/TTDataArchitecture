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

var ref = firebase.database().ref('Projects');

console.log(ref);

  // Set the configuration for your app
  // TODO: Replace with your project's config object
  var config = {
    apiKey: "AIzaSyB1GbnmSS0C1HcTuJNtZWhQbUiJOkqtD0s",
    authDomain: "ttdataproject.firebaseapp.com",
    databaseURL: "https://ttdataproject.firebaseio.com/",
    storageBucket: "ttdataproject.appspot.com"
  };
  firebase.initializeApp(config);

  // Get a reference to the database service
  const db = firebase.database();

  
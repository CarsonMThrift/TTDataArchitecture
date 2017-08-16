# TTDataArchitecture
This repo is a project for Thompson Thrift Development to keep track of all projects/developments involving Thompson Thrift.

# Helpful Links 

Firebase Console:
https://console.firebase.google.com/project/ttdataarchitecture/overview

Firebase Web Documentation:
https://firebase.google.com/docs/web/setup

# Setup 

This project depends on certain NPM modules and Firebase tools in order to function. If you are planning to clone this project, please run the following commands within the proper repository:

  `npm install`
  
  `npm install -g firebase-tools`
  
  `firebase init`
  
  `firebase deploy`
  
  
 This project can then be served on a local host of your choosing using the command:
 
  `firebase serve`
  
  
  # General Notes
  
  ## Styling
  
  Most of the pages take from the css file 'index.css'. This was to keep the styling consistent among the buttons and header throughout the pages. 
  
  ## Firebase
  
  ### Storage
  This project was setup with a Firebase database as well as a Firebase storage bucket. The database currently stores all of the project information and the storage bucket stores all of the extra files such as images, documents, etc. In each instance, the project are stored under their unique project ID as inputed by the user. 
   
  ### Editing
  In order to allow editing, the user is allowed to edit a projects page. If the user changes anything except the project ID, the project's information is written over. If the user changes the project ID, an entire new project is created and the information written on that new project. The old project is then deleted to avoid duplicates.
    
   ### Routing 
   The application is currently passing the project ID from whatever LI the user clicks on from the main screen through the project URL. This ID then is used to find the correct project in Firebase.
  

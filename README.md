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
  
  ## Firebase
  
   This project was setup with a Firebase database as well as a Firebase storage bucket. The database currently stores all of the project information and the storage bucket stores all of the extra files such as images, documents, etc. In each instance, the project are stored under their unique project ID as inputed by the user. 
  

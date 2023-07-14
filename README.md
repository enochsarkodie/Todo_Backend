
# TodoApp_Backend

For my amalitech entry project, i had to build a todo app as a full stack developer. This is the backend side of my project. I used express in nodejs. The entry point is the app.js, where the server runs on the localhost port 8000. I learnt nodejs and express from scratch in order to build this project so I had to take my time in order to deliver.
This is an MVC(models,view and controllers) architecture. Where the models is where I wrote the database schema. This is a todo app so i used only two fields that is the TODO itself(title) that is a string and the status being a boolean. Based on whether the task has been completed or not.
Controllers is where the functions are called. Its where we do all the CRUD(create,read,update,delete) operations. We also filter based on whether the task is still active or not.
The view has to do with the frontend side.Where the user interaction usually takes place. The following are the files and brief note;
Controllers: Contains all the functions we need in order to interact with our backend
Middleswares: I used middlewares for my error handling. Especially when the error is beyond my control so that the built in modules would take. I also used another middleware in my App.js to handle the routes.
Routes: links that is used to access the server
.env: contains the port number where we call it in the app.js
constants: this is where i defined my status codes for proper error handling.
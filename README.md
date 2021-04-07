# A No SQL Workout Tracker

Uses MongoDB and express to keep track of logged workouts.

## Table of Contents

- [Installation](#Installation)
- [Usage](#Usage)
- [Credits](#Credits)

## Installation

For visiting the site and testing its functions, please visit the [Heroku Link](https://stormy-cliffs-72772.herokuapp.com/?id=606cf35b2a7326001516e0d2)

For local usage, please follow these instructions:
* Clone the repository onto your local machine.
* Open terminal/Git Bash and navigate to the cloned repo.
* Type 'npm i' in the terminal and press enter.
* Optional Step: Type 'npm run seed' and press enter. This will seed the database with sample data.
* Start the application by running 'npm start'
* Open your browser and navigate to 'localhost:8080' (or your preffered port, which can be changed in the server.js file)

## Usage

This app can be used to log various workouts, track total duration and lbs. lifted. 

To add a workout, simply press the New Workout button and input the required fields, then press complete. Once you have logged a few workouts, navigate back to the homepage. Click 'Dashboard' in the top left to see total stats.

## Credits

The front end of the application was built by another developer. I personally used the following Technologies:
* [Express](https://expressjs.com/)
* [MongoDB & MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
* [Node JS](https://nodejs.org/en/)
* [Mongoose](https://mongoosejs.com/)
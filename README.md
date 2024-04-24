# Overlook Hotel
## Setup: 
- Clone this repo with `git clone git@github.com:moth-dust/overlook-gwyneth.git` into your desired directory
- Clone the backend repo in the same directory as was used to clone the front end with `git@github.com:turingschool-examples/overlook-api.git` please reachout to me if this repository is no longer availible or depricated, I will provide the functioning api and update the README.
- Run `npm install` in both of the newly created directories.
- Run `npm start` in both of the newly created directories.
- Open any chromium browser and navigate to `http://localhost:8080/`
## Preview of the app running:

<img src='https://i.imgur.com/DOW7Gln.png' alt="app-preview">

## Context:
This project was created as part of a intermediate components of JS, CSS, and HTML course at Turing School of Software & Design. The goal of the project was to use all the topics covered in a single project. Unique to this project were utilizing a variety of fetch requests without the aid of async. This is a solo project, everything including the assets (other than the font) were created by the owner of this repository.

## Wins:
- I feel very proud of the reusability of functions via error handling in order to keep script length and repition in dom updating logic down.
- I feel proud of handling several sadpaths in testing in addition to happy ones.
- I feel proud of attempting testing on functions outside the scope of the project and that they worked until the final iteration.

## Challenges:
- Despite trying, I could not figure out a dynamic wait-time for a successful user login so as it currently stands one is simulated, though the error handling for a timeout and a new thrown error exist for this simulation.
- Though working up to the last version of the render functions, the final version broke the render tests and I did not have time to refactor them, which is technically fine as the tests were unneccessary, but still a defeat.
- Despite these two previous things not being stricly required, I spent a lot of time on them, which left very little in the way of non-functional CSS which was completed at the very wire of the due-date.

## Future-extentions:
I feel generally really proud of this project but would like to revisit the hurdles listed in the challenges when I have the time/knowledge to.

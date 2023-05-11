# Project - *Wordle_Game* 

**Wordle_Game** is a web-based word guessing game. Users can take multiple turns making guesses until guess the correct word. The game will display reminders if there is an invalid login or invalid guess, or other info like loading.

Submitted by: **Zhengrui Lu**

Time spent: **50** hours spent in total

## User Stories

The following functionality is completed:

* [X] User can **login with valid name**
* [X] User has the option to **logout** if the user is already logged in
* [X] User can **play the wordle game after log in**. A "new game" means a new secret word is selected, the number of guesses made is reset to 0, and the list of possible words is reset to the full list
* [X] User can see the **statistics about this user's previous games preserved** 
* [X] User can interact with the game page and get **reminders**. For example, **valid guess and the number of its matched letters, invalid guess, and correct guess** 
* [X] User can have **unlimited turns** to make a guess, and get **calculated score** once win. The score is decided by the number of turns this user uses.
* [X] User has the option to **start a new game** if the user is already logged

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='walkthrough_wordle_game_react.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with [LiceCap](http://www.cockos.com/licecap/).

## Tools

This sample involves both:

- an express server.js to host RESTFUL services and act as a static file server
- a create-react-app-based SPA built as static files that consume those services

* [X] Programming languages: JaveScript, CSS
* [X] Server Environment: Node.js
* [X] Node.js web application framework: Express
* [X] Front-end JavaScript library: React

## How to use this project

### Setup

- Run `npm install`

### Notice for Windows users

Where I say 'run `npm start`' you will need to run `npm run start-win`
- You can look at the differences in these package.json scripts
- There is a library (`cross-env`) that would resolve these differences, but we can see what is happening.  Out in the "Real World" I recommend using cross-env to write scripts that work on multiple operating systems.

### Running for development

- In a terminal, run `npm start` to start the express server
  - The "start" script in package.json was changed
- In a DIFFERENT terminal, run `npm run dev` to start the development CRA server
  - This runs what used to be the "start" script
  - You need BOTH servers running for development
- Visit localhost on port **3000** (the development server port)
  - Service calls will be proxied by the development server to the express server
    - The browser only ever makes service calls to port 3000 (the port of the page)

### Running for production

- In a terminal, run `npm run build` to create the static files in the `build/` directory
- In a terminal, run `npm start` to start the express server
  - The "start" script in package.json was changed
  - Only ONE server is running
- Visit localhost on port **4000** (the express server port)
  - You could run the express server on port 3000 since the development server isn't using it, but using the different port should reduce confusion
  - Service calls go directly to the express server on port 4000
    - The browser only ever makes service calls to port 4000 (the port of the page)
  
## Notes

Describe any challenges encountered while building the app.

* [X] Learn **debug** steps and find the exact error
* [X] Inspect error info from the browser's dev tool. For example, console and network
* [X] Make sure the data is **defined** before use it in the client-side
* [X] Try 3 different **HTTP methods** in a RESTful way
* [X] As soon as my **session** expires, guide the user to the login page. 
* [X] Improve the **UI / UX** with the dev tool Elements of the browser

## Future Development

* [ ] Add leaderboard for the game
* [ ] Add sharing button and link with social media
* [ ] Improve the game rules with more reminders and levels

## License

    Copyright [yyyy] [name of copyright owner]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.


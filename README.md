# Insta-like

In this project, I use a Node.js seed to build out Instagram-like web-app features. This is the Makers Academy week 8 weekend challenge. _Alexis Morcrette_

## The challenge

Build Instagram: Simple huh!

The challenge is to build Instagram using Node.js. I'll need users who can post pictures, write comments on pictures and like a picture. Style it like Instagram's website (or more awesome).

Bonus if I can add filters!

## Progress to date

As of Monday 16 May 2022:
- [x] As a user, so that my pictures and comments are ascribed to me, I want to set up a username for the app
- [x] As an app administrator, so that I can keep track of who the users are, I want to require a username, email and password on sign up.
- [ ] As a user, so that others can see the world through my eyes, I want to share my perspectives by posting pictures.
- [ ] Write comments on pictures
- [ ] Like pictures
- [ ] Styling
- [ ] Filters

_Note on posting pictures_: This features does not currently work, still in the process of debugging. See commit messages for log of progress. 

### Note on language

In the code base, images / pictures are referred to as 'perspectives'.

## Tech stack

It uses:

- [Express](https://expressjs.com/) web framework for Node.js.
- [Nodemon](https://nodemon.io/) to reload the server automatically.
- [Handlebars](https://handlebarsjs.com/) to render view templates.
- [Mongoose](https://mongoosejs.com) to model objects in MongoDB.
- [ESLint](https://eslint.org) for linting.
- [Jest](https://jestjs.io/) for testing.
- [Cypress](https://www.cypress.io/) for end-to-end testing.

## Card wall

REPLACE THIS TEXT WITH A LINK TO YOUR CARD WALL

## Quickstart

### Install Node.js

1. Install Node Version Manager (NVM)
   ```
   brew install nvm
   ```
   Then follow the instructions to update your `~/.bash_profile`.
2. Open a new terminal
3. Install the latest version of [Node.js](https://nodejs.org/en/), currently `18.1.0`.
   ```
   nvm install 18
   ```

### Set up your project

1. Fork this repository
2. Rename your fork to `acebook-<team name>`
3. Clone your fork to your local machine
4. Install Node.js dependencies
   ```
   npm install
   ```
5. Install an ESLint plugin for your editor. For example: [linter-eslint](https://github.com/AtomLinter/linter-eslint) for Atom.
6. Install MongoDB
   ```
   brew tap mongodb/brew
   brew install mongodb-community@5.0
   ```
   *Note:* If you see a message that says `If you need to have mongodb-community@5.0 first in your PATH, run:`, follow the instruction. Restart your terminal after this.
7. Start MongoDB
   ```
   brew services start mongodb-community@5.0
   ```

### Start

1. Start the server
   ```
   npm start
   ```
2. Browse to [http://localhost:3000](http://localhost:3000)

### Test

#### Start test server

The server must be running locally with test configuration for the
integration tests to pass.

```
npm run start:test
```

This starts the server on port `3030` and uses the `acebook_test` MongoDB database,
so that integration tests do not interact with the development server.

#### Running tests

- Run all tests
  ```
  npm test
  ```
- Run a check
  ```bash
  npm run lint              # linter only
  npm run test:unit         # unit tests only
  npm run test:integration  # integration tests only
  ```

## MongoDB Connection Errors?

Some people occasionally experience MongoDB connection errors when running the tests or trying to use the application. Here are some tips which might help resolve such issues.

- Check that MongoDB is installed using `mongo --version`
- Check that it's running using `brew services list`

If you have issues that are not resolved by these tips, please reach out to a coach and, once the issue is resolved, we can add a new tip!

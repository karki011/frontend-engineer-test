# About The Test
The frontend engineering test has been designed to be simple and straightforward, while providing a practical sample  of the kind of day-to-day work that happens inside the CloudZero platform.

We expect you to spend 1-2 hours on this exercise, and our goal is that it should be closer to 1 hour. We tell you this because we know you’re busy and we appreciate the time you’re spending to interview with us - so don’t feel like you need to set a timer for yourself (unless that helps you).

This test repository has been provided to you with a sample application, and you will be required to implement some additional functionality into the application.

## To get started

1) Fork this repository to your own Github account
2) In your fork, Create a new branch from `master`. When the test is complete, you will submit a Pull Request for this branch.
3) To start the application, simply run `npm start` from the root of the repository. This should start a local webpack development server at `http://localhost:3000`. When the app loads, you should see a page titled CloudZero Resource Advisor with a table of data displayed below.
4) When ready, submit your code to us by adding a CloudZero user to your forked repository.

## About the CloudZero Resource Advisor
The CloudZero Resource advisor is a real application inside our platform. It is designed to provide customers with basic pricing  information around AWS EC2 products. For this test, you will help add some basic features to the sample application that can display and filter this product information from a live web API endpoint.

## Criteria

The sample application provides you with the following:

1) A Typescript project (see notes about Typescript below).
2) A `create-react-app` application using React 17 (see below for details).
3) Stubbed files and components for completing the work.
4) [Bulma CSS](https://bulma.io/documentation/) for very simple page styles.

We want you to draw on your own experience and judgment when implementing these features. Please feel free to add libraries or change things as you see fit. We only have 2 technical requirements for your solution:

1) All code submitted must be written in Javascript or Typescript
2) You must use React as the app's component library.

## Instructions
Please complete the following steps in order.

1) Currently, the product table is receiving all of its data from a JSON file called `sample-data.json`.
   We would like to load this data from a mock API instead. Please execute the `npm run serve` command in your terminal to start the mock server and then implement a mechanism to send a GET request to: `http://localhost:8080/resources`.
   1) Consider using the (currently empty) `src/api` module to implement this logic.


2) It would be really nice if a user could filter the rows of the table based on some search criteria. Please add a search field above the table that will filter rows based on text input from the user.
   1) The solution should support partial matching for any piece of text in the table. For example, if I enter the string 'mpu', it should match the word 'Compute'.
   2) The search should match against ANY column of the table. To use the previous example, the string 'mpu' would  match 'Compute' in the Resource Type column and 'Accelerated Computing' in the Purpose column.
   3) Please try to make the search experience as pleasant for the user as possible while working within the time constraint. Perhaps the user doesn't want to see the table refreshing on every keystroke, or they might want to see a count of matched rows, or their search terms highlighted in the result. Again, use your best judgment, we don’t expect you to get to everything.

3) The user needs to be able to share links to the page that include the search value. When loaded, these urls prepopulate the field and filter the table listing.


## Using Typescript
We have provided you with a Typescript project because that is what we use a CloudZero. But please know **we are not evaluating your knowledge of Typescript**,
and writing typed Javascript is completely optional.
- You should be able to write plain Javascript inside `.ts` files, without needing to specify types.
- If you are creating React components, be sure to use the `.tsx` extension on files that contain JSX code
- We have provided some useful typings around the API data in `types.ts` -- this should be helpful in providing some autocompletion for data objects
- If you do prefer to work with Typescript, you may consider re-enabling the `strict` compiler flag in `tsconfig.json`



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm run serve`

Runs the mock API server\
Runs on `http://localhost:8080`

Supports `GET` calls at `http://localhost:8080/resources` .\
Returns a list of all available resources

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

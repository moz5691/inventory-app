##Food Store Inventory and Sales Management App:


___To start:___ 

create /config/googleConfig.js 

```javascript

module.exports = {
  apiKey: "your own",
  authDomain: "your own",
  databaseURL: "your own",
  projectId: "your own",
  storageBucket: "your own",
  messagingSenderId: "your own"
}
````


Authentication
- Google OAuth, redirect to Google for authentication.
- App pulls userId info and store it.

Database 
- Google Firebase Realtime DB
- Store item data set & user info

Storage
- Google Firebase Storage
- Store item photos
 
SW platform & packages
- React.JS
- Redux
- Chart.js
- Semantic-UI React

ScreenShots
## Table Page (sortable per each column)
![alt text](readme_pics/table.png)
## Edit Page
![alt text](readme_pics/edit.png)
## Chart Page
![alt text](readme_pics/chart.png)





This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


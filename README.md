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

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Challenge

This app renders a list of pictures using the [Flickr API](https://www.flickr.com/services/api/).

We would like you to:

- Implement pagination controls to display more pictures.
- Try not to spend more than 2 hours on this challenge
- We're looking for production ready code
- We would prefer a rock solid partial solution to a rushed complete solution
- Let us know what you would do next or things you would improve below

## Explainer

I've written custom Page and Pagination components to implement pagination of Flickr photos.
Given the time provided I've gone with a simple solution of previous/next buttons whilst displaying the current and last pages. Given more time, I'd ideally implement a more fully-fledged solution, allowing selection on an individual page, allowing more options in the pagination nav.

Other things I would do differently given more time:

- Setup and use Eslint config to ensure code is more consistent and reduce errors
- Use Typescript or at least Prop-Types to more user-friendly usage
- Add integration and e2es (for example, Cypress), particularly around pagination logic
- Structure components folder correctly, each with its own folder for tests and implementation
- Add a loading spinner for when fetching photos and render photos all at once instead of intermittently

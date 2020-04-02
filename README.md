This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

Start by installing all dependencies with: 

### `yarn install`

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## If I had more time
* I'd start with introducing react-redux for state managements. It's been a long time since I used 
just PLO-React for state updates and loading and such. 

* Also axios-mock-adapter should have been used to fake the request response.

* I'd use redux-persist to persist the repeated requests and such. It's just to whitelist the parts of 
the state and whola, everything is just reloaded with just some config with a store provider. I actaully 
don't know what part of the response to store here...I always store UI-state and such in local storage.
In the second thought, it could be nice to store it for mobile devices maybe. 

* Also, I love my lodash/fp, I'd include that to do some debouncing for infinite scroll, to load
more photos as scroll reached the document body. Didn't have time to write a nice setInterval and clearInterval
for this right now :(.

* I'd also add my favorite [material ui lib](https://material-ui.com/) :)

* I'd also check if the loaded images actually exist (e.g. no 404) as some returned.

* I'd create a page with more info for the given image. There where so much more to get out of their api.
E.g. using some kind of navigation.  

* Finally, I couldn't find a way to fake the response codes that flickr api documented. Therefore, a 
  a general error message is displayed when request fails 
  (I know it's ugly, but the user will get out of that state by searching again.)
  
#### Regarding styling
I love typestyle for css in js, it's a nice lib that also does the postcss processing and minifying etc.
  

## This was fun
I haven't even touched the flickr api before this assignment - good api to start and test user with!  
  
I really love to show you guys my react-typescript project that I have worked with in almost 3 years 
now at Elvaco AB.

Here are some resources and documentations from that project:

### Bundlers and module loaders

* [Parcel](https://parceljs.org/) - "Blazing fast, zero configuration web application bundler"
* [Fusebox](http://fuse-box.org/) - FuseBox "A bundler that does it right"

### React
* [Presentational and Container Components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0) - By Dan Abramov
* [Container Components](https://medium.com/@learnreact/container-components-c0e67432e005) - Container Component Pattern
* [React](https://facebook.github.io/react/) - UI library, superset of HTML together with smart rendering optimizations
* [Redux](http://redux.js.org/) - Predictable state container for JavaScript apps.
* [Redux-Thunk](https://github.com/gaearon/redux-thunk) - Thunk middleware for redux (async actions)
* [React Router](https://reacttraining.com/react-router/web/guides/philosophy) - Connects application to browser window's URL
* [Redux Auth Wrapper](https://mjrussell.github.io/redux-auth-wrapper/) - Decouple your Authentication and Authorization from your components
* [Reselect](https://github.com/reactjs/reselect) - Simple “selector” library for Redux
* [Recompose](https://github.com/acdlite/recompose) - Recompose is a React utility belt for function components and higher-order components. Think of it like lodash for React.
* [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) - React Developer Tools is a Chrome DevTools extension for the open-source React JavaScript library. 
* [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd) - Redux DevTools for debugging application's state changes.

### Other
* [typestyle](https://typestyle.github.io/#/) - Making CSS TypeSafe
* [Axios](https://github.com/mzabriskie/axios) - Promise based HTTP client for the browser and node.js
* [Jest](https://github.com/kulshekhar/ts-jest) - Test framework
* [normalizer](https://tonyhb.gitbooks.io/redux-without-profanity/content/normalizer.html) - API response that has nested resources and flatten them
* [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - A Complete Guide to Flexbox.
* [Lodash](https://lodash.com/docs/4.17.10) - A modern JavaScript utility library delivering modularity, performance & extras. 


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

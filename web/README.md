# Application for ordering products

Website of order pizza, salads, burgers and combo(3 pizza in 1 menu). You can: choose weight (two or three variants. It
depends on how to product you choose), choose quantity (from 1 to 25).

## How to install

- Clone this repository on your PC
- Run `yarn install`
- Run `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Structure

- **build** - application build
- **node_modules** - libraries
- **public** - static images, logo, icons
- **src** - source folder with necessary files for application
- **src/actions** - includes files with different types of events.
- **src/components** - *.js files that contains react components with some content
- **src/images** - includes default images, icons, logos app.
- **src/reducers** - specify how the application's state changes in response to actions sent to the store
- **src/services** - files that work with the network (make requests and get a response)
- **src/styles** - css styles for page
- **src/types** - includes the file with constants.

## Using frameworks

* [Ant-design](https://ant.design/) - For styling pages and elements
* [React JS](https://nextjs.org/) - A JavaScript library for building user interfaces
* [Redux JS](https://redux.js.org/) - A Predictable State Container for JS Apps

## Build with

* [Webpack](https://webpack.js.org/) - a static module bundler for JavaScript applications

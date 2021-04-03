# Application for ordering products

Website of order pizza, salads, burgers and combo (3 pizza in 1 menu). You can: choose weight (two or three variants. It
depends on how to product you choose), choose quantity (from 1 to 25). There is an option to add a product to cart. 
In the cart you can add or remove one product at a time. It is also possible to remove all products.

## Pictures
<p>
  <img src="https://raw.githubusercontent.com/FireRipper/Qiwi-Pizza/tree/master/docs/images/pic-1.png?raw=true" alt="Main" height="250px">
  <img src="https://raw.githubusercontent.com/FireRipper/Qiwi-Pizza/tree/master/docs/images/pic-2.png?raw=true" alt="Cards/dropbox" height="250px">
  <img src="https://raw.githubusercontent.com/FireRipper/Qiwi-Pizza/tree/master/docs/images/pic-3.png?raw=true" alt="Basket" height="250px">
  <img src="https://raw.githubusercontent.com/FireRipper/Qiwi-Pizza/tree/master/docs/images/pic-4.png?raw=true" alt="About us" height="250px">
  <img src="https://raw.githubusercontent.com/FireRipper/Qiwi-Pizza/tree/master/docs/images/pic-5.png?raw=true" alt="Contact" height="250px">
  <img src="https://raw.githubusercontent.com/FireRipper/Qiwi-Pizza/tree/master/docs/images/pic-6.png?raw=true" alt="Delivery" height="250px">
</p>

## How to install

- Clone this repository on your PC
- Go to `cd Qiwi-pizza`
- Run `sudo docker-compose up -d`
- Run `yarn start`

Runs the app in the development mode.<br />
Open [http://app.localhost](http://app.localhost) to view it in the browser.

### Structure

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
* [React JS](https://reactjs.org/) - A JavaScript library for building user interfaces
* [Redux JS](https://redux.js.org/) - A Predictable State Container for JS Apps

## Build with

* [Webpack](https://webpack.js.org/) - a static module bundler for JavaScript applications

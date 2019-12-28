# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### 0.1.1 (2019-12-28)


### Features

* **basket-order-product:** add component basket-order-product and component Button from total-cost-product move to component button-order-product ([04ad248](https://github.com/FireRipper/react-qiwi-pizza/commit/04ad248c88f82370a089b401b369e9e0b4a7b522))
* **button-order-product:** add function for button-order-product.js - onAddedToList. This function added to order-list new items(orders). ([bf860a8](https://github.com/FireRipper/react-qiwi-pizza/commit/bf860a8b65dd806407547e109bc0d0f1d012543c))
* **CardItems:** add new functions: handleChangeSelectItem, handleChangeInputNumber, updateTotalCost for change and display total cost product. ([91fe1f0](https://github.com/FireRipper/react-qiwi-pizza/commit/91fe1f0e0b201ade64cc6110b8f144a3837c2597))
* **images:** remove from project old pictures and add new pictures for future useful ([2b58bf5](https://github.com/FireRipper/react-qiwi-pizza/commit/2b58bf531b39dfe6de5f4ec78d3ed897a4e0fddf))
* **loader:** add - loading to reducer, status loading when content load, correct design in header.js ([b406a18](https://github.com/FireRipper/react-qiwi-pizza/commit/b406a18462086695cd8d0030e60d70e74a5157cb))
* **main-slider:** add slider on page with testing images and refactor some functions in qiwi-pizza-services ([0bc5400](https://github.com/FireRipper/react-qiwi-pizza/commit/0bc5400766e6df4b2a5479edc22e06f7f9b1d829))
* **order-list:** add updateCountAndTotalInList. This function check fields(currentValue, sm,md,lg(Price; Count)) and added or deleted 1 item to list: depending on the parameter 'quantity'. ([ee1cc75](https://github.com/FireRipper/react-qiwi-pizza/commit/ee1cc75bdcf32883eec4035a76e3b924e12b99fa))
* **order-list-reducer:** add - radio buttons to OrderListProducts, type UPDATE_VALUE_RADIO_BTN_IN_ORDER_LIST, action updateValueRadioBtnInOrderList. Add updateItemInList - when user switched radio button, value radio button change and wrote in field: currentValue(in state.orderList.list). Use on radio buttons(defaultValue={currentValue}) in component OrderListProducts. ([53eed8d](https://github.com/FireRipper/react-qiwi-pizza/commit/53eed8d04f5efb83dd7e5fbae9cbdb82dfea2552))
* **processing error, page 404:** add components - error-indicator, error-boundary. Use error-boundary in app.js. Add page - 404. ([e15a290](https://github.com/FireRipper/react-qiwi-pizza/commit/e15a2901fe86c969c946a254d4742c81adb9778c))
* **processing-error:** add - reject to Promise, catch to card-list-items, add action (PRODUCTS_ERROR), Its for processing error, when products have not received. Add display error-indicator when catch error. ([18d1197](https://github.com/FireRipper/react-qiwi-pizza/commit/18d1197bad79ec37e64f5fbfa004cffe334a4658))
* **product-reducer, product-actions:** remove fields - selectedNumberValue, totalCost, defaultCost, selectValue from initialState. Add new field chooseMenu with empty array. Add new cases to reducer FILL_ARRAY_CHOOSE_MENU, CLEAR_ARRAY_CHOOSE_MENU. Add new - types and actions (fillArrayChooseMenu, clearArrayChooseMenu). ([b30af2e](https://github.com/FireRipper/react-qiwi-pizza/commit/b30af2e969c217d769a8e42251a2e1808cdf6971))
* **remove product from order-list:** rename function addedToListProducts => addProductToList, add removeProductFromList, check item and change counts to 0, and remove item from array. ([9a7b666](https://github.com/FireRipper/react-qiwi-pizza/commit/9a7b666425142a443fd43ba5cd64a0f5bc551542))
* **update totalPrice:** change in orderList.total => orderList.totalPrice. Add updateTotal. This function check length array. Then summary all value field 'total' in state.orderList.list and write total value in totalPrice and display in component OrderListProducts ([e94b97c](https://github.com/FireRipper/react-qiwi-pizza/commit/e94b97c840da163862c84a7b05c9784d2b920caa))
* add - product-reducer, product-actions, add product-service-context(create provider, consumer for services), connect index.js from store. Add hoc with-product-service - component which connect (wrapped components) with services (example: product-service). ([2c30b16](https://github.com/FireRipper/react-qiwi-pizza/commit/2c30b16b5e1ba222ff4d1585e9cc94b15b5ddac2))
* change structure data in data.js - add new fields (oneCost, oneWeight, doubleCost, doubleWeight) for _combination, _buggets. Change transform-data.js. Add function renderChoose in choose-weight-product.js. In card-list-items.js get data from data.js for products (Combination and Buggets) ([2983335](https://github.com/FireRipper/react-qiwi-pizza/commit/29833355a06f1db70b9dc9afdd9c9461cd27c306))
* **qiwi-pizza-services:** add services, add functions for fetching data from json files ([d841c6b](https://github.com/FireRipper/react-qiwi-pizza/commit/d841c6b6ed7e32685fd6bbbe5986bb88b1e82235))
* **redux:** add packages redux, react-redux for future changes, add basic folders and files. ([736f629](https://github.com/FireRipper/react-qiwi-pizza/commit/736f629e2c83d4f93f921b30754915541207e1c0))
* **selectQuantityProduct:** add new - actionType: SELECT_QUANTITY_PRODUCT, action: selectQuantityProduct, case: SELECT_QUANTITY_PRODUCT and functions updateChooseMenu(return new value fields), generateChooseMenu(return array). Add function onSelectQuantity to choose-quantity-product.js. Case SELECT_QUANTITY_PRODUCT: updated fields(selectedNumberValue and totalCost) in array chooseMenu and this changes display in app. ([1144099](https://github.com/FireRipper/react-qiwi-pizza/commit/11440997eaf9b7844c3cba0b336e7ab2acfcfc35))
* **selectWeightProduct:** add new actionType SELECT_WEIGHT_PRODUCT, add function 'onSelect' to choose-weight-product. It's function for update fields(selectedNumberValue, totalCost and defaultCost) in array chooseMenu. When user select new weight product updated fields and display on app. ([889758b](https://github.com/FireRipper/react-qiwi-pizza/commit/889758b9a57f69b2c4fa7512fe9d4e02cf24bc62))
* **web:** all files from react-qiwi-pizza move to => folder web ([4cde658](https://github.com/FireRipper/react-qiwi-pizza/commit/4cde65827a81285dc1ff2b60e5685323febff1d2))
* add content for delivery page and change color scrollbar-thumb ([300f7e7](https://github.com/FireRipper/react-qiwi-pizza/commit/300f7e75c089bbc7dc1cb64117ac7757bf1c9374))
* add header, logo, menu ([973e5ca](https://github.com/FireRipper/react-qiwi-pizza/commit/973e5cafa963052fb7022d9580e782531ce4670e))
* add page about us, add content for page, add response design for contact and about pages ([2c14501](https://github.com/FireRipper/react-qiwi-pizza/commit/2c14501ea761a2138647b9a364bfadb523315b46))
* add page contact and add content to page ([5c6d64f](https://github.com/FireRipper/react-qiwi-pizza/commit/5c6d64f04225196b6547ebf287090b34d5f9c132))
* add routing on pages, delete callback page. ([c3cc10c](https://github.com/FireRipper/react-qiwi-pizza/commit/c3cc10cc7fbbca8461b332ee4b5bab870f4351b4))


### Bug Fixes

* **handlebars:** upgrade from 4.3.0 => to ^4.3.0 ([9e43aee](https://github.com/FireRipper/react-qiwi-pizza/commit/9e43aeec0d3ba792419d85e81385984cba0d1f8c))
* **loader:** add - action (PRODUCTS_REQUESTED), loading when user goes to page Home, display loader instead products, ([bc9e3ac](https://github.com/FireRipper/react-qiwi-pizza/commit/bc9e3ac5e4026a22164debb64bc753dbc0b25db3))
* **order-list:** user clicked on btn addToOrderList - wasn't choose weight and quantity === 1 and more, so product was added to order-list with incorrect ID and then this action call error and app crashed. ([1fc55ab](https://github.com/FireRipper/react-qiwi-pizza/commit/1fc55abcb94536cb7f4130393e2818b5b7126aec))
* correct design on header, pages - about, delivery ([91a9e12](https://github.com/FireRipper/react-qiwi-pizza/commit/91a9e127482c53bb15c3afe49a924e9ade754d72))
* update total-cost-product.js ([6c20193](https://github.com/FireRipper/react-qiwi-pizza/commit/6c20193c8497f0a72f17cbf5fc0bab410fba4b3e))
* **yarn.lock:** upgrade yarn packages ([2bcb450](https://github.com/FireRipper/react-qiwi-pizza/commit/2bcb4506d5210ce38f77a0783a08bc55d6157322))
* fix potential security vulnerability, upgrade serialize-javascript to ver 2.1.1 ([0a4f89a](https://github.com/FireRipper/react-qiwi-pizza/commit/0a4f89a723138331f36653e3e387a83343d6063c))
* **CardItems:** add clear input number when change select, display correct value in rows ([2d94a30](https://github.com/FireRipper/react-qiwi-pizza/commit/2d94a30c1965660ebb8f00f62e218b01d367cada))
* **change name folders:** rename all folders and files, write correct path to this files and delete unnecessary folder with files, delete slider-images ([c798d41](https://github.com/FireRipper/react-qiwi-pizza/commit/c798d417fab273409f7fef5f1c6227086a557c25))

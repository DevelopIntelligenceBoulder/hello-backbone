# hello-backbone
A simple example of Hello World written with [Backbone](http://backbonejs.org/).

##What is this?
This example shows how to utilize a Backbone model property within a Backbone view.

### Within the js/main.js
The application namespace is created. It is a simple JavaScript namespace that the Backbone architecture will be attached too.

### Within the js/hello-model.js
The Backbone model object is extended to define the Hello model. It contains a default `place` property.

### Within the js/hello-view.js
The Backbone view object is extended to define the Hello view. The Hello view creates stringified HTML with the `place` model property. The stringified HTML is rendered within the DOM. 

### Within the js/bootstrap.js
The Backbone model is instantiated and handed to the Backbone view. The Backbone view is instantiated and rendered into the DOM.

### Within the index.html
The index.html contains the Backbone application element, just a plain old HTML element. In this case a `<div id="app">`. 

## Instructions
1. Install [NodeJS](https://nodejs.org/)
2. Run `npm start` to get the application running on the web server
    * Packages needed for this application will be installed (i.e. jQuery, Underscore, Backbone & Express)
    * The Node/Express Web Server will start
3. Go to `http://localhost:8080/src/` in your web browser

##Where to go from here?
[DevelopIntelligence](http://www.developintelligence.com/) offers a variety of [classes on JavaScript](http://www.developintelligence.com/catalog/web-development-training/core-javascript). Check out the [Backbone class](http://www.developintelligence.com/catalog/web-development-training/backbonejs/backbonejs) or the [Advanced JavaScript class](http://www.developintelligence.com/catalog/web-development-training/core-javascript/advanced-javascript) to get your team up to speed.
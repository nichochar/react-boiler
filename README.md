# Boilerplate React app

This is a boiler plate Javascript React single page application, with a test framework, routing, and a bunch of sensible configs all ready.
It is based on [a great, but rather long fullstack tutorial](https://www.fullstackreact.com/articles/react-tutorial-cloning-yelp/)

### Installation
```bash
git clone https://github.com/nichochar/react-boiler.git my_app_name
cd my_app_name
npm install
npm start  # runs the dev app on port 3000
npm test  # runs the tests both in PhantomJS and real chrome browser (port 9876)
```

### Commands
 * run devserver with `npm start`
 * run tests with `npm test`

### Technologies

* **babel** as a js compiler (use new syntax of ES6, compile to supported js)
* **karma** for running the tests
* **chai** for expectations
* **mocha** as a test framework
* **enzyme** as a react testing helper
* **sinon** as a spy, stub and moch framework

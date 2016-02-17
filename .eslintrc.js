module.exports = {
  "extends": "airbnb",
  "env": {
    "commonjs": true,
    "amd": true
  },
  "rules": {
    "quotes": 0,                // it wants single quotes instead of manly double quotes
    "comma-dangle": 0,          // it wants the last item in an array to have a comma on it
    "prefer-arrow-callback": 0, // ES6 stuff
    "no-var": 0,                // ES6 stuff (doesnt like vars)
    "object-shorthand": 0,      // ES6 stuff
    "func-names": 0,            // it doesn't like anonymous functions
    "prefer-template": 0,       // ES6 stuff
    "radix": 0,                 // it wants us to explicty say base 10 in parseInt/parseFloat
    "dot-notation": 0,          // it wants object.thingy as opposed to object["thingy"]
    "no-else-return": 0,        // can't put returns in the middle of functions (e.g. if statements)
    "vars-on-top": 0,           // all vars must be defined at the top of the file
    "no-new": 0,                // it wants you to assign something if you use new, e.g. var thing = new Thingy()
    "no-param-reassign": 0,     // it wants to disallow you from editing vars that are passed in
    "one-var": 0                // it wants one variable per var
  }
};

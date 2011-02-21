// python 020.py generates the factorial number that is passed in because python does long numbers and JS doesn't
// usage: python 020.py | node 020.js -in
require('./common/euler').run(function (input) {
    return input.split('').reduce(function (acc, val) {return +val + acc;}, 0);
});
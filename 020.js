// python 020.py generates the factorial number that is passed in via the -in argument
// because python does long numbers and JS doesn't
require('./common/euler').run(function (input) {
    return input.split('').reduce(function (acc, val) {return +val + acc;}, 0);
});
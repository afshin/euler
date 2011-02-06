require('./common/euler').run(function (input) {
    return input.split('\n').reduce(function (acc, val) {return +val + acc;}, 0).toString().substring(0, 11);
});
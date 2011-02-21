require('./common/euler').run(function () {
    var euler = this;
    return euler.permutations([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])[999999];
});
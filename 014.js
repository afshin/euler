require('./common/euler').run(function () {
    var euler = this;
    return euler.range(13, 1000000).reduce(function (acc, val) {
        var current = val, length = 1;
        while (current > 1 && length++) current = current % 2 ? (3 * current) + 1 : current / 2;
        return length > acc.length ? {length: length, value: val} : acc;
    }, {length: 0, value: 0}).value;
});
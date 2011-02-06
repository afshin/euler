require('./common/euler').run(function () {
    var known = {},
        paths = function (x, y) {
            if (x === 1 || y === 1) return x + y;
            var key = x + ',' + y, alt_key = y + ',' + x;
            if (key in known) return known[key];
            return known[key] = known[alt_key] = paths(x - 1, y) + paths(x, y - 1);
        };
    return paths(20, 20);
});
require('./common/euler').run(function () {
    var euler = this;
    Array.prototype.flatten = function () {return this.reduce(function (acc, val) {return acc.concat(val);}, []);};
    Array.prototype.unique = function () {
        return Object.keys(this.reduce(function (acc, val) {return (acc[val + ''] = null), acc;}, {}));
    };
    var regular_subsets = function (arr) {
        var available = arr.reduce(function (acc, val, idx) {return (acc[val] = idx), acc}, {}),
            len = arr.length, diffs = arr.reduce(function (a, x, i) {
                return a.concat(arr.slice(i + 1).map(function (y) {return y - x;}))
            }, []).unique().map(Number);
        return diffs.map(function (diff) {
            return arr.map(function (val) {
                var subset = euler.range(val, arr[len - 1], diff)
                    .filter(function (val) {return val in available;})
                    .reduce(function (acc, val, idx) {
                        return 0 === idx || diff === val - acc[acc.length - 1] ? acc.concat(val) : acc;
                    }, []);
                if (subset.length > 2) return subset;
            }).filter(Boolean);
        }).flatten().filter(Boolean);
    };
    return euler.range(1000, 9999)
        .map(function (base) {return (base + '').split('').sort().join('');}).unique().map(function (key) {
            return euler.permutations(key.split('')).map(Number)
                .filter(function (x) {return x > 1000;})
                .unique().map(Number).sort().filter(euler.is_prime);
        }).filter(function (arr) {return arr.length > 2;})
        .map(regular_subsets).flatten().filter(function (subset) {return subset.length > 2;}).join('\n');
});
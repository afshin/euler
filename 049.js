require('./common/euler').run(function () {
    var euler = this, start = 1000, end = 9999;
    Array.prototype.flatten = function () {return this.reduce(function (acc, val) {return acc.concat(val);}, []);};
    Array.prototype.unique = function () {
        return Object.keys(this.reduce(function (acc, val) {return (acc[val + ''] = null), acc;}, {}));
    };
    var regular_subsets = function (arr) {
        var available = arr.reduce(function (acc, val, idx) {return (acc[val] = idx), acc}, {});
        return arr.reduce(function (a, x, i) {
                return a.concat(arr.slice(i + 1).map(function (y) {return y - x;}))
            }, [])
            .unique().map(Number).map(function (diff) {
                return arr.map(function (val) {
                    return euler.range(val, arr[arr.length - 1], diff)
                        .filter(function (val) {return val in available;})
                        .reduce(function (acc, val, idx) {
                            return 0 === idx || diff === val - acc[acc.length - 1] ? acc.concat(val) : acc;
                        }, []);
                }).filter(function (subset) {return subset.length > 2;});
        }).flatten();
    };
    return euler.range(start, end)
        .map(function (base) {return (base + '').split('').sort().join('');}).unique().map(function (base) {
            return euler.permutations(base.split('')).map(Number).filter(function (val) {return val > start;})
                .unique().map(Number).sort().filter(euler.is_prime);
        }).filter(function (arr) {return arr.length > 2;}).map(regular_subsets).flatten().join('\n');
});
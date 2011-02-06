var print = require('sys').print, fs = require('fs'), path = require('path');

// array tail-recursive binary search with customizable comparator
Array.prototype.search = function (value, fn, low, high, mid) {
    if (high < low) return ((low === 0) ? -0.1 : -1 * low);
    var comparator = fn || function (x) {return value - x;};
    if (arguments.length < 5) return this.search(value, fn, 0, this.length - 1, Math.floor((this.length -  1) / 2));
    var potential = comparator(this[mid]);
    if (potential > 0) return this.search(value, comparator, mid + 1, high, Math.floor((mid + 1 + high) / 2));
    if (potential < 0) return this.search(value, comparator, low, mid - 1, Math.floor((low + mid - 1) / 2))
    return mid;
};

Array.prototype.insert = function (value) { // assumes sorted array, returns new array
    var index = Math.abs(this.search(value));
    return this.slice(0, index).concat(value).concat(this.slice(index, this.length));
};

Array.prototype.sum = function () {
    return this.reduce(function (acc, i) {return acc + (i || 0);}, 0);
};

exports.debug = function (x) {
    print('[debug] ' + x + '\n');
};

exports.divisors = function (num) {
    var divisors = [1, num], limit = Math.sqrt(num) + 1, lcv;
    for (lcv = 2; lcv < limit; lcv += 1) if (0 === num % lcv) divisors.push(lcv, num / lcv);
    return divisors;
};

exports.is_prime = (function () {
    var memo = {0: false, 1: false, 2: true};
    return function (num) {
        if (num in memo) return memo[num];
        if (0 === num % 2) return memo[num] = false;
        for (var lcv = 3; Math.floor(num / lcv) + 2 > lcv; lcv += 2)
            if (num % lcv === 0) return memo[num] = false;
        return memo[num] = true;
    };
})();

exports.permutations = (function () {
    /* use with a sorted array if you want numbers in order */
    var permutations = function (arr, depth) {
        var lcv, len = arr.length, depth = depth || len;
        if (len === 0) return [];
        if (len === 1) return [arr[0]];
        for (lcv = 0, result = []; lcv < depth; lcv += 1)
            permutations(arr.slice(0, lcv).concat(arr.slice(lcv + 1, len))).map(function (p) {
                result.push(+[arr[lcv], p].join(''));
            });
        return result;
    };
    return permutations;
})();

exports.range = function (start, end) {
    var result = [], lcv;
    if (start > end) throw new RangeError('start cannot be larger than end');
    for (lcv = start; lcv < end + 1; lcv += 1) result.push(lcv);
    return result;
};

exports.run = function (fn) {
    var time_start, result, time_end, data_file, run;
    data_file = process.argv[1].replace(/\.js$/gi, '.txt');
    run = function (data) {
        time_start = Date.now();
        result = fn.apply(exports, data);
        time_end = Date.now();
        print(result + '\nIt took ' + (time_end - time_start) + ' ms\n');
    };
    path.exists(data_file, function (exists) {
        if (!exists) return run(null);
        fs.readFile(data_file, 'utf-8', function (err, data) {run([data]);});
    });
};
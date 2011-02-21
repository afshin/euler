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
    var divisors = [1, num], limit = Math.floor(Math.sqrt(num)) + 1, lcv, temp;
    for (lcv = 2; lcv < limit; lcv += 1){
        if (0 !== num % lcv) continue;
        temp = num / lcv;
        if (temp === lcv) divisors.push(lcv); else divisors.push(lcv, temp);
    };
    return divisors;
};

exports.proper_divisors = function (num) {
    // *exactly* like exports.divisors except it does not include the number itself
    var divisors = [1], limit = Math.floor(Math.sqrt(num)) + 1, lcv, temp;
    for (lcv = 2; lcv < limit; lcv += 1){
        if (0 !== num % lcv) continue;
        temp = num / lcv;
        if (temp === lcv) divisors.push(lcv); else divisors.push(lcv, temp);
    };
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
        var len = arr.length, first, rest, result, lcv;
        if (len === 0) return [];
        if (len === 1) return [arr.join('')];
        result = [];
        for (lcv = 0; lcv < (depth || len); lcv += 1){
            first = arr[lcv];
            rest = arr.slice(0, lcv).concat(arr.slice(lcv + 1, len));
            rest = rest.sort(function (a, b) {return a - b;});
            permutations(rest).map(function (permutation) {result.push([first, permutation].join(''));});
        };
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
    var time_start, result, time_end,
        data_file = process.argv[1] && process.argv[1].replace(/\.js$/gi, '.txt'),
        use_stdin = process.argv[2] && process.argv[2] === '-in',
        stdin = function () {
            var data = [];
            process.stdin.resume();
            process.stdin.setEncoding('utf-8');
            process.stdin.on('data', function (chunk) {data.push(chunk);});
            process.stdin.on('end', function () {run(data);});
        },
        run = function (data) {
            time_start = Date.now();
            result = fn.apply(exports, data);
            time_end = Date.now();
            print(result + '\nIt took ' + (time_end - time_start) + ' ms\n');
        };
    if (use_stdin) return stdin();
    if (!data_file) return run(null);
    path.exists(data_file, function (exists) {
        if (!exists) return run(null);
        fs.readFile(data_file, 'utf-8', function (err, data) {run([data]);});
    });
};
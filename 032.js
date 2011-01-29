var euler = require('./common/euler');
var main = function(){
    var starting_array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    /* use with a SORTED array */
    var permutations = function(arr){
        var len = arr.length;
        if (len === 0) return [];
        if (len === 1) return [arr[0]];
        for (var lcv = 0, result = []; lcv < len; lcv += 1)
            permutations(arr.slice(0, lcv).concat(arr.slice(lcv + 1, len))).map(function(p){
                result.push(+[arr[lcv], p].join(''));
            });
        return result;
    };
    var matches = {};
    var test = function(multipliers, product){
        var name = multipliers.concat(product).join('-');
        if (name in matches) return;
        var a = +multipliers[0]; b = +multipliers[1], c = +product;
        if (c === a * b) matches[name] = c;
    };
    euler.debug('creating pandigitals');
    var pandigitals = permutations(starting_array);
    euler.debug('pandigitals created, length: ' + pandigitals.length);
    euler.debug('checking each for potential matches');
    pandigitals.map(function(num){
        var str = num + '';
        var a, b, c, name, i, j;
        c = str.slice(5, 9);
        for (i = 1; i < 5; i += 1){
            a = str.slice(0, i);
            b = str.slice(i, 5);
            test([a, b].sort(), c);
        };
    });
    euler.debug('done checking.');
    var sum = 0, products = {}, temp;
    for (var match in matches){
        temp = matches[match];
        if (!(temp in products)){
            products[temp] = null;
            sum += temp;
        };
    };
    return 'answer is: ' + sum;
};
euler.run(main);
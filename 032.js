require('./common/euler').run(function () {
    var euler = this, starting_array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var matches = {};
    var test = function (multipliers, product) {
        var name = multipliers.concat(product).join('-');
        if (name in matches) return;
        var a = +multipliers[0]; b = +multipliers[1], c = +product;
        if (c === a * b) matches[name] = c;
    };
    euler.permutations(starting_array).map(function (str) {
        var a, b, c, name, i, j;
        c = str.slice(5, 9);
        for (i = 1; i < 5; i += 1){
            a = str.slice(0, i);
            b = str.slice(i, 5);
            test([a, b].sort(), c);
        };
    });
    var sum = 0, products = {}, temp;
    for (var match in matches){
        temp = matches[match];
        if (!(temp in products)){
            products[temp] = null;
            sum += temp;
        };
    };
    return 'answer is: ' + sum;
});
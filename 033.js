require('./common/euler').run(function () {
    var shallow_clone = function (obj) {
        var result = {};
        for (var name in obj) result[name] = obj[name];
        return result;
    };
    var format = function (arr) {
        return '(' + arr[0] + '/' + arr[1] + ')';
    };
    var dig_to_hash = function (str) {
        return (str + '').split('').reduce(function (acc, item) {
            acc[item] = +item;
            return acc;
        }, {});
    };
    var first_value = function (hash) {
        for (var item in hash) return hash[item];
    };
    var acceptable = function (num, den) {
        var num_dig = dig_to_hash(num), den_dig = dig_to_hash(den), clone_num, clone_den, answer = num / den;
        for (var dig in num_dig){
            if (!(dig in den_dig)) continue;
            clone_num = shallow_clone(num_dig);
            clone_den = shallow_clone(den_dig);
            delete clone_num[dig];
            delete clone_den[dig];
            if (first_value(clone_num) / first_value(clone_den) === answer) return true;
        };
        return false;
    };
    var is_trivial = function (a, b) {
        return 0 === a % 10 && 0 === b % 10;
    };
    var i, j, results = [];
    for (i = 99; i > 9; i -= 1){
        for (j = i - 1; j > 9; j -= 1)
            if (acceptable(j, i) && !is_trivial(j, i)) results.push([j, i]);
    };
    var product = results.reduce(function (acc, val) {return [val[0] * acc[0], val[1] * acc[1]];}, [1, 1]);
    return results.map(format).join('\n') + '\nanswer is: ' + (product[1] / product[0]);
});
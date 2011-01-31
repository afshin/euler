require('./common/euler').run(function(){
    var euler = this, max = 1000000;
    var outright_cancel = function(base){
        var dig_hash = (base + '').split('').reduce(function(acc, dig){acc[dig] = null; return acc;}, {});
        return '0' in dig_hash || '2' in dig_hash || '4' in dig_hash || '5' in dig_hash || '6' in dig_hash || '8' in dig_hash;
    };
    var is_circular_prime = function(base){
        var revolutions = [], digits = (base + '').split(''), lcv;
        for (lcv = 0, len = digits.length; lcv < len; lcv += 1){
            digits.push(digits.shift());
            revolutions.unshift(digits.join('') - 0);
        };
        return revolutions.map(euler.is_prime).reduce(function(a, b){return a && b;}, true);
    };
    var result = [2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79, 97];
    for (var lcv = 100; lcv < max; lcv += 1)
        if (!outright_cancel(lcv) && is_circular_prime(lcv)) result.push(lcv);
    return result.length + ' answers';
});
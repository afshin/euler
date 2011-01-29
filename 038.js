var euler = require('./common/euler');
var main = function(){
    // find largest 9 digit pandigital whose written values equal {1, 2, ... n} * x
    // where n >= 2 and x is an integer
    var big_nums = euler.permutations([9, 8, 7, 6, 5, 4, 3, 2, 1], 1), lcv, len = big_nums.length;
    var is_match = function(num){
        return false;
    };
    for (lcv = 0; lcv < len; lcv += 1) if (is_match(big_nums[lcv])) return big_numbs[lcv];
    return 'you\'re doing it wrong'
};
euler.run(main);
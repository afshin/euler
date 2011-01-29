var euler = require('./common/euler');
var main = function(){
    var factorial = {0: 1, 1: 1, 2: 2, 3: 6, 4: 24, 5: 120, 6: 720, 7: 5040, 8: 40320, 9: 362880};
    var sum_of_digit_factorials = function(num){
        var digits = (num + '').split('');
        return digits.reduce(function(acc, digit){return acc + factorial[digit];}, 0);
    };
    var sum = 0, max = factorial['9'] * 7; // because it's less than 9999999
    for (var lcv = 3; lcv < max; lcv += 1)
        if (lcv === sum_of_digit_factorials(lcv)) sum += lcv;
    return 'answer is: ' + sum;
};
euler.run(main);
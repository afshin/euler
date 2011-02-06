require('./common/euler').run(function () {
    var euler = this, upper_bound = 28123 + 1, abundant_numbers = [], lcv;
    for (lcv = 2; lcv < upper_bound; lcv += 1)
        if (euler.proper_divisors(lcv).sum() > lcv) abundant_numbers.push(lcv);
    var abundant_numbers_hash = abundant_numbers.reduce(function (acc, num) {
        acc[num] = null;
        return acc;
    }, {});

    var not_sum_of_abundants = function (num) {
        var upper_bound = Math.ceil(num / 2) + 1;
        var lcv = 0;
        while (abundant_numbers[lcv] < upper_bound){
            if ((num - abundant_numbers[lcv]) in abundant_numbers_hash) return false;
            lcv += 1;
        };
        return true;
    };

    return euler.range(1, upper_bound).filter(not_sum_of_abundants).sum();
});
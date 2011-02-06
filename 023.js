require('./common/euler').run(function () {
    var euler = this, upper_bound = 28123 + 1, abundant_numbers = [], memo, lcv, not_sum_of_abundants;
    for (lcv = 2; lcv < upper_bound; lcv += 1)
        if (euler.proper_divisors(lcv).sum() > lcv) abundant_numbers.push(lcv);
    memo = abundant_numbers.reduce(function (acc, num) {
        acc[num] = null;
        return acc;
    }, {});
    not_sum_of_abundants = function (num) {
        var upper_bound = Math.ceil(num / 2) + 1, lcv = 0;
        while (abundant_numbers[lcv] < upper_bound) if ((num - abundant_numbers[lcv++]) in memo) return false;
        return true;
    };
    return euler.range(1, upper_bound).filter(not_sum_of_abundants).sum();
});
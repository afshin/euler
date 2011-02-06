require('./common/euler').run(function () {
    var euler = this,
        d = function (x) {return euler.proper_divisors(x).sum();},
        amicable = function (x, y) {return (d(x) === y) && (d(y) === x);},
        lcv = 2, curr = d(lcv), sum = 0, memo = {};
    while (lcv < 10000){
        if (lcv !== curr && !(curr in memo) && !(lcv in memo) && amicable(lcv, curr) && (memo[curr] = memo[lcv] = true))
            sum += lcv + curr;
        curr = d(++lcv);
    };
    return sum;
});
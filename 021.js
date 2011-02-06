require('./common/euler').run(function () {
    var euler = this,
        d = function (x) {
            var divisors = euler.divisors(x).sort(function (x, y) {return x - y;});
            divisors.pop();
            return divisors.sum();
        },
        are_amicable = function (x, y) {return (d(x) === y) && (d(y) === x);},
        lcv = 2, current = d(lcv), amicable_sum = 0, memo = {};
    while (lcv < 10000){
        if (lcv !== current && !(current in memo) && !(lcv in memo) && are_amicable(lcv, current)){
            amicable_sum += lcv + current;
            memo[current] = memo[lcv] = true;
        };
        current = d(++lcv);
    };
    return amicable_sum;
});
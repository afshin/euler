require('./common/euler').run(function () {
    var euler = this, current = 10, lcv = 5;
    while (euler.divisors(current).length < 500) current += lcv++;
    return current;
});
require('./common/euler').run(function () {
    var euler = this;
    return euler.divisors(600851475143).sort(function (a, b) {return a - b;}).filter(euler.is_prime).pop();
});
require('./common/euler').run(function () {
    var euler = this;
    return euler.range(0, 2000000).filter(euler.is_prime).sum();
});
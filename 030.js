require('./common/euler').run(function () {
    var euler = this, pow = Math.pow, digits, sum = 0,
        fifths = [0, 1, 32, pow(3, 5), pow(4, 5), pow(5, 5), pow(6, 5), pow(7, 5), pow(8, 5), pow(9, 5)];
    for (var lcv = 10; lcv < 1000000; lcv += 1)
        if ((lcv + '').split('').reduce(function (acc, i) {return acc + fifths[i];}, 0) === lcv) sum += lcv;
    return 'answer is ' + sum;
});
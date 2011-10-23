require('./common/euler').run(function () {
    var fraction = ['.'], lcv = 1, answer = 1, exp = 6, length = 1000000, push = Array.prototype.push;
    while (true) if (push.apply(fraction, ('' + lcv++).split('')) >= length) break;
    for (lcv = 0; lcv < exp; lcv += 1) answer *= +fraction[Math.pow(10, lcv)];
    return answer;
});
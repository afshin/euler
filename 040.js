require('./common/euler').run(function () {
    var fraction = ['.'], lcv, answer = 1, exp = 6, length = 1e6;
    for (lcv = 1; true; lcv += 1) if (Array.prototype.push.apply(fraction, (lcv + '').split('')) >= length) break;
    for (lcv = 0; lcv < exp; lcv += 1) answer *= +fraction[Math.pow(10, lcv)];
    return answer;
});
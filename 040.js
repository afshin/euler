require('./common/euler').run(function () {
    var fraction = ['.'], lcv, answer = 1;
    for (lcv = 1; true; lcv += 1) if (Array.prototype.push.apply(fraction, (lcv + '').split('')) >= 1000000) break;
    for (lcv = 0; lcv < 6; lcv += 1) answer *= +fraction[Math.pow(10, lcv)];
    return answer;
});
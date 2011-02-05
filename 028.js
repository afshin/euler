require('./common/euler').run(function () {
    var a = [1], b = [1], c = [1], d = [1], lcv, len;
    for (lcv = 3; lcv < 1002; lcv += 2) a.push(lcv * lcv);
    for (lcv = 1, len = a.length; lcv < len; lcv += 1){
        b[lcv] = a[lcv] - (4 * lcv);
        c[lcv] = b[lcv] - (2 * lcv);
        d[lcv] = c[lcv] + (4 * lcv);
    };
    return 'sum is: ' + ([a.sum(), b.sum(), c.sum(), d.sum()].sum() - 3);
});
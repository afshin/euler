require('./common/euler').run(function () {
    var memo = {}, pentagonals = {}, j, k, bound = 2500,
        pentagonal = function (n) {pentagonals[memo[n] = (3 * n * n - n) / 2] = null;};
    for (j = bound; (!(j in memo) && pentagonal(j)), j > 0; j -= 1)
        for (k = 1; (!(k in memo) && pentagonal(k)), k < bound; k += 1)
            if (((memo[j] - memo[k]) in pentagonals) && ((memo[j] + memo[k]) in pentagonals))
                return Math.abs(memo[k] - memo[j]);
    return 'increase value of bound';
});
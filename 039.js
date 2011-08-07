require('./common/euler').run(function () {
    var i, j, k, sum_i_j, upper = 1000 / 2, triplets = {}, totals = {}, triplet, total, max = 0, result;
    for (i = 1; i < upper; i += 1) {
        for (j = 1; j < upper - i; j += 1) {
            if (
                ((k = Math.sqrt(sum_i_j = Math.pow(i, 2) + Math.pow(j, 2))) % 1) || // k is not an integer
                (sum_i_j !== Math.pow(k, 2)) || // {i, j, k} is not a pythagorean triplet
                triplets[triplet = [i, j, k].sort().join('-')] // this triplet has already been seen
            ) continue;
            triplets[triplet] = total = i + j + k;
            totals[total] = totals[total] ? totals[total] + 1 : 1;
        }
    }
    for (total in totals) if ((max = Math.max(totals[total], max)) === totals[total]) result = total;
    return result;
});
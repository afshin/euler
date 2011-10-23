require('./common/euler').run(function () {
    var euler = this, pandigitals, i, j;
    for (i = 7; i > 0; i -= 1) // don't bother with 9-digit (sum 45) or 8-digit (sum 36) pandigitals
        for (j = (pandigitals = euler.permutations(euler.range(1, i))).length - 1; j > -1; j -= 1)
            if (euler.is_prime(+pandigitals[j])) return pandigitals[j];
});
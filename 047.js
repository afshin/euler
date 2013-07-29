require('./common/euler').run(function () {
    var euler = this, found = 0, current = 640, lcv = current, last = 0, magic = 4, distincts,
        divisors = euler.divisors, is_prime = euler.is_prime;
    while (found < magic) {
        distincts = divisors(current = lcv++, true).filter(is_prime).length;
        if (distincts !== magic) {
            found = last = 0;
            continue;
        }
        if (!found || current === last + 1) {
            found++;
            last = current;
            continue;
        }
    }
    return last - 3;
});
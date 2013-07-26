// never receives a number smaller than 3, so no need to deal with those cases
int is_prime(unsigned long long num) {
    unsigned long long lcv;
    if (num % 2 == 0) return 0;
    for (lcv = 3; (num / lcv) + 2 > lcv; lcv += 2) if (num % lcv == 0) return 0;
    return 1;
};
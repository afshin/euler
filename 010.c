#include <stdio.h>

// never receives a number smaller than 3, so no need to deal with those cases
int is_prime(unsigned long long int num) {
    unsigned long long int lcv;
    if (num % 2 == 0) return 0;
    for (lcv = 3; (num / lcv) + 2 > lcv; lcv += 2) if (num % lcv == 0) return 0;
    return 1;
};

int main() {
    unsigned long long int sum = 2, lcv;
    for (lcv = 3; lcv < 2000001; lcv += 1) if (is_prime(lcv)) sum += lcv;
    printf("sum of the primes below 2,000,000: %llu\n", sum);
};
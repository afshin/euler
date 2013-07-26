#include <stdio.h>
#include "common/prime.h"
int main(int argc, char *argv[])
{
    unsigned long long int sum = 2, lcv;
    for (lcv = 3; lcv < 2000001; lcv += 1) if (is_prime(lcv)) sum += lcv;
    printf("sum of the primes below 2,000,000: %llu\n", sum);
    return 0;
};
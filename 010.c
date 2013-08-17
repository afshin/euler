#include <stdio.h>
#include "common/euler.h"
void solution()
{
    unsigned long long int sum = 2, lcv;
    for (lcv = 3; lcv < 2000001; lcv += 1) if (euler_is_prime(lcv)) sum += lcv;
    printf("sum of the primes below 2,000,000: %llu\n", sum);
}
int main(int argc, char *argv[])
{
    return euler_run(argv[0], solution);
};
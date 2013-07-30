#include <math.h>
#include <stdio.h>
#include "common/euler.h"
int prime_divisors(unsigned long long num)
{
    int divisors = 0, limit = sqrt(num) + 1, lcv = 0, current_divisor = 0;
    for (lcv = 2; lcv < limit; lcv += 1) {
        if (0 != num % lcv) continue;
        current_divisor = num / lcv;
        if (current_divisor == lcv) {
            if (euler_is_prime(current_divisor)) divisors++;
        } else {
            if (euler_is_prime(current_divisor)) divisors++;
            if (euler_is_prime(lcv)) divisors++;
        }
    };
    return divisors;
}
void solution()
{
    int found = 0, magic = 4, distincts = 0;
    unsigned long long current = 640, lcv = current, last = 0;
    while (found < magic) {
        distincts = prime_divisors(current = lcv++);
        if (distincts != magic) {
            found = last = 0;
        } else if (!found || (current == last + 1)) {
            found++;
            last = current;
        }
    }
    printf("Answer is: %llu\n", last - magic + 1);
}
int main(int argc, char *argv[])
{
    euler_run(argv[0], solution);
    return 0;
}
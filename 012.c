#include <math.h>
#include <stdio.h>
#include "common/euler.h"
int divisors_found(unsigned long long int num)
{
    int found = 2, lcv;
    for (lcv = 2; lcv < (floor(sqrt(num))) + 1; lcv += 1)
        if (num % lcv == 0) found += 2;
    return found;
};
void solution()
{
    unsigned long long int current = 10ULL;
    int lcv = 5;
    while (divisors_found(current) < 500) current += lcv++;
    printf("Answer: %llu\n", current);
}
int main(int argc, char *argv[])
{
    return euler_run(argv[0], solution);
}
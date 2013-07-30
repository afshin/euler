#include <time.h>
#include <stdio.h>
#include "euler.h"
// never receives a number smaller than 2, so no need to deal with those cases
int euler_is_prime(unsigned long long num)
{
    unsigned long long lcv;
    if (num == 2) return 1;
    if (num % 2 == 0) return 0;
    for (lcv = 3; (num / lcv) + 2 > lcv; lcv += 2) if (num % lcv == 0) return 0;
    return 1;
}
void euler_run(euler_problem problem, euler_solution solution)
{
    clock_t start = clock();
    solution();
    clock_t end = clock();
    double milliseconds = (double)(end - start) * 1000 / CLOCKS_PER_SEC;
    printf("Program %s took %.2f ms\n", problem, milliseconds);
}